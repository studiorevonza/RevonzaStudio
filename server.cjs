require('dotenv').config();
const dns = require('dns');
// Force Node.js to prioritize IPv4 over IPv6 for outgoing connections (Gmail SMTP & Razorpay API)
dns.setDefaultResultOrder('ipv4first');
console.log('✅ DNS resolution order set to IPv4 first');

const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 4000;

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Middleware
app.use(cors({ 
  origin: ["https://www.revonzastudio.tech", "http://localhost:5173", "http://localhost:3000", "http://localhost:3001"] 
}));
app.use(express.json());

// PRODUCTS Data
const PRODUCTS = {
  "ui-kit-pro": {
    id: "ui-kit-pro",
    name: "UI Kit Pro",
    description: "Professional UI kit for modern web applications.",
    price: 100, // ₹499 in paise
    originalPrice: 200,
    tag: "Bestseller",
    downloadLink: "https://drive.google.com/open?id=UI_KIT_PRO_LINK"
  },
  "brand-identity-pack": {
    id: "brand-identity-pack",
    name: "Brand Identity Pack",
    description: "Complete brand identity design assets.",
    price: 100, // ₹999 in paise
    originalPrice: 200,
    tag: "Pro",
    downloadLink: "https://drive.google.com/open?id=BRAND_PACK_LINK"
  },
  "social-media-templates": {
    id: "social-media-templates",
    name: "Social Media Templates",
    description: "High-quality templates for social media growth.",
    price: 100, // ₹299 in paise
    originalPrice: 200,
    tag: "Trending",
    downloadLink: "https://drive.google.com/open?id=SOCIAL_TEMPLATES_LINK"
  }
};

// Helper function to send beautiful HTML email
async function sendProductEmail(email, productName, downloadLink) {
  const mailOptions = {
    from: `"Revonza Studio" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Your Download Link for ${productName}`,
    html: `
      <div style="background-color: #0f0f0f; color: #ffffff; padding: 40px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border-radius: 20px; border: 1px solid #2d2d2d;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #8b5cf6; margin: 0; font-size: 28px;">Revonza Studio</h1>
          <p style="color: #a0a0a0; font-size: 14px;">Premium Design Resources</p>
        </div>
        
        <div style="background-color: #1a1a1a; padding: 30px; border-radius: 15px; text-align: center;">
          <h2 style="color: #ffffff; margin-top: 0;">Thank you for your purchase!</h2>
          <p style="color: #cccccc; line-height: 1.6;">You have successfully purchased <strong>${productName}</strong>. We're excited for you to start using it!</p>
          
          <div style="margin: 40px 0;">
            <a href="${downloadLink}" style="background-color: #8b5cf6; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 18px; box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); display: inline-block;">
              Download Your Files
            </a>
          </div>
          
          <p style="color: #888888; font-size: 12px; margin-top: 30px;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            <span style="color: #8b5cf6; word-break: break-all;">${downloadLink}</span>
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; color: #666666; font-size: 12px;">
          <p>This is for personal use only — Revonza Studio</p>
          <div style="margin-top: 10px;">
            <a href="https://www.revonzastudio.tech" style="color: #8b5cf6; text-decoration: none;">www.revonzastudio.tech</a>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

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
      email, 
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

    // ✅ Return success IMMEDIATELY — don't block on email
    res.json({ 
      success: true, 
      productName: product.name, 
      message: 'Payment verified! Check your email for the download link.' 
    });

    // 📧 Send email in background — errors won't affect the user
    sendProductEmail(email, product.name, product.downloadLink)
      .then(() => console.log(`✅ Email sent to ${email} for ${product.name}`))
      .catch((err) => console.error(`❌ Email failed for ${email}:`, err.message));

  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/products', (req, res) => {
  // Return all products but omit the downloadLink for security
  const publicProducts = Object.values(PRODUCTS).map(({ downloadLink, ...product }) => product);
  res.json(publicProducts);
});

// Catch-all handler for client-side routing - this must be the last route
// This handles ALL routes that aren't static files and serves index.html
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