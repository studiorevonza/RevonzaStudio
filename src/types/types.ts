export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string; // Main category for display
  image: string;
  description: string;
  tags: string[]; // IDs of services used
  images?: string[]; // Optional array of additional images
  bannerText?: string; // Optional casual banner text
}

export interface PricingTier {
  name: string;
  price: string;
  discountedPrice?: string;
  features: string[];
  recommended?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

