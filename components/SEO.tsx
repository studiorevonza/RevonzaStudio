import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GLOBAL_SEO, PageSEO, DEFAULT_SCHEMA } from '../seo-config';

interface SEOProps {
  pageSEO: PageSEO;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ pageSEO, children }) => {
  const fullTitle = `${pageSEO.title} | ${GLOBAL_SEO.title}`;
  
  // Combine global and page keywords
  const allKeywords = [...GLOBAL_SEO.keywords, ...(pageSEO.keywords || [])].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageSEO.description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={GLOBAL_SEO.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={GLOBAL_SEO.themeColor} />
      
      {/* Canonical URL */}
      {pageSEO.canonical && <link rel="canonical" href={pageSEO.canonical} />}
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href={GLOBAL_SEO.favicon} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageSEO.description} />
      <meta property="og:type" content={pageSEO.ogType || 'website'} />
      <meta property="og:url" content={pageSEO.canonical || window.location.href} />
      <meta property="og:locale" content={GLOBAL_SEO.locale} />
      {pageSEO.ogImage && <meta property="og:image" content={pageSEO.ogImage} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={pageSEO.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageSEO.description} />
      {pageSEO.ogImage && <meta name="twitter:image" content={pageSEO.ogImage} />}
      
      {/* Robots Tag */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(DEFAULT_SCHEMA)}
      </script>
      
      {/* Page-specific structured data */}
      {pageSEO.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(pageSEO.structuredData)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};

export default SEO;