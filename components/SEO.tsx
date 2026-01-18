import React, { useEffect } from 'react';
import { GLOBAL_SEO, PageSEO, DEFAULT_SCHEMA } from '../seo-config';

interface SEOProps {
  pageSEO: PageSEO;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ pageSEO, children }) => {
  const fullTitle = `${pageSEO.title} | ${GLOBAL_SEO.title}`;
  
  // Combine global and page keywords
  const allKeywords = [...GLOBAL_SEO.keywords, ...(pageSEO.keywords || [])].join(', ');

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta tags
    updateMetaTag('description', pageSEO.description);
    updateMetaTag('keywords', allKeywords);
    updateMetaTag('author', GLOBAL_SEO.author);
    updateMetaTag('theme-color', GLOBAL_SEO.themeColor);
    
    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', pageSEO.description);
    updateMetaTag('og:type', pageSEO.ogType || 'website');
    updateMetaTag('og:url', pageSEO.canonical || window.location.href);
    updateMetaTag('og:locale', GLOBAL_SEO.locale);
    if (pageSEO.ogImage) {
      updateMetaTag('og:image', pageSEO.ogImage);
    }
    
    // Update Twitter tags
    updateMetaTag('twitter:card', pageSEO.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', pageSEO.description);
    if (pageSEO.ogImage) {
      updateMetaTag('twitter:image', pageSEO.ogImage);
    }
    
    // Update robots tag
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Update canonical URL
    updateLinkTag('canonical', pageSEO.canonical || window.location.href);
    
    // Update structured data
    updateStructuredData(DEFAULT_SCHEMA);
    if (pageSEO.structuredData) {
      updateStructuredData(pageSEO.structuredData);
    }
    
    // Cleanup function
    return () => {
      // Reset to defaults if needed
    };
  }, [pageSEO, fullTitle, allKeywords]);

  const updateMetaTag = (name: string, content: string) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  };

  const updateLinkTag = (rel: string, href: string) => {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', rel);
      document.head.appendChild(linkTag);
    }
    
    linkTag.setAttribute('href', href);
  };

  const updateStructuredData = (data: any) => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return <>{children}</>;
};

export default SEO;