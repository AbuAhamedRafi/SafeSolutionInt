import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 (GA4) setup
    const setupGA4 = () => {
      // Replace 'G-XXXXXXXXXX' with your actual GA4 measurement ID
      const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
      
      // Load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA4_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'dimension1': 'business_type',
          'dimension2': 'service_category'
        }
      });
    };

    // Microsoft Clarity setup
    const setupClarity = () => {
      // Replace 'XXXXXXXXXX' with your actual Clarity project ID
      const CLARITY_PROJECT_ID = 'XXXXXXXXXX';
      
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
    };

    // Facebook Pixel setup
    const setupFacebookPixel = () => {
      // Replace 'XXXXXXXXXXXXXXX' with your actual Facebook Pixel ID
      const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX';
      
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', FB_PIXEL_ID);
      window.fbq('track', 'PageView');
    };

    // LinkedIn Insight Tag setup
    const setupLinkedInInsight = () => {
      // Replace 'XXXXXX' with your actual LinkedIn Partner ID
      const LINKEDIN_PARTNER_ID = 'XXXXXX';
      
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);
      
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      document.head.appendChild(script);
    };

    // Initialize all tracking (uncomment when you have actual IDs)
    // setupGA4();
    // setupClarity();
    // setupFacebookPixel();
    // setupLinkedInInsight();

    // Custom event tracking for business actions
    const trackBusinessEvent = (eventName, parameters = {}) => {
      // GA4 custom event
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'business_action',
          event_label: parameters.label || '',
          value: parameters.value || 0,
          custom_parameters: parameters
        });
      }

      // Facebook Pixel custom event
      if (window.fbq) {
        window.fbq('track', eventName, parameters);
      }

      // Console log for development
      console.log('Business Event Tracked:', eventName, parameters);
    };

    // Track page views on route change
    const trackPageView = () => {
      const pageTitle = document.title;
      const pagePath = location.pathname + location.search;
      
      if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_title: pageTitle,
          page_location: window.location.href,
          page_path: pagePath
        });
      }

      if (window.fbq) {
        window.fbq('track', 'PageView');
      }

      // Track business-specific page views
      const businessPageMapping = {
        '/': 'homepage',
        '/about': 'about_page',
        '/service': 'services_page',
        '/projects': 'projects_page',
        '/blog': 'blog_page',
        '/contact': 'contact_page'
      };

      const pageType = businessPageMapping[location.pathname] || 'other_page';
      trackBusinessEvent('page_view', {
        page_type: pageType,
        page_path: pagePath,
        page_title: pageTitle
      });
    };

    // Set up global tracking functions
    window.trackBusinessEvent = trackBusinessEvent;
    
    // Track initial page view
    trackPageView();

    // Set up scroll tracking for engagement
    let scrollDepths = [25, 50, 75, 100];
    let scrollTracked = [];

    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !scrollTracked.includes(depth)) {
          scrollTracked.push(depth);
          trackBusinessEvent('scroll_depth', {
            depth: depth,
            page_path: location.pathname
          });
        }
      });
    };

    window.addEventListener('scroll', trackScrollDepth);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };

  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;
