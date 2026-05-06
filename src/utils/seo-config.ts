export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  geo?: {
    region: string;
    placename: string;
    position: string;
  };
}

export const GLOBAL_SEO = {
  title: 'Revonza Studio',
  description: 'Professional web development, SEO services, and digital marketing solutions for startups and businesses. Custom websites, AI integration, branding, and digital transformation services.',
  keywords: [
    'web development services',
    'web design company',
    'seo services india',
    'digital marketing agency',
    'custom website development',
    'react development',
    'typescript development',
    'vite framework',
    'ai integration services',
    'branding agency',
    'logo design services',
    'graphic design company',
    'website maintenance',
    'hosting solutions',
    'startup web development',
    'small business website',
    'affordable web design',
    'professional web services',
    'digital transformation',
    'ui ux design services'
  ],
  author: 'Revonza Studio',
  themeColor: '#8b5cf6',
  locale: 'en_US',
  siteName: 'Revonza Studio',
  twitterHandle: '@revonzastudio',
  url: 'https://revonzastudio.tech',
  geo: {
    region: 'IN-DL',
    placename: 'New Delhi',
    position: '28.6139;77.2090'
  }
};

export const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Revonza Studio",
  "url": "https://revonzastudio.tech",
  "logo": "https://revonzastudio.tech/favicon-light.png",
  "description": "Professional web development, SEO services, and digital marketing solutions for startups and businesses. Custom websites, AI integration, branding, and digital transformation services.",
  "telephone": "+919714407181",
  "email": "studiorevonza@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Delhi",
    "addressLocality": "Delhi",
    "addressRegion": "DL",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+919714407181",
    "email": "studiorevonza@gmail.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/revonza-studio",
    "https://twitter.com/revonzastudio",
    "https://instagram.com/revonzastudio"
  ],
  "offers": {
    "@type": "OfferCatalog",
    "name": "Web Development & Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing"
        }
      }
    ]
  }
};