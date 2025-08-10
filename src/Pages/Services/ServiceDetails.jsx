import { useParams, Link } from "react-router-dom";
import {
  FaRocket,
  FaDesktop,
  FaTruck,
  FaUniversity,
  FaUsers,
  FaPalette,
  FaCalendarAlt,
  FaPlane,
  FaBuilding,
  FaShieldAlt,
  FaSeedling,
  FaCar,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaPhone,
  FaEnvelope,
  FaLightbulb,
  FaHandshake,
  FaClock,
  FaThumbsUp,
  FaChartLine
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import SEO from "../../components/SEO";

const servicesData = [
  {
    id: 1,
    title: "Startup Consultancy",
    description: "From business planning to legal entity registration, we help lay a solid foundation for your venture. Our comprehensive startup consultancy services include market research, business model development, financial planning, legal compliance, and strategic guidance to help entrepreneurs turn their ideas into successful businesses.",
    image: "https://img.freepik.com/free-photo/business-people-meeting-conference-room_23-2148898874.jpg?w=800",
    fallbackImage: "https://via.placeholder.com/800x400/ef4444/ffffff?text=Startup+Consultancy",
    icon: <FaRocket />,
    category: "Business Development",
    features: [
      "Business Plan Development",
      "Market Research & Analysis", 
      "Legal Entity Registration",
      "Financial Planning & Projections",
      "Strategic Consulting",
      "Investor Pitch Preparation"
    ],
    benefits: [
      "Reduced startup risks",
      "Professional business foundation",
      "Faster market entry",
      "Improved investor confidence"
    ],
    process: [
      { step: "Initial Consultation", description: "Understanding your vision and goals" },
      { step: "Market Analysis", description: "Comprehensive market research and feasibility study" },
      { step: "Business Planning", description: "Detailed business plan and financial projections" },
      { step: "Legal Setup", description: "Company registration and compliance setup" }
    ]
  },
  {
    id: 2,
    title: "IT Infrastructure & Support",
    description: "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support. Our expert team ensures your technology infrastructure is robust, secure, and scalable to support your business growth and operational efficiency.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=60",
    icon: <FaDesktop />,
    category: "Technology Solutions",
    features: [
      "Network Infrastructure Setup",
      "Cybersecurity Implementation",
      "Cloud Migration Services",
      "24/7 Technical Support",
      "System Monitoring & Maintenance",
      "Data Backup & Recovery"
    ],
    benefits: [
      "Enhanced security",
      "Improved productivity",
      "Scalable infrastructure",
      "Reduced downtime"
    ],
    process: [
      { step: "Infrastructure Assessment", description: "Evaluating current IT setup and requirements" },
      { step: "Solution Design", description: "Custom IT architecture planning" },
      { step: "Implementation", description: "Professional setup and configuration" },
      { step: "Ongoing Support", description: "24/7 monitoring and maintenance" }
    ]
  },
  {
    id: 3,
    title: "Transportation & Logistics",
    description: "We manage all your startup's logistical needs including warehousing, last-mile delivery, fleet solutions, and escort services. Our comprehensive logistics services ensure efficient supply chain management, cost-effective transportation, reliable delivery systems, and secure transport solutions.",
    image: "https://images.unsplash.com/photo-1585128792020-8f42b17a7d62?auto=format&fit=crop&w=800&q=60",
    icon: <FaTruck />,
    category: "Logistics Management",
    features: [
      "Warehousing Solutions",
      "Last-Mile Delivery",
      "Fleet Management",
      "Supply Chain Optimization",
      "Inventory Management",
      "Real-time Tracking",
      "Professional Escort Services"
    ],
    benefits: [
      "Cost-effective delivery",
      "Improved customer satisfaction",
      "Streamlined operations",
      "Enhanced visibility"
    ],
    process: [
      { step: "Logistics Analysis", description: "Assessing your supply chain needs" },
      { step: "Route Optimization", description: "Designing efficient delivery routes" },
      { step: "System Integration", description: "Implementing tracking and management systems" },
      { step: "Performance Monitoring", description: "Continuous optimization and reporting" }
    ]
  },
  {
    id: 4,
    title: "Government Tender Assistance",
    description: "We guide you through documentation, bidding, and compliance to win government projects with confidence. Our experienced team helps navigate complex tender processes, ensuring all requirements are met and maximizing your chances of success.",
    image: "https://images.unsplash.com/photo-1627471428132-76f7f96f4c6e?auto=format&fit=crop&w=800&q=60",
    icon: <FaUniversity />,
    category: "Government Relations",
    features: [
      "Tender Documentation",
      "Compliance Management",
      "Bid Preparation",
      "Legal Documentation",
      "Project Proposal Writing",
      "Follow-up Support"
    ],
    benefits: [
      "Higher success rates",
      "Compliant submissions",
      "Professional presentation",
      "Ongoing support"
    ],
    process: [
      { step: "Tender Identification", description: "Finding relevant government opportunities" },
      { step: "Document Preparation", description: "Comprehensive bid documentation" },
      { step: "Compliance Check", description: "Ensuring all requirements are met" },
      { step: "Submission & Follow-up", description: "Professional submission and tracking" }
    ]
  },
  {
    id: 5,
    title: "HR & Recruitment Services",
    description: "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups. Our services include talent acquisition, employee onboarding, performance management, policy development, and HR compliance.",
    image: "https://images.unsplash.com/photo-1581090700227-4c4cce0631f0?auto=format&fit=crop&w=800&q=60",
    icon: <FaUsers />,
    category: "Human Resources",
    features: [
      "Talent Acquisition",
      "Employee Onboarding",
      "Performance Management",
      "Policy Development",
      "HR Compliance",
      "Training & Development"
    ],
    benefits: [
      "Quality talent acquisition",
      "Streamlined HR processes",
      "Legal compliance",
      "Employee satisfaction"
    ],
    process: [
      { step: "HR Assessment", description: "Evaluating current HR needs and gaps" },
      { step: "Recruitment Strategy", description: "Developing targeted hiring plans" },
      { step: "Onboarding Setup", description: "Creating efficient onboarding processes" },
      { step: "Ongoing Support", description: "Continuous HR management and optimization" }
    ]
  },
  {
    id: 6,
    title: "Branding & Identity",
    description: "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission. Our creative team develops comprehensive brand guidelines, visual identity systems, and marketing materials that resonate with your target audience.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
    icon: <FaPalette />,
    category: "Brand Development",
    features: [
      "Logo Design & Branding",
      "Brand Strategy Development",
      "Visual Identity Systems",
      "Marketing Materials",
      "Brand Guidelines",
      "Digital Asset Creation"
    ],
    benefits: [
      "Strong brand recognition",
      "Professional image",
      "Market differentiation",
      "Customer loyalty"
    ],
    process: [
      { step: "Brand Discovery", description: "Understanding your vision and values" },
      { step: "Design Development", description: "Creating visual identity concepts" },
      { step: "Brand Guidelines", description: "Comprehensive brand documentation" },
      { step: "Asset Creation", description: "Developing marketing materials and digital assets" }
    ]
  },
  {
    id: 7,
    title: "Event Management",
    description: "Professional event planning and management services to make your corporate events memorable and successful. We handle everything from concept development to execution, ensuring seamless and impactful events that align with your business objectives.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=60",
    icon: <FaCalendarAlt />,
    category: "Event Planning",
    features: [
      "Event Concept Development",
      "Venue Selection & Management",
      "Vendor Coordination",
      "Event Marketing",
      "On-site Management",
      "Post-event Analysis"
    ],
    benefits: [
      "Memorable experiences",
      "Professional execution",
      "Stress-free planning",
      "Measurable results"
    ],
    process: [
      { step: "Event Planning", description: "Concept development and objective setting" },
      { step: "Venue & Vendors", description: "Selection and coordination of all resources" },
      { step: "Event Execution", description: "Professional on-site management" },
      { step: "Post-Event Analysis", description: "Performance evaluation and reporting" }
    ]
  },
  {
    id: 8,
    title: "Air Ticketing & Travel Services",
    description: "Complete travel solutions including air ticketing, hotel bookings, and travel planning for business trips. Our travel management services ensure cost-effective, convenient, and hassle-free business travel arrangements for your team.",
    image: "https://images.unsplash.com/photo-1588776814546-ec7f4a08f1ba?auto=format&fit=crop&w=800&q=60",
    icon: <FaPlane />,
    category: "Travel Management",
    features: [
      "Flight Booking & Management",
      "Hotel Reservations",
      "Travel Itinerary Planning",
      "Corporate Travel Packages",
      "Travel Insurance",
      "24/7 Travel Support"
    ],
    benefits: [
      "Cost savings",
      "Time efficiency",
      "24/7 support",
      "Hassle-free travel"
    ],
    process: [
      { step: "Travel Planning", description: "Understanding travel requirements and preferences" },
      { step: "Booking Management", description: "Securing flights, hotels, and transportation" },
      { step: "Itinerary Creation", description: "Detailed travel plans and documentation" },
      { step: "Travel Support", description: "24/7 assistance during travel" }
    ]
  },
  {
    id: 9,
    title: "Construction & Real Estate",
    description: "Comprehensive construction and real estate services including project management, property development, and investment consultancy. We provide end-to-end solutions for residential, commercial, and industrial construction projects with a focus on quality, sustainability, and innovation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=60",
    icon: <FaBuilding />,
    category: "Construction & Real Estate",
    features: [
      "Construction Project Management",
      "Property Development",
      "Real Estate Investment Consulting",
      "Architecture & Design Services",
      "Quality Control & Inspection",
      "Regulatory Compliance & Permits"
    ],
    benefits: [
      "Quality construction",
      "Timely project delivery",
      "Cost-effective solutions",
      "Regulatory compliance"
    ],
    process: [
      { step: "Project Planning", description: "Comprehensive planning and design development" },
      { step: "Permit & Approval", description: "Regulatory compliance and permit acquisition" },
      { step: "Construction Management", description: "Professional project execution and quality control" },
      { step: "Handover & Support", description: "Final inspection and ongoing maintenance support" }
    ]
  },
  {
    id: 10,
    title: "Safety & Security Solutions",
    description: "Advanced safety and security services including fire safety systems, detection solutions, and emergency response planning. Our comprehensive security solutions protect your assets, personnel, and operations with state-of-the-art technology and expert consultation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    icon: <FaShieldAlt />,
    category: "Safety & Security",
    features: [
      "Fire Safety System Design & Installation",
      "Fire Detection & Alarm Systems",
      "Emergency Response Planning",
      "Security System Integration",
      "Safety Training & Compliance",
      "Risk Assessment & Mitigation"
    ],
    benefits: [
      "Enhanced safety",
      "Emergency preparedness",
      "Regulatory compliance",
      "Asset protection"
    ],
    process: [
      { step: "Safety Assessment", description: "Comprehensive risk analysis and safety evaluation" },
      { step: "System Design", description: "Custom safety and security system planning" },
      { step: "Installation & Testing", description: "Professional installation and system commissioning" },
      { step: "Training & Maintenance", description: "Staff training and ongoing system maintenance" }
    ]
  },
  {
    id: 11,
    title: "Renewable Energy & Waste Management",
    description: "Sustainable energy solutions including solar installations, waste management systems, and environmental consultancy services. We help businesses transition to clean energy and implement effective waste management strategies for a sustainable future.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=60",
    icon: <FaSeedling />,
    category: "Environmental Solutions",
    features: [
      "Solar Energy System Design & Installation",
      "Waste Management Solutions",
      "Environmental Impact Assessment",
      "Energy Efficiency Consulting",
      "Recycling Program Development",
      "Sustainability Reporting"
    ],
    benefits: [
      "Reduced energy costs",
      "Environmental compliance",
      "Sustainable operations",
      "Carbon footprint reduction"
    ],
    process: [
      { step: "Environmental Assessment", description: "Energy audit and waste analysis" },
      { step: "Solution Design", description: "Custom renewable energy and waste management planning" },
      { step: "Implementation", description: "Professional installation and system deployment" },
      { step: "Monitoring & Optimization", description: "Performance tracking and continuous improvement" }
    ]
  },
  {
    id: 12,
    title: "Transportation & Escort Services",
    description: "Enhanced transportation services including logistics, fleet management, and professional escort services for secure transport. We provide comprehensive transportation solutions with a focus on safety, reliability, and professional service delivery.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=60",
    icon: <FaCar />,
    category: "Transportation Services",
    features: [
      "Professional Fleet Management",
      "Secure Transport Services",
      "Executive Escort Services",
      "Route Planning & Optimization",
      "Vehicle Maintenance & Safety",
      "24/7 Transportation Support"
    ],
    benefits: [
      "Secure transportation",
      "Professional service",
      "Reliable scheduling",
      "Safety compliance"
    ],
    process: [
      { step: "Transport Planning", description: "Route analysis and security assessment" },
      { step: "Vehicle Assignment", description: "Professional driver and vehicle selection" },
      { step: "Service Execution", description: "Safe and professional transport delivery" },
      { step: "Performance Review", description: "Service evaluation and continuous improvement" }
    ]
  },
  {
    id: 13,
    title: "Facilities & Maintenance Services",
    description: "Complete facility management and maintenance solutions including building maintenance, cleaning services, and equipment management. We ensure your facilities operate efficiently with comprehensive maintenance programs and professional facility management.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60",
    icon: <FaTools />,
    category: "Facility Management",
    features: [
      "Building Maintenance & Repairs",
      "Professional Cleaning Services",
      "Equipment Management & Servicing",
      "Preventive Maintenance Programs",
      "Emergency Response Services",
      "Facility Optimization Consulting"
    ],
    benefits: [
      "Reduced operational costs",
      "Extended equipment life",
      "Improved facility efficiency",
      "Professional maintenance"
    ],
    process: [
      { step: "Facility Assessment", description: "Comprehensive facility and equipment evaluation" },
      { step: "Maintenance Planning", description: "Custom maintenance program development" },
      { step: "Service Implementation", description: "Professional maintenance and cleaning services" },
      { step: "Performance Monitoring", description: "Ongoing evaluation and service optimization" }
    ]
  }
];

const ServiceDetails = () => {
  const { id } = useParams();
  
  // Find the service based on the ID parameter
  const service = servicesData.find(s => s.id === parseInt(id)) || servicesData[0];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      <SEO 
        title={`${service.title} - Safe Solution International | Professional ${service.category} Services in Bangladesh`}
        description={`${service.description} Safe Solution International provides expert ${service.title.toLowerCase()} services in Bangladesh with professional quality and reliable results.`}
        keywords={`${service.title}, ${service.title} Bangladesh, ${service.category} services, Safe Solution International ${service.title.toLowerCase()}, professional ${service.title.toLowerCase()} Bangladesh, ${service.features?.join(', ')}`}
        url={`/service_details/${service.id}`}
        type="service"
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Enhanced Section Title */}
        <div className="pt-16 pb-8">
          <SectionTitle title="Service Details" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar - Service Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaStar className="text-red-500" />
                  All Services
                </h3>
                <nav className="space-y-2">
                  {servicesData.map((serviceItem) => (
                    <Link
                      key={serviceItem.id}
                      to={`/service_details/${serviceItem.id}`}
                      className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group ${
                        serviceItem.id === service.id
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                          : 'hover:bg-red-50 text-gray-700 hover:text-red-600 hover:shadow-md'
                      }`}
                    >
                      <div className={`text-lg ${serviceItem.id === service.id ? 'text-white' : 'text-red-500 group-hover:scale-110 transition-transform'}`}>
                        {serviceItem.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="font-semibold text-sm leading-tight">
                          {serviceItem.title}
                        </div>
                      </div>
                      {serviceItem.id === service.id && (
                        <FaArrowRight className="text-sm animate-pulse" />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Hero Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden group">
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      if (service.fallbackImage && e.target.src !== service.fallbackImage) {
                        e.target.src = service.fallbackImage;
                      }
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce">
                    <div className="text-white text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
                      {service.icon}
                      {service.category}
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{service.title}</h1>
                    <p className="text-lg opacity-90 max-w-2xl">
                      Professional solutions tailored to your business needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Description & Quick Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Description */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500" />
                    Service Overview
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Process Steps */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaChartLine className="text-blue-500" />
                      Our Process
                    </h3>
                    <div className="space-y-3">
                      {service.process?.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{step.step}</h4>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-6">
                  {/* Key Benefits */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaThumbsUp className="text-green-500" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600 group">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                          <span className="group-hover:text-gray-900 transition-colors">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Stats */}
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl text-white p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaAward />
                      Service Highlights
                    </h3>
                    <div className="space-y-4">
                      <div className="text-center p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <FaShieldAlt className="text-2xl mx-auto mb-2" />
                        <div className="text-sm font-semibold">100% Quality</div>
                        <div className="text-xs opacity-80">Guaranteed</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <FaClock className="text-2xl mx-auto mb-2" />
                        <div className="text-sm font-semibold">24/7 Support</div>
                        <div className="text-xs opacity-80">Available</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <FaHandshake className="text-2xl mx-auto mb-2" />
                        <div className="text-sm font-semibold">Expert Team</div>
                        <div className="text-xs opacity-80">Dedicated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Features */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaAward className="text-yellow-500" />
                  Complete Service Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-red-50 hover:border-red-200 border border-transparent transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 font-medium group-hover:text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100 p-8">
                <div className="text-center">
                  <FaQuoteLeft className="text-4xl text-blue-500 mx-auto mb-4 opacity-60" />
                  <blockquote className="text-xl text-gray-700 italic mb-6 max-w-2xl mx-auto">
                    &ldquo;Safe Solution International transformed our business with their professional {service.title.toLowerCase()}. 
                    Their expertise and dedication exceeded our expectations.&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <cite className="text-gray-600 font-medium">Satisfied Client</cite>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl text-white p-8 shadow-2xl">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Let&apos;s discuss how our {service.title.toLowerCase()} can help your business grow and succeed. 
                    Get a free consultation today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center gap-2 bg-white text-red-500 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <FaPhone className="text-sm" />
                      Call Now: +1 (555) 123-4567
                    </button>
                    <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg">
                      <FaEnvelope className="text-sm" />
                      Get Free Quote
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm opacity-80">
                    <div className="flex items-center gap-2">
                      <FaShieldAlt />
                      <span>Risk-Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaThumbsUp />
                      <span>Satisfaction Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
