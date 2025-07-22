import { useEffect } from 'react';

const SEO = ({
  title = "Safe Solution International - Complete Business Solutions",
  description = "Safe Solution International provides comprehensive business solutions including startup consultancy, IT infrastructure, government tender support, transportation services, and project management. Your trusted partner for business growth in Bangladesh.",
  keywords = "business solutions, startup consultancy, IT infrastructure, government tenders, transportation services, project management, business setup, Safe Solution International, Bangladesh business, construction services, logistics",
  image = "/images/logo.png",
  url = "https://www.safesolutioninternational.org",
  type = "website",
  author = "Safe Solution International",
  locale = "en_US",
  siteName = "Safe Solution International",
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let metaTag = document.querySelector(selector);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (isProperty) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', property);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      
      if (linkTag) {
        linkTag.setAttribute('href', href);
      } else {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        linkTag.setAttribute('href', href);
        document.head.appendChild(linkTag);
      }
    };

    const fullUrl = url.startsWith("http") ? url : `https://www.safesolutioninternational.org${url}`;
    const fullImageUrl = image.startsWith("http") 
      ? image 
      : `https://www.safesolutioninternational.org${image}`;

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');

    // Update Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);
    updateMetaTag('twitter:url', fullUrl);

    // Update canonical link
    updateLinkTag('canonical', fullUrl);

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Safe Solution International",
      "url": "https://www.safesolutioninternational.org",
      "logo": "https://www.safesolutioninternational.org/images/logo.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BD",
        "addressRegion": "Dhaka"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://www.safesolutioninternational.org/contact"
      },
      "sameAs": [
        "https://www.facebook.com/safesolutioninternational",
        "https://www.linkedin.com/company/safe-solution-international"
      ],
      "foundingDate": "2021",
      "numberOfEmployees": "10-50",
      "serviceArea": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "services": [
        "Business Consultancy",
        "IT Infrastructure",
        "Government Tender Support",
        "Transportation Services",
        "Project Management"
      ]
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]#seo-structured-data');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.id = 'seo-structured-data';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

  }, [title, description, keywords, image, url, type, author, locale, siteName]);

  return null; // This component doesn't render anything visible
};

export default SEO;
