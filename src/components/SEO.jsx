import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SEO = ({
  title = "Safe Solution International - Complete Business Solutions in Bangladesh",
  description = "Safe Solution International is Bangladesh's leading business consultancy firm providing comprehensive solutions including startup consultancy, IT infrastructure, government tender support, transportation services, construction, and project management. Your trusted partner for business growth and success.",
  keywords = "Safe Solution International, business solutions Bangladesh, startup consultancy Dhaka, IT infrastructure Bangladesh, government tender support, transportation services Bangladesh, construction services Dhaka, business consultancy firm Bangladesh, project management Bangladesh, logistics services Dhaka, business setup Bangladesh, commercial solutions",
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
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'BD-13');
    updateMetaTag('geo.placename', 'Dhaka, Bangladesh');
    updateMetaTag('geo.position', '23.8103;90.4125');
    updateMetaTag('ICBM', '23.8103, 90.4125');
    
    // Domain verification and canonical
    updateMetaTag('og:site_name', 'Safe Solution International', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:locale:alternate', 'bn_BD', true);

    //For Facebook and Linked In using Open Graph protocol
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);

    updateLinkTag('canonical', fullUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Safe Solution International",
      "alternateName": ["Safe Solution International Bangladesh", "SSI Bangladesh"],
      "url": "https://www.safesolutioninternational.org",
      "logo": "https://www.safesolutioninternational.org/images/logo.png",
      "description": description,
      "foundingDate": "2021",
      "founder": {
        "@type": "Person",
        "name": "Safe Solution International Team"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business District",
        "addressLocality": "Dhaka",
        "addressRegion": "Dhaka Division",
        "postalCode": "1000",
        "addressCountry": "BD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.8103",
        "longitude": "90.4125"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://www.safesolutioninternational.org/contact",
        "availableLanguage": ["English", "Bengali"]
      }],
      "sameAs": [
        "https://www.facebook.com/safesolutioninternational",
        "https://www.linkedin.com/company/safe-solution-international"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "25"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "serviceType": [
        "Business Consultancy",
        "Startup Services",
        "IT Infrastructure",
        "Government Tender Support",
        "Transportation & Logistics",
        "Construction Services",
        "Project Management",
        "Event Management",
        "HR & Recruitment",
        "Branding & Identity",
        "Air Ticketing & Travel",
        "Safety & Security Solutions",
        "Renewable Energy Solutions",
        "Facilities & Maintenance"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Startup Consultancy",
              "description": "Business planning, legal registration, and strategic guidance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Infrastructure & Support",
              "description": "Networking, cybersecurity, and cloud solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Government Tender Assistance",
              "description": "Documentation, bidding, and compliance support"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50",
        "bestRating": "5"
      },
      "keywords": keywords
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
