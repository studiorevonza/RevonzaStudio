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
  usdPrice?: string;
  usdDiscountedPrice?: string;
  features: string[];
  recommended?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  tag?: string;
}

export interface OrderResponse {
  orderId: string;
  amount: number;
  productName: string;
  currency?: string;
}

export interface PaymentVerifyResponse {
  success: boolean;
  productName?: string;
  message?: string;
}

