// SEO utilities and helpers

// Get meta description based on page content
export const getMetaDescription = (page, customDescription) => {
  if (customDescription) return customDescription;
  
  const descriptions = {
    home: "Safe Solution International provides comprehensive business solutions including startup consultancy, IT infrastructure, government tender support, transportation services, and project management. Your trusted partner for business growth in Bangladesh with 100+ successful projects.",
    about: "Learn about Safe Solution International, a leading business consultancy firm in Bangladesh. We provide comprehensive solutions including startup support, IT infrastructure, government tender assistance, and project management services with 3+ years of experience.",
    services: "Explore our comprehensive business services including startup consultancy, IT infrastructure, government tender support, transportation & logistics, project management, and digital marketing solutions in Bangladesh.",
    projects: "Explore our successful project portfolio including enterprise work management systems, smart city infrastructure, e-commerce platforms, and construction projects. See our proven track record with 100+ completed projects.",
    blog: "Stay updated with the latest insights on business solutions, digital transformation, IT infrastructure, startup tips, and industry trends from Safe Solution International experts.",
    contact: "Contact Safe Solution International for your business needs. Get professional consultancy, IT solutions, and project management services. Reach out to us for startup support and government tender assistance in Bangladesh."
  };
  
  return descriptions[page] || descriptions.home;
};

// Get keywords based on page
export const getKeywords = (page, customKeywords) => {
  if (customKeywords) return customKeywords;
  
  const keywords = {
    home: "business solutions Bangladesh, startup consultancy, IT infrastructure, government tenders, transportation services, project management, business setup Bangladesh, Safe Solution International, construction services, logistics Bangladesh",
    about: "about Safe Solution International, business consultancy Bangladesh, company profile, startup support Bangladesh, IT services company, project management firm, government tender support",
    services: "business services Bangladesh, startup consultancy, IT infrastructure services, government tender support, transportation logistics, project management, digital marketing, event management, Safe Solution International services",
    projects: "Safe Solution International projects, project portfolio Bangladesh, enterprise management systems, smart city infrastructure, e-commerce development, construction projects, IT solutions case studies",
    blog: "business blog Bangladesh, digital transformation insights, startup tips, IT infrastructure guides, business solutions articles, industry trends Bangladesh, Safe Solution International blog",
    contact: "contact Safe Solution International, business consultancy contact, IT solutions inquiry, project management contact, startup support Bangladesh, government tender assistance contact"
  };
  
  return keywords[page] || keywords.home;
};

// Generate breadcrumb structured data
export const generateBreadcrumbs = (pathname) => {
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.safesolutioninternational.org/' }
  ];
  
  const pathMap = {
    'about': 'About Us',
    'service': 'Services',
    'projects': 'Projects', 
    'blog': 'Blog',
    'contact': 'Contact'
  };
  
  pathSegments.forEach((segment, index) => {
    const name = pathMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const url = `https://www.safesolutioninternational.org/${pathSegments.slice(0, index + 1).join('/')}`;
    breadcrumbs.push({ name, url });
  });
  
  return breadcrumbs;
};

// Generate FAQ structured data
export const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Safe Solution International provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Safe Solution International provides comprehensive business solutions including startup consultancy, IT infrastructure setup, government tender support, transportation & logistics, project management, digital marketing, and event management services."
        }
      },
      {
        "@type": "Question", 
        "name": "How can Safe Solution International help my startup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide end-to-end startup support including business registration, licensing, compliance management, IT infrastructure setup, marketing strategies, and ongoing consultancy to help your startup succeed in the competitive market."
        }
      },
      {
        "@type": "Question",
        "name": "Does Safe Solution International help with government tenders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive government tender support including tender identification, documentation preparation, compliance checking, submission assistance, and follow-up services to help businesses secure government contracts."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Safe Solution International serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily serve businesses throughout Bangladesh, with our main operations based in Dhaka. We provide both on-site and remote services depending on client requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How experienced is Safe Solution International?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Safe Solution International has 3+ years of experience in the industry, with 100+ successful projects completed and 200+ satisfied clients. Our team consists of experienced professionals in various business domains."
        }
      }
    ]
  };
};

// Generate local business structured data
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Safe Solution International",
    "image": "https://www.safesolutioninternational.org/images/logo.png",
    "url": "https://www.safesolutioninternational.org",
    "telephone": "+880-XXX-XXXXXXX", // Replace with actual phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "XXXX Street", // Replace with actual address
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "postalCode": "XXXX", // Replace with actual postal code
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.8103,
      "longitude": 90.4125
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  };
};

// Generate website navigation structured data
export const generateWebsiteNavigationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      {
        "@type": "WebPage",
        "name": "Home",
        "url": "https://www.safesolutioninternational.org/"
      },
      {
        "@type": "WebPage", 
        "name": "About Us",
        "url": "https://www.safesolutioninternational.org/about"
      },
      {
        "@type": "WebPage",
        "name": "Services", 
        "url": "https://www.safesolutioninternational.org/service"
      },
      {
        "@type": "WebPage",
        "name": "Projects",
        "url": "https://www.safesolutioninternational.org/projects" 
      },
      {
        "@type": "WebPage",
        "name": "Blog",
        "url": "https://www.safesolutioninternational.org/blog"
      },
      {
        "@type": "WebPage",
        "name": "Contact",
        "url": "https://www.safesolutioninternational.org/contact"
      }
    ]
  };
};

// URL optimization
export const optimizeUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Image optimization for SEO
export const getOptimizedImageUrl = (imagePath, width = 1200, height = 630) => {
  // This would typically integrate with an image optimization service
  // For now, return the original path
  return imagePath;
};

// Social media sharing URLs
export const getSocialShareUrls = (url, title, description) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };
};
