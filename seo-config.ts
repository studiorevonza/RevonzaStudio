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
  title: 'Revonza Studio - Digital Excellence Engineering',
  description: 'We engineer digital excellence. Turning complex ideas into intelligent, beautiful experiences for the modern web.',
  keywords: [
    'web development', 'SEO optimization', 'AI integration', 'logo design',
    'digital marketing', 'branding', 'website design', 'software development',
    'react development', 'full stack development', 'digital agency'
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
  url: GLOBAL_SEO.siteUrl,
  logo: `${GLOBAL_SEO.siteUrl}/logo.png`,
  sameAs: [
    'https://www.linkedin.com/company/revonza-studio',
    'https://twitter.com/revonzastudio',
    'https://instagram.com/revonzastudio'
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