const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Serve static files from the dist folder with proper MIME types
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  etag: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes (if any) should be defined before the catch-all handler
// Example:
// app.get('/api/example', (req, res) => {
//   res.json({ message: 'API endpoint' });
// });

// Catch-all handler for client-side routing
// This ensures that all routes fall back to index.html for React Router to handle
// Only exclude actual static assets (files with extensions)
app.get(/^(?!\/api|\/health).*$/, (req, res) => {
  // Check if the request is for a file with an extension
  if (/\.(js|mjs|css|json|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|map|xml|txt|pdf|zip|doc|docx|xls|xlsx)$/i.test(req.path)) {
    // If it's a static asset that doesn't exist, let Express handle it normally
    // and it will return a 404
    res.status(404).sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    // This is a client-side route, serve index.html
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }
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

// Graceful shutdown
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