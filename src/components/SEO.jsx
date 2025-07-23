import { useEffect } from 'react';
import PropTypes from 'prop-types';

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
    document.title = title;

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

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);
    updateMetaTag('twitter:url', fullUrl);

    updateLinkTag('canonical', fullUrl);

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

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string,
  locale: PropTypes.string,
  siteName: PropTypes.string,
};

export default SEO;
