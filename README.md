# Revonza Studio - Digital Agency Website

Welcome to Revonza Studio, a modern digital agency website showcasing web development, design, and digital marketing services. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Key Features

- **Modern Tech Stack**: React 18, TypeScript, Vite with lightning-fast development
- **Responsive Design**: Fully responsive mobile-first design with Tailwind CSS
- **Performance Optimized**: Code splitting, tree shaking, and lazy loading
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Dynamic SEO component with static meta tags, valid robots.txt, and structured data setup for optimal Google Search Console indexing.
- **Theme Support**: Custom dark/light theme context
- **Production Ready**: Express server with compression and security headers
- **WhatsApp Integration**: Direct contact form integration with WhatsApp
- **Privacy Focused**: Automatic cookie and site data removal for user privacy
- **Professional UI**: Glass morphism design with modern aesthetics

## 🛠️ Technology Stack

### Frontend
- **Core**: React 18, TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 7.x
- **Animations**: Framer Motion 12.x
- **Icons**: Lucide React, Font Awesome
- **State Management**: React Context API

### Backend
- **Server**: Express.js 4.x
- **Compression**: compression middleware
- **Image Processing**: Sharp

### Development
- **Type Checking**: TypeScript 5.x
- **Bundling**: Vite with Terser
- **SSL**: Vite SSL plugin for local development

## 📋 Prerequisites

- **Node.js**: v18 or higher
- **npm**: v8 or higher (comes with Node.js)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## 🚀 Getting Started

### Quick Setup

1. **Clone the repository**:
```bash
git clone https://github.com/studiorevonza/RevonzaStudio.git
cd revonza-studio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite's default port).

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run serve        # Preview with network access

# Production
npm run build        # Create production build
npm run preview      # Preview production build locally
npm start            # Start production server
```

### Environment Setup

Create a `.env.local` file in the root directory for environment variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Optional: Custom configuration
# VITE_API_URL=http://localhost:3001
```

## 🚢 Deployment

### Deploy to Render

This project is configured for deployment on Render. Follow these steps:

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository
2. **Connect to Render**: 
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` configuration
3. **Configuration**:
   - Environment: Node.js
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Region: Oregon (or your preferred region)

### Manual Deployment

If deploying manually to a server:

1. Build the project: `npm run build`
2. Install production dependencies: `npm install --production`
3. Start the server: `npm start`

## 🏗️ Project Structure

```
revonza-studio/
├── public/                 # Static assets and public files
│   ├── ProjectImage/      # Project images and logos
│   └── feedback/          # Client testimonials
├── src/
│   ├── assets/            # Application assets
│   ├── components/        # Reusable UI components
│   │   ├── Layout/        # Header, Footer, and layout components
│   │   └── SEO.tsx        # Dynamic SEO component
│   ├── contexts/          # React Context providers
│   │   └── ThemeContext.tsx # Theme management
│   ├── pages/             # Page components
│   │   ├── services/      # Service-specific pages
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── Home.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ServicesPage.tsx
│   ├── types/             # TypeScript interfaces and types
│   ├── utils/             # Utility functions and configurations
│   │   ├── constants.ts   # Application constants
│   │   └── seo-config.ts  # SEO configuration
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point (includes privacy features)
├── dist/                  # Production build output
├── server.cjs             # Production Express server
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## 📁 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run serve` | Start preview server with network access |
| `npm start` | Start production Express server |

> **Note**: The auto cookie removal feature works automatically in production builds and enhances user privacy without requiring additional scripts.

## 🌐 Environment Variables

Configure the application using these environment variables:

```env
# Server Configuration
PORT=3000                    # Server port (default: 3000)
NODE_ENV=development         # Environment mode

# Optional Variables
VITE_API_URL=http://localhost:3001  # API endpoint
VITE_APP_NAME=Revonza Studio        # Application name
```

## 🔒 Security & Privacy Features

The application includes comprehensive security and privacy measures:

- **HTTP Headers**: XSS protection, Content Security Policy
- **Transport Security**: Strict Transport Security (HSTS)
- **Frame Protection**: X-Frame-Options header
- **Permissions Policy**: Controlled browser features
- **Compression**: Gzip compression for efficient delivery
- **Auto Data Cleanup**: Automatic removal of cookies and site data after session
- **Inactivity Protection**: Data cleared after 30 minutes of inactivity
- **Privacy First**: No persistent tracking or data retention

## 📱 Browser Compatibility

Fully compatible with modern browsers:

- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version
- **Edge**: Latest version
- **Mobile Browsers**: iOS Safari, Android Chrome

**Privacy Features Support**:
- Automatic cookie clearing
- Session storage cleanup
- Cache management
- Inactivity detection

## 🤝 Contributing

We welcome contributions to improve Revonza Studio!

### Steps to Contribute

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/RevonzaStudio.git
   ```
3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and commit:
   ```bash
   git commit -m "Add your feature description"
   ```
5. **Push** to your fork:
   ```bash
   git push origin feature main
   ```
6. **Create a Pull Request** with a detailed description

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

For support, questions, or collaboration opportunities:

- **Email**: studiorevonza@gmail.com
- **Phone**: +91 9714407181, +91 8851619647
- **GitHub Issues**: [Repository Issues](https://github.com/studiorevonza/RevonzaStudio/issues)
- **WhatsApp**: Direct messaging via contact form

## 🌟 Acknowledgments

- Built with modern web technologies
- Inspired by contemporary digital agency designs
- Special thanks to the open-source community

---

<p align="center">
  <strong>Built with ❤️ by Revonza Studio</strong>
</p>

<p align="center">
  <a href="https://revonzastudio.tech">Visit Our Website</a> •
  <a href="https://wa.me/919714407181">Contact Us</a> •
  <a href="mailto:studiorevonza@gmail.com">Email Us</a>
</p>