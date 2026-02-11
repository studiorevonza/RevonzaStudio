import React, { useEffect } from 'react';
import { GLOBAL_SEO, PageSEO, DEFAULT_SCHEMA } from '../seo-config';

interface SEOProps {
  pageSEO: PageSEO;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ pageSEO, children }) => {
  const fullTitle = pageSEO.title;
  
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
    
    // Update viewport for mobile optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    
    // Update robots tag for better indexing
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, noodp');
    
    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', pageSEO.description);
    updateMetaTag('og:type', pageSEO.ogType || 'website');
    updateMetaTag('og:url', pageSEO.canonical || window.location.href);
    updateMetaTag('og:locale', GLOBAL_SEO.locale);
    updateMetaTag('og:site_name', GLOBAL_SEO.title);
    if (pageSEO.ogImage) {
      updateMetaTag('og:image', pageSEO.ogImage);
      updateMetaTag('og:image:width', '1200');
      updateMetaTag('og:image:height', '630');
      updateMetaTag('og:image:alt', fullTitle);
    }
    
    // Update Twitter tags
    updateMetaTag('twitter:card', pageSEO.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', pageSEO.description);
    updateMetaTag('twitter:site', '@revonzastudio');
    updateMetaTag('twitter:creator', '@revonzastudio');
    if (pageSEO.ogImage) {
      updateMetaTag('twitter:image', pageSEO.ogImage);
    }
    
    // Update canonical URL
    updateLinkTag('canonical', pageSEO.canonical || window.location.href);
    
    // Update alternate languages
    updateLinkTag('alternate', 'https://revonzastudio.com/en/');
    
    // Update structured data
    updateStructuredData(DEFAULT_SCHEMA);
    if (pageSEO.structuredData) {
      updateStructuredData(pageSEO.structuredData);
    }
    
    // Add performance metrics for Core Web Vitals
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Add performance monitoring script
        if (!document.querySelector('#perf-metrics')) {
          const perfScript = document.createElement('script');
          perfScript.id = 'perf-metrics';
          perfScript.innerHTML = `
            // Performance monitoring for SEO
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js').catch(() => {});
            }
            
            // Track Core Web Vitals
            if (window.PerformanceObserver) {
              new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  // Send CWV data to analytics
                  if (typeof gtag !== 'undefined') {
                    gtag('event', entry.name, {
                      value: Math.round(entry.name === 'LCP' ? entry.startTime : entry.duration),
                      event_label: entry.element?.tagName,
                      non_interaction: true
                    });
                  }
                }
              }).observe({entryTypes: ['largest-contentful-paint']});
            }
          `;
          document.head.appendChild(perfScript);
        }
      });
    }
    
    // Cleanup function
    return () => {
      // Clean up performance script if needed
      const perfScript = document.getElementById('perf-metrics');
      if (perfScript) {
        perfScript.remove();
      }
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