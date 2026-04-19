require('dotenv').config();
const dns = require('dns');
// Force Node.js to prioritize IPv4 over IPv6 for outgoing connections (Razorpay API)
dns.setDefaultResultOrder('ipv4first');
console.log('✅ DNS resolution order set to IPv4 first');
console.log('💳 RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID ? '✅ SET' : '❌ NOT SET');

const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');

const app = express();
const PORT = process.env.PORT || 4000;

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Middleware
app.use(cors({ 
  origin: ["https://www.revonzastudio.tech", "http://localhost:5173", "http://localhost:3000", "http://localhost:3001", "*"],
  credentials: true
}));
app.use(express.json());

// Log API requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// PRODUCTS Data
const PRODUCTS = {
  "ai-prompts-pack": {
    id: "ai-prompts-pack",
    name: "AI Prompts Pack",
    description: "Get access to a powerful collection of AI prompts designed for multiple use cases across different fields. Covers Business, AI Automation, Study, Productivity, Freelancing, Content Creation, and more. Beginner to advanced prompts — easy to use, customizable, and designed for real-world results.",
    price: 4900,         // ₹49 in paise
    originalPrice: 9900, // ₹99 in paise
    tag: "Bestseller",
    link: "https://drive.google.com/drive/folders/16-nyYMOyQAIWNRkLOHBOGSOkCZq4z754?usp=sharing"
  }
};

// Enable gzip compression
app.use(compression());

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Simple health route
app.get('/api/health', (req, res) => {
  res.json({ status: "ok" });
});

// API Routes
app.post('/api/create-order', async (req, res) => {
  try {
    const { productId } = req.body;
    const product = PRODUCTS[productId];

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const options = {
      amount: product.price, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    res.json({
      orderId: order.id,
      amount: order.amount,
      productName: product.name,
      currency: order.currency
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.post('/api/verify-payment', async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      productId 
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid signature' });
    }

    const product = PRODUCTS[productId];
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      success: true,
      productName: product.name,
      downloadLink: product.link,
      amount: product.price / 100,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id
    });

  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/products', (req, res) => {
  // Return all products but omit the link for security
  const publicProducts = Object.values(PRODUCTS).map(({ link, ...product }) => product);
  res.json(publicProducts);
});

// Catch-all handler for client-side routing - this must be the last route
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});