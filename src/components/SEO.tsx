import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { GLOBAL_SEO, PageSEO, DEFAULT_SCHEMA } from '../utils/seo-config';

interface SEOProps {
  pageSEO: PageSEO;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ pageSEO, children }) => {
  const fullTitle = `${pageSEO.title} | ${GLOBAL_SEO.title}`;
  const fullDescription = pageSEO.description || GLOBAL_SEO.description;
  
  // Combine global and page keywords
  const allKeywords = [...GLOBAL_SEO.keywords, ...(pageSEO.keywords || [])].join(', ');

  // Construct canonical URL
  const canonicalUrl = pageSEO.canonical || `${GLOBAL_SEO.url}${window.location.pathname}`;

  // Construct og:image URL
  const ogImageUrl = pageSEO.ogImage || `${GLOBAL_SEO.url}/og-default.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={GLOBAL_SEO.author} />
      <meta name="theme-color" content={GLOBAL_SEO.themeColor} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={pageSEO.ogType || 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={GLOBAL_SEO.siteName} />
      <meta property="og:locale" content={GLOBAL_SEO.locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={pageSEO.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content={GLOBAL_SEO.twitterHandle} />

      {/* Structured Data */}
      {pageSEO.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(pageSEO.structuredData)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(DEFAULT_SCHEMA)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Performance and Security */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-title" content={GLOBAL_SEO.title} />
      <meta name="application-name" content={GLOBAL_SEO.title} />

      {children}
    </Helmet>
  );
};

export default SEO;