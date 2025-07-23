import { useEffect } from 'react';
import PropTypes from 'prop-types';

const StructuredData = ({ type, data }) => {
  useEffect(() => {
    const generateSchema = () => {
      switch (type) {
        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Safe Solution International",
            "url": "https://www.safesolutioninternational.org",
            "logo": "https://www.safesolutioninternational.org/images/logo.png",
            "description": "Safe Solution International provides comprehensive business solutions including startup consultancy, IT infrastructure, government tender support, transportation services, and project management in Bangladesh.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BD",
              "addressRegion": "Dhaka",
              "addressLocality": "Dhaka"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://www.safesolutioninternational.org/contact",
              "availableLanguage": ["English", "Bengali"]
            },
            "sameAs": [
              "https://www.facebook.com/safesolutioninternational",
              "https://www.linkedin.com/company/safe-solution-international"
            ],
            "foundingDate": "2021",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 10,
              "maxValue": 50
            },
            "areaServed": {
              "@type": "Country",
              "name": "Bangladesh"
            },
            "services": [
              "Business Consultancy",
              "IT Infrastructure",
              "Government Tender Support",
              "Transportation Services",
              "Project Management",
              "Digital Marketing",
              "Event Management"
            ]
          };

        case 'website':
          return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Safe Solution International",
            "url": "https://www.safesolutioninternational.org",
            "description": "Complete business solutions provider in Bangladesh",
            "publisher": {
              "@type": "Organization",
              "name": "Safe Solution International"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.safesolutioninternational.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          };

        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data?.name || "Business Consultancy Services",
            "description": data?.description || "Professional business consultancy and solution services",
            "provider": {
              "@type": "Organization",
              "name": "Safe Solution International",
              "url": "https://www.safesolutioninternational.org"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Bangladesh"
            },
            "serviceType": data?.serviceType || "Business Consultancy",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BDT"
            }
          };

        case 'article':
          return {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data?.title || "Business Solutions Blog",
            "description": data?.description || "Latest insights on business solutions and digital transformation",
            "author": {
              "@type": "Organization",
              "name": "Safe Solution International"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Safe Solution International",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.safesolutioninternational.org/images/logo.png"
              }
            },
            "datePublished": data?.datePublished || new Date().toISOString(),
            "dateModified": data?.dateModified || new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": data?.url || "https://www.safesolutioninternational.org/blog"
            }
          };

        case 'breadcrumb':
          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data?.items?.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": item.url
            })) || []
          };

        default:
          return null;
      }
    };

    const schema = generateSchema();

    if (schema) {
      const scriptId = `structured-data-${type}`;
      
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const scriptId = `structured-data-${type}`;
      const script = document.getElementById(scriptId);
      if (script) {
        script.remove();
      }
    };
  }, [type, data]);

  return null;
};

StructuredData.propTypes = {
  type: PropTypes.oneOf(['organization', 'website', 'service', 'article', 'breadcrumb']).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    serviceType: PropTypes.string,
    title: PropTypes.string,
    datePublished: PropTypes.string,
    dateModified: PropTypes.string,
    url: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    }))
  })
};

export default StructuredData;
