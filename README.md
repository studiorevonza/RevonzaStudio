# Revonza Studio

A modern React application built with Vite, featuring a clean and organized project structure.

## Project Structure

```
revonza-studio/
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── ...other public assets
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── services/
│   │   │   ├── AIIntegrationPage.tsx
│   │   │   ├── DesignBrandingPage.tsx
│   │   │   ├── GraphicDesignPage.tsx
│   │   │   ├── HostingSolutionsPage.tsx
│   │   │   ├── LogoDesignPage.tsx
│   │   │   ├── MaintenanceModificationPage.tsx
│   │   │   ├── ProductLaunchingPage.tsx
│   │   │   ├── ThumbnailDesignPage.tsx
│   │   │   └── WebsiteDevelopmentPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ComingSoonPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DetailedPricingPage.tsx
│   │   ├── Home.tsx
│   │   ├── PricingPage.tsx
│   │   ├── ProjectDetailsPage.tsx
│   │   └── ServicesPage.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── utils/
│   │   ├── constants.ts
│   │   └── seo-config.ts
│   ├── types/
│   │   └── types.ts
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── ...other config files
```

## Features

- Modern React with TypeScript
- Vite for fast builds and development
- Routing with React Router DOM
- Context API for state management
- Responsive design with Tailwind CSS
- Dark/light mode support
- SEO optimized

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build
