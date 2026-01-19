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
    title: 'TAKE OPINION MEDICAL',
    tags: ['web', 'logo', 'hosting', 'branding'],
    category: 'Website & Branding',
    image: 'public/ProjectImage/WEBSITE/Screenshot 2026-01-19 230105.png',
    description: 'A comprehensive banking dashboard with real-time data visualization and a secure backend infrastructure.',
    images: [
  ],
    bannerText: 'Medical Innovation at Its Finest'
  },
  {
    id: '2',
    title: 'EcoSphere AI Assistant',
    tags: ['ai', 'web', 'seo', 'maintenance'],
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
    description: 'An intelligent chatbot integrated into an e-commerce platform to handle customer queries and product recommendations automatically.',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563206767-e4db5d3e8334?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1676823104070-48f1c5f0d3bc?q=80&w=2787&auto=format&fit=crop'
    ],
    bannerText: 'AI-Powered Solutions'
  },
  {
    id: '3',
    tags: ['graphic', 'logo', 'thumbnail', 'branding'],
    title: 'Vivid Stream Rebrand',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2670&auto=format&fit=crop',
    description: 'A complete visual overhaul for a streaming service, including logo redesign, social media assets, and YouTube thumbnails.',
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579033462043-0f11fe7c0f1b?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=2787&auto=format&fit=crop'
    ],
    bannerText: 'Creative Redesign Journey'
  },
 
  {
    id: '5',
    title: 'CloudSafe Hosting',
    tags: ['hosting', 'web'],
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-efc535b5c47c?q=80&w=2674&auto=format&fit=crop',
    description: 'Migration and setup of a scalable cloud hosting environment for a high-traffic SaaS application.',
    images: [
      'https://images.unsplash.com/photo-1558494949-efc535b5c47c?q=80&w=2674&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567337719746-3fddd5bf7c9c?q=80&w=2864&auto=format&fit=crop'
    ],
    bannerText: 'Secure Cloud Solutions'
  },
  {
    id: '6',
    title: 'TechTalks Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
    description: 'Logo creation and comprehensive brand guidelines for a technology podcast and blog series.',
    tags: ['logo', 'graphic', 'thumbnail', 'branding'],
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2874&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
    ],
    bannerText: 'Brand Identity Experts'
  }
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