// Image utility functions for handling image loading and fallbacks

/**
 * Handles image loading errors by setting fallback image
 * @param {Event} e - The error event
 * @param {string} fallbackImage - The fallback image URL
 */
export const handleImageError = (e, fallbackImage) => {
  if (fallbackImage && e.target.src !== fallbackImage) {
    e.target.src = fallbackImage;
  }
};

/**
 * Enhanced services data with improved image sources and fallbacks
 */
export const enhancedServicesData = [
  {
    id: 1,
    title: "Startup Consultancy",
    desc: "From business planning to legal entity registration, we help lay a solid foundation for your venture.",
    image: "https://img.freepik.com/free-photo/business-people-meeting-conference-room_23-2148898874.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/ef4444/ffffff?text=Startup+Consultancy",
  },
  {
    id: 2,
    title: "IT Infrastructure & Support",
    desc: "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support.",
    image: "https://img.freepik.com/free-photo/server-room-with-modern-equipment-data-center_1268-21047.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/1e40af/ffffff?text=IT+Infrastructure",
  },
  {
    id: 3,
    title: "Transportation & Logistics",
    desc: "We manage all your startup's logistical needs including warehousing, last-mile delivery, fleet solutions, and escort services.",
    image: "https://img.freepik.com/free-photo/logistics-transportation-concept_23-2149204748.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/059669/ffffff?text=Transportation",
  },
  {
    id: 4,
    title: "Government Tender Assistance",
    desc: "We guide you through documentation, bidding, and compliance to win government projects with confidence.",
    image: "https://img.freepik.com/free-photo/business-documents-office-desk_23-2148094277.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/7c3aed/ffffff?text=Government+Tender",
  },
  {
    id: 5,
    title: "HR & Recruitment Services",
    desc: "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups.",
    image: "https://img.freepik.com/free-photo/hr-team-interviewing-job-applicant_23-2149329388.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/dc2626/ffffff?text=HR+Services",
  },
  {
    id: 6,
    title: "Branding & Identity",
    desc: "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission.",
    image: "https://img.freepik.com/free-photo/creative-designer-working-branding-project_23-2149329582.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/ea580c/ffffff?text=Branding+Design",
  },
  {
    id: 7,
    title: "Event Management",
    desc: "Professional event planning and management services to make your corporate events memorable and successful.",
    image: "https://img.freepik.com/free-photo/conference-room-prepared-seminar_23-2149329405.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Event+Management",
  },
  {
    id: 8,
    title: "Air Ticketing & Travel Services",
    desc: "Complete travel solutions including air ticketing, hotel bookings, and travel planning for business trips.",
    image: "https://img.freepik.com/free-photo/airplane-flying-over-city_23-2149204826.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Travel+Services",
  },
  {
    id: 9,
    title: "Construction & Real Estate",
    desc: "Comprehensive construction and real estate services including project management and property development.",
    image: "https://img.freepik.com/free-photo/construction-worker-wearing-hard-hat_23-2149329521.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/f59e0b/ffffff?text=Construction",
  },
  {
    id: 10,
    title: "Safety & Security Solutions",
    desc: "Advanced safety and security services including fire safety systems and detection solutions.",
    image: "https://img.freepik.com/free-photo/security-camera-surveillance-system_23-2149204853.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/ef4444/ffffff?text=Security+Solutions",
  },
  {
    id: 11,
    title: "Renewable Energy & Waste Management",
    desc: "Sustainable energy solutions including solar installations and waste management systems.",
    image: "https://img.freepik.com/free-photo/solar-panels-renewable-energy_23-2149204832.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/10b981/ffffff?text=Renewable+Energy",
  },
  {
    id: 12,
    title: "Transportation & Escort Services",
    desc: "Enhanced transportation services including logistics and professional escort services.",
    image: "https://img.freepik.com/free-photo/delivery-truck-transportation_23-2149204834.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/6366f1/ffffff?text=Transportation",
  },
  {
    id: 13,
    title: "Facilities & Maintenance Services",
    desc: "Complete facility management and maintenance solutions for optimal operational efficiency.",
    image: "https://img.freepik.com/free-photo/maintenance-worker-office_23-2149329484.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/84cc16/ffffff?text=Facilities+Maintenance",
  },
];

/**
 * Enhanced projects data with improved image sources and fallbacks
 */
export const enhancedProjectsData = [
  {
    id: 1,
    title: "Enterprise Work Management System",
    description: "Complete digital transformation solution for enterprise project management with real-time collaboration tools and advanced analytics.",
    image: "https://img.freepik.com/free-photo/business-team-working-project-management_23-2149329572.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/1e40af/ffffff?text=Enterprise+Management",
    category: "Software Development",
    client: "Tech Solutions Inc.",
    duration: "6 months",
    year: "2024",
    status: "Completed",
    tags: ["Enterprise", "Digital", "Management"]
  },
  {
    id: 2,
    title: "Modern Office Complex",
    description: "Comprehensive renovation of a 50,000 sq ft office building with sustainable design and smart building technologies.",
    image: "https://img.freepik.com/free-photo/modern-office-building-architecture_23-2149329543.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/059669/ffffff?text=Office+Complex",
    category: "Construction",
    client: "Corporate Holdings",
    duration: "12 months",
    year: "2024",
    status: "Completed",
    tags: ["Commercial", "Renovation", "Sustainable"]
  },
  {
    id: 3,
    title: "Smart Infrastructure Solutions",
    description: "Implementation of IoT-based infrastructure monitoring system for municipal water and waste management.",
    image: "https://img.freepik.com/free-photo/smart-city-infrastructure-technology_23-2149204847.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/7c3aed/ffffff?text=Smart+Infrastructure",
    category: "Infrastructure",
    client: "City Municipality",
    duration: "8 months",
    year: "2023",
    status: "Completed",
    tags: ["IoT", "Smart City", "Infrastructure"]
  },
  {
    id: 4,
    title: "Manufacturing Automation",
    description: "Complete automation solution for manufacturing processes with AI-powered quality control and predictive maintenance.",
    image: "https://img.freepik.com/free-photo/industrial-automation-factory_23-2149329551.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/dc2626/ffffff?text=Manufacturing+Automation",
    category: "Automation",
    client: "Industrial Corp",
    duration: "10 months",
    year: "2023",
    status: "Completed",
    tags: ["AI", "Automation", "Manufacturing"]
  },
  {
    id: 5,
    title: "E-commerce Platform Development",
    description: "Custom e-commerce solution with advanced analytics, multi-vendor support, and mobile-first design approach.",
    image: "https://img.freepik.com/free-photo/online-shopping-ecommerce-website_23-2149329567.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/ea580c/ffffff?text=E-commerce+Platform",
    category: "E-commerce",
    client: "Retail Group",
    duration: "4 months",
    year: "2024",
    status: "Completed",
    tags: ["E-commerce", "Mobile", "Analytics"]
  },
  {
    id: 6,
    title: "Corporate Branding Campaign",
    description: "Complete brand identity redesign and digital marketing campaign resulting in 300% increase in brand recognition.",
    image: "https://img.freepik.com/free-photo/branding-marketing-design-concept_23-2149329584.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Corporate+Branding",
    category: "Branding",
    client: "StartUp Ventures",
    duration: "3 months",
    year: "2024",
    status: "Completed",
    tags: ["Branding", "Marketing", "Digital"]
  }
];
