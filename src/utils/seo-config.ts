export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

export const GLOBAL_SEO = {
  title: 'Revonza Studio',
  description: 'Professional web development and design services',
  keywords: [
    'web development',
    'web design',
    'react development',
    'typescript',
    'vite',
    'seo services',
    'digital marketing',
    'branding services'
  ],
  author: 'Revonza Studio',
  themeColor: '#8b5cf6',
  locale: 'en_US',
  siteName: 'Revonza Studio',
  twitterHandle: '@revonzastudio',
  url: 'https://www.revonzastudio.tech'
};

export const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Revonza Studio",
  "url": "https://www.revonzastudio.tech",
  "logo": "https://www.revonzastudio.tech/favicon-light.png",
  "description": "Professional web development and design services",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "India",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.linkedin.com/company/revonza-studio",
    "https://twitter.com/revonzastudio",
    "https://instagram.com/revonzastudio"
  ]
};