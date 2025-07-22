import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

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
  const fullUrl = url.startsWith("http") ? url : `https://www.safesolutioninternational.org${url}`;
  const fullImageUrl = image.startsWith("http") 
    ? image 
    : `https://www.safesolutioninternational.org${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:creator" content="@SafeSolutionInt" />
      <meta name="twitter:site" content="@SafeSolutionInt" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#dc2626" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      <meta name="msapplication-TileImage" content={fullImageUrl} />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Helmet>
  );
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
