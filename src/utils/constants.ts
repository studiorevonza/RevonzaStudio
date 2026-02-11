import { NavItem, Service, Project, PricingTier } from './types';

export const BRAND_NAME = "Revonza Studio";
export const TAGLINE = "Turning Ideas Into Intelligent Experiences.";

export const LOGO_WHITE_URL = "https://i.ibb.co/60qwhS0/image.png";
export const LOGO_BLACK_URL = "https://i.ibb.co/2Z580M6/image.png";

// Updated Colors - Using the Brighter Purple
export const COLORS = {
  base: '#1e202c',
  accent: '#8b5cf6', // Brighter Purple
  card: '#31323e',
  text: '#bfc0d1',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Forge a digital identity that commands attention. We engineer high-performance, pixel-perfect websites and web applications designed to convert visitors into loyal advocates. Speed, security, and scalability are built-in, not add-ons.',
    icon: 'MonitorSmartphone'
  },
  
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Future-proof your business with intelligent automation. We seamlessly integrate custom AI solutions—from smart chatbots to predictive analytics—that streamline operations and create personalized customer experiences.',
    icon: 'BrainCircuit'
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Distill your brand\'s essence into a timeless mark. We craft memorable visual identities that resonate deeply with your audience, ensuring your brand stands out in a crowded marketplace.',
    icon: 'Fingerprint'
  },
  {
    id: 'thumbnail-design',
    title: 'Thumbnail Design',
    description: 'Stop the scroll with high-impact visuals. Our scientifically designed thumbnails are optimized for click-through rates, turning casual browsers into engaged viewers across YouTube and social media platforms.',
    icon: 'Layers'
  },
  {
    id: 'product-launching',
    title: 'Product Launching',
    description: 'Ignite your market entry with a strategic blast-off. We orchestrate comprehensive launch campaigns, managing everything from hype-building assets to go-to-market execution for maximum impact.',
    icon: 'Rocket'
  },
  {
    id: 'hosting-solutions',
    title: 'Hosting Solutions',
    description: 'Experience rock-solid reliability for your digital assets. Our managed hosting infrastructure delivers blazing fast speeds, 99.9% uptime, and military-grade security to keep your business online, always.',
    icon: 'DatabaseZap'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Tell your story through captivating visuals. From marketing collateral to social assets, we create cohesive, high-fidelity designs that elevate your brand narrative and engage your audience visually.',
    icon: 'Paintbrush'
  },
  {
    id: 'design-branding',
    title: 'Design & Branding',
    description: 'Craft a cohesive visual identity that resonates with your audience. We develop comprehensive brand guidelines, color palettes, typography, and visual assets that communicate your unique value proposition.',
    icon: 'Palette'
  },
  {
    id: 'maintenance-modification',
    title: 'Maintenance & Modification',
    description: 'Keep your digital assets running smoothly with our ongoing maintenance services. We provide updates, bug fixes, performance optimizations, and feature enhancements to ensure your investment continues to deliver value.',
    icon: 'Wrench'
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MEDICAL WEBSITE',
    tags: ['web', 'logo', 'hosting', 'branding'],
    category: 'Website & Branding',
    image: '/ProjectImage/WEBSITE/medicalimage.webp',
    description: 'A professional website and branding package designed for a local business looking to establish its online presence.',
    images: [
      '/ProjectImage/WEBSITE/Screenshot 2026-01-19 230225.png',
      '/ProjectImage/WEBSITE/Screenshot 2026-01-19 230249.png',
      '/ProjectImage/WEBSITE/Screenshot 2026-01-19 230305.png'
    ],
    bannerText: 'Medical Innovation at Its Finest'
  },
  {
    id: '2',
    title: 'TRAVEL THUMBNAIL DESIGN',
    tags: ['graphic', 'thumbnail', 'travel'],
    category: 'Graphic Design',
    image: '/ProjectImage/Thumnails/5.svg',
    description: 'A visually appealing thumbnail designed to entice viewers and drive clicks for a travel-related YouTube channel.',
    images: [
      '/ProjectImage/Thumnails/3.svg',
      '/ProjectImage/Thumnails/4.svg',

    ],
    bannerText: 'Travel Inspiration Awaits You!'
  },
  {
    id: '3',
    title: 'LOGO DESIGN',
    tags: ['logo', 'graphic', 'thumbnail', 'branding'],
    category: 'Graphic Design',
    image: '/ProjectImage/Logo/8.svg',
    description: 'A professional logo design for a local business looking to establish its online presence.',
    images: [
      '/ProjectImage/Logo/2.svg',
      '/ProjectImage/Logo/3.svg',
      '/ProjectImage/Logo/5.svg',

    ],
    bannerText: 'Professional Logo Design for Local Business Establishment and Branding Services'
  },
 
];

export const PRICING: PricingTier[] = [
  {
    name: 'Starter',
    price: '₹20,000',
    features: [
      'Basic Website (5–7 Pages)',
      'Responsive Design (Mobile + Tablet)',
      'Template-based Modern UI',
      'Contact / Lead Form',
      'Basic SEO Setup',
      'Google Analytics Setup',
      'Performance Optimization',
      '1 Month Support'
    ]
  },
  {
    name: 'Professional',
    price: '₹40,000',
    features: [
      'Advanced Website (Custom UI)',
      'CMS / Admin Panel',
      'Animations & Interactions',
      'Advanced SEO Structure',
      'Branding Kit (Logo + Graphics)',
      'Google Analytics & Tracking',
      'Social Media Integration',
      'Blog Setup',
      'Priority Support',
      '3 Months Support'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom Price',
    features: [
      'Fully Custom Website / Web Application',
      'Dashboards & Role-based Access',
      'AI Solution Integration',
      'CRM & Third-party Integrations',
      'Advanced Security & Performance',
      'Custom Analytics Dashboard',
      'Dedicated Project Manager',
      'Scalable Architecture',
      'White-label Solution',
      '24/7 Priority Support'
    ]
  }
];