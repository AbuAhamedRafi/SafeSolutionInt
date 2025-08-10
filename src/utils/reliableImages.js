/* Enhanced Image Utilities with Reliable Fallbacks */

// Generate reliable placeholder image URLs using a service that's more stable than Unsplash
export const createPlaceholderImage = (width = 800, height = 400, text = 'Safe Solution', bgColor = 'ef4444', textColor = 'ffffff') => {
  return `https://dummyimage.com/${width}x${height}/${bgColor}/${textColor}.png&text=${encodeURIComponent(text)}`;
};

// Reliable image sources using multiple CDNs
export const getReliableImageUrl = (category, index = 0) => {
  const imageCategories = {
    business: [
      'https://picsum.photos/800/400?random=1',
      'https://dummyimage.com/800x400/1e40af/ffffff.png&text=Business+Solutions',
      createPlaceholderImage(800, 400, 'Business Solutions', '1e40af')
    ],
    technology: [
      'https://picsum.photos/800/400?random=2',
      'https://dummyimage.com/800x400/059669/ffffff.png&text=IT+Solutions',
      createPlaceholderImage(800, 400, 'IT Solutions', '059669')
    ],
    construction: [
      'https://picsum.photos/800/400?random=3',
      'https://dummyimage.com/800x400/dc2626/ffffff.png&text=Construction',
      createPlaceholderImage(800, 400, 'Construction', 'dc2626')
    ],
    logistics: [
      'https://picsum.photos/800/400?random=4',
      'https://dummyimage.com/800x400/7c3aed/ffffff.png&text=Logistics',
      createPlaceholderImage(800, 400, 'Logistics', '7c3aed')
    ],
    consulting: [
      'https://picsum.photos/800/400?random=5',
      'https://dummyimage.com/800x400/ea580c/ffffff.png&text=Consulting',
      createPlaceholderImage(800, 400, 'Consulting', 'ea580c')
    ]
  };

  const categoryImages = imageCategories[category] || imageCategories.business;
  return categoryImages[index % categoryImages.length];
};

// Enhanced services with reliable image sources
export const reliableServicesData = [
  {
    id: 1,
    title: "Startup Consultancy",
    desc: "From business planning to legal entity registration, we help lay a solid foundation for your venture.",
    image: getReliableImageUrl('business', 0),
    fallbackImage: createPlaceholderImage(800, 400, 'Startup Consultancy', 'ef4444'),
  },
  {
    id: 2,
    title: "IT Infrastructure & Support",
    desc: "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support.",
    image: getReliableImageUrl('technology', 0),
    fallbackImage: createPlaceholderImage(800, 400, 'IT Infrastructure', '1e40af'),
  },
  {
    id: 3,
    title: "Transportation & Logistics",
    desc: "We manage all your startup's logistical needs including warehousing, last-mile delivery, fleet solutions, and escort services.",
    image: getReliableImageUrl('logistics', 0),
    fallbackImage: createPlaceholderImage(800, 400, 'Transportation', '059669'),
  },
  {
    id: 4,
    title: "Government Tender Assistance",
    desc: "We guide you through documentation, bidding, and compliance to win government projects with confidence.",
    image: getReliableImageUrl('consulting', 0),
    fallbackImage: createPlaceholderImage(800, 400, 'Government Tender', '7c3aed'),
  },
  {
    id: 5,
    title: "HR & Recruitment Services",
    desc: "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups.",
    image: getReliableImageUrl('business', 1),
    fallbackImage: createPlaceholderImage(800, 400, 'HR Services', 'dc2626'),
  },
  {
    id: 6,
    title: "Branding & Identity",
    desc: "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission.",
    image: getReliableImageUrl('consulting', 1),
    fallbackImage: createPlaceholderImage(800, 400, 'Branding Design', 'ea580c'),
  },
  {
    id: 7,
    title: "Event Management",
    desc: "Professional event planning and management services to make your corporate events memorable and successful.",
    image: getReliableImageUrl('business', 2),
    fallbackImage: createPlaceholderImage(800, 400, 'Event Management', '8b5cf6'),
  },
  {
    id: 8,
    title: "Air Ticketing & Travel Services",
    desc: "Complete travel solutions including air ticketing, hotel bookings, and travel planning for business trips.",
    image: getReliableImageUrl('logistics', 1),
    fallbackImage: createPlaceholderImage(800, 400, 'Travel Services', '0ea5e9'),
  },
  {
    id: 9,
    title: "Construction & Real Estate",
    desc: "Comprehensive construction and real estate services including project management and property development.",
    image: getReliableImageUrl('construction', 0),
    fallbackImage: createPlaceholderImage(800, 400, 'Construction', 'f59e0b'),
  },
  {
    id: 10,
    title: "Safety & Security Solutions",
    desc: "Advanced safety and security services including fire safety systems and detection solutions.",
    image: getReliableImageUrl('technology', 1),
    fallbackImage: createPlaceholderImage(800, 400, 'Security Solutions', 'ef4444'),
  },
  {
    id: 11,
    title: "Renewable Energy & Waste Management",
    desc: "Sustainable energy solutions including solar installations and waste management systems.",
    image: getReliableImageUrl('technology', 2),
    fallbackImage: createPlaceholderImage(800, 400, 'Renewable Energy', '10b981'),
  },
  {
    id: 12,
    title: "Transportation & Escort Services",
    desc: "Enhanced transportation services including logistics and professional escort services.",
    image: getReliableImageUrl('logistics', 2),
    fallbackImage: createPlaceholderImage(800, 400, 'Transportation', '6366f1'),
  },
  {
    id: 13,
    title: "Facilities & Maintenance Services",
    desc: "Complete facility management and maintenance solutions for optimal operational efficiency.",
    image: getReliableImageUrl('construction', 1),
    fallbackImage: createPlaceholderImage(800, 400, 'Facilities Maintenance', '84cc16'),
  },
];

export default {
  createPlaceholderImage,
  getReliableImageUrl,
  reliableServicesData
};
