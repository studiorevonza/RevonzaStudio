# Revonza Studio - Web Development & Design Services

Welcome to Revonza Studio, a modern web development and design services platform built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first responsive layout
- **Performance Optimized**: Tree shaking, code splitting, and lazy loading
- **Styling**: Tailwind CSS with custom themes
- **Animations**: Framer Motion for smooth animations
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation
- **Production Ready**: Express server with compression and security headers

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: React + Custom Components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Server**: Express.js with compression middleware
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/studiorevonza/RevonzaStudio.git
cd revonza-studio
```

2. Install dependencies:
```bash
npm install
```

### Development

To run the application in development mode:

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`.

### Production Build

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with the optimized production-ready files.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
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
src/
├── assets/          # Static assets
├── components/      # Reusable components
│   ├── Layout/      # Header, Footer components
│   └── SEO.tsx      # SEO component (removed in production builds)
├── contexts/        # React Context providers
├── pages/           # Route components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions and constants
├── App.tsx          # Main application component
└── main.tsx         # Entry point
```

## 📁 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm start` - Start production server

## 🌐 Environment Variables

The application can be configured using the following environment variables:

- `PORT` - Port number for the server (defaults to 3000)
- `NODE_ENV` - Environment mode (development/production)

## 🔒 Security Features

- XSS Protection Headers
- Content Security Policy
- Strict Transport Security
- Frame Options Protection
- Permissions Policy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, please contact the development team through the GitHub repository issues.

---

Built with ❤️ by Revonza Studio