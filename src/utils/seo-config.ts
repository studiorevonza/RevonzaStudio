// Comprehensive SEO Configuration for Revonza Studio
export interface SEOConfig {
  siteUrl: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  locale: string;
  themeColor: string;
  favicon: string;
}

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

// Global SEO Configuration
export const GLOBAL_SEO: SEOConfig = {
  siteUrl: 'https://revonzastudio.com',
  title: 'Revonza Studio - Top Web Development & SEO Agency India | Custom Website Design Services',
  description: 'Leading web development & SEO agency in India. Expert custom website design, AI integration, digital marketing & branding services. Boost your online presence today!',
  keywords: [
    'web development agency India', 'web design services', 'SEO company India', 'custom website development',
    'AI integration services', 'digital marketing agency', 'logo design services', 'branding agency',
    'React development', 'full stack development', 'e-commerce development', 'mobile app development',
    'SEO optimization services', 'digital transformation', 'web application development', 'UI UX design',
    'website maintenance services', 'online presence solutions', 'business website development',
    'top web developers', 'professional web designers', 'affordable website design', 'enterprise web solutions'
  ],
  author: 'Revonza Studio',
  locale: 'en_US',
  themeColor: '#8b5cf6',
  favicon: '/favicon.ico'
};

// Default structured data
export const DEFAULT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Revonza Studio',
  alternateName: ['Revonza Studio', 'Revonza Development', 'Revonza Digital Agency'],
  url: GLOBAL_SEO.siteUrl,
  logo: `${GLOBAL_SEO.siteUrl}/logo.png`,
  image: `${GLOBAL_SEO.siteUrl}/og-home.jpg`,
  description: GLOBAL_SEO.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'India',
    addressCountry: 'IN'
  },
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: '+91-8851619647',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: 'en'
  }],
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Revonza Studio Team'
  },
  sameAs: [
    'https://www.linkedin.com/company/revonza-studio',
    'https://twitter.com/revonzastudio',
    'https://instagram.com/revonzastudio',
    'https://www.facebook.com/revonzastudio',
    'https://www.youtube.com/@revonzastudio'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50+'
  },
  award: [
    'Top Web Development Agency India',
    'Best SEO Services Provider',
    'Leading Digital Marketing Agency'
  ]
};

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Article schema generator
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Revonza Studio',
    logo: {
      '@type': 'ImageObject',
      url: `${GLOBAL_SEO.siteUrl}/logo.png`
    }
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  image: article.image
});

// FAQ schema generator
export const generateFAQSchema = (faqItems: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
});

// Product schema generator
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
  };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  offers: {
    '@type': 'Offer',
    price: product.offers.price.toString(),
    priceCurrency: product.offers.priceCurrency,
    availability: product.offers.availability,
    seller: {
      '@type': 'Organization',
      name: 'Revonza Studio'
    }
  }
});

// Review schema generator
export const generateReviewSchema = (review: {
  itemReviewed: string;
  reviewRating: number;
  author: string;
  reviewBody: string;
  datePublished: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: review.itemReviewed
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: review.reviewRating.toString(),
    bestRating: '5'
  },
  author: {
    '@type': 'Person',
    name: review.author
  },
  reviewBody: review.reviewBody,
  datePublished: review.datePublished
});