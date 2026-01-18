import { NavItem, Service, Project, PricingTier, Testimonial } from './types';

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
    title: 'Nexus FinTech Platform',
    category: 'Website & Branding',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    description: 'A comprehensive banking dashboard with real-time data visualization and a secure backend infrastructure.',
    tags: ['web', 'logo', 'hosting', 'branding']
  },
  {
    id: '2',
    title: 'EcoSphere AI Assistant',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
    description: 'An intelligent chatbot integrated into an e-commerce platform to handle customer queries and product recommendations automatically.',
    tags: ['ai', 'web', 'seo', 'maintenance']
  },
  {
    id: '3',
    title: 'Vivid Stream Rebrand',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2670&auto=format&fit=crop',
    description: 'A complete visual overhaul for a streaming service, including logo redesign, social media assets, and YouTube thumbnails.',
    tags: ['graphic', 'logo', 'thumbnail', 'branding']
  },
 
  {
    id: '5',
    title: 'CloudSafe Hosting',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-efc535b5c47c?q=80&w=2674&auto=format&fit=crop',
    description: 'Migration and setup of a scalable cloud hosting environment for a high-traffic SaaS application.',
    tags: ['hosting', 'web']
  },
  {
    id: '6',
    title: 'TechTalks Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
    description: 'Logo creation and comprehensive brand guidelines for a technology podcast and blog series.',
    tags: ['logo', 'graphic', 'thumbnail']
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Nexus FinTech',
    content: 'Revonza Studio transformed our digital presence. The AI integration they built has saved us hundreds of hours in customer support.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Vivid Stream',
    content: 'The new branding is absolutely stunning. They understood our vision perfectly and delivered a logo that truly stands out.',
    avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'EcoSphere',
    content: 'Professional, fast, and incredibly talented. The SEO strategies they implemented doubled our organic traffic in just three months.',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d'
  }
];