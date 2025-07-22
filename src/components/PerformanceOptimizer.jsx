import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/images/logo.png', as: 'image' },
      { href: '/images/BG.jpg', as: 'image' },
      { href: '/images/hero-image.png', as: 'image' },
    ];

    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Add DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.emailjs.com',
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Add resource hints for better performance
    const resourceHints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
    ];

    resourceHints.forEach(({ rel, href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin !== undefined) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    // Optimize images loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    // Add critical CSS inline for above-the-fold content
    const criticalCSS = `
      .hero-section { will-change: transform; }
      .navbar { will-change: transform; }
      .loading-skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      // Remove preload links when component unmounts
      preloadLinks.forEach(({ href }) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) {
          existingLink.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
