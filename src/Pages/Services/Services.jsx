import { 
  RiRocketLine, 
  RiComputerLine, 
  RiTruckLine, 
  RiGovernmentLine, 
  RiTeamLine, 
  RiBrushLine, 
  RiCalendarEventLine, 
  RiPlaneLine,
  RiBuilding4Line,
  RiShieldCheckLine,
  RiPlantLine,
  RiCarLine,
  RiToolsLine
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import SEO from "../../components/SEO";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Startup Consultancy",
      description:
        "From business planning to legal entity registration, we help lay a solid foundation for your venture.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60",
      icon: <RiRocketLine />,
      category: "Business",
      features: ["Business Planning", "Legal Registration", "Strategic Guidance"]
    },
    {
      id: 2,
      title: "IT Infrastructure & Support",
      description:
        "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=60",
      icon: <RiComputerLine />,
      category: "Technology",
      features: ["Network Setup", "Cybersecurity", "Cloud Solutions"]
    },
    {
      id: 3,
      title: "Transportation & Logistics",
      description:
        "We manage all your startup's logistical needs including warehousing, last-mile delivery, fleet solutions, and escort services.",
      image:
        "https://images.unsplash.com/photo-1585128792020-8f42b17a7d62?auto=format&fit=crop&w=800&q=60",
      icon: <RiTruckLine />,
      category: "Logistics",
      features: ["Warehousing", "Last-mile Delivery", "Fleet Management", "Escort Services"]
    },
    {
      id: 4,
      title: "Government Tender Assistance",
      description:
        "We guide you through documentation, bidding, and compliance to win government projects with confidence.",
      image:
        "https://images.unsplash.com/photo-1627471428132-76f7f96f4c6e?auto=format&fit=crop&w=800&q=60",
      icon: <RiGovernmentLine />,
      category: "Government",
      features: ["Documentation", "Bidding Support", "Compliance"]
    },
    {
      id: 5,
      title: "HR & Recruitment Services",
      description:
        "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups.",
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4cce0631f0?auto=format&fit=crop&w=800&q=60",
      icon: <RiTeamLine />,
      category: "Human Resources",
      features: ["Talent Acquisition", "Employee Onboarding", "HR Management"]
    },
    {
      id: 6,
      title: "Branding & Identity",
      description:
        "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission.",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
      icon: <RiBrushLine />,
      category: "Marketing",
      features: ["Logo Design", "Brand Strategy", "Visual Identity"]
    },
    {
      id: 7,
      title: "Event Management",
      description:
        "Professional event planning and management services to make your corporate events memorable and successful.",
      image:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=60",
      icon: <RiCalendarEventLine />,
      category: "Events",
      features: ["Event Planning", "Corporate Events", "Event Coordination"]
    },
    {
      id: 8,
      title: "Air Ticketing & Travel Services",
      description:
        "Complete travel solutions including air ticketing, hotel bookings, and travel planning for business trips.",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7f4a08f1ba?auto=format&fit=crop&w=800&q=60",
      icon: <RiPlaneLine />,
      category: "Travel",
      features: ["Air Ticketing", "Hotel Bookings", "Travel Planning"]
    },
    {
      id: 9,
      title: "Construction & Real Estate",
      description:
        "Comprehensive construction and real estate services including project management, property development, and investment consultancy.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=60",
      icon: <RiBuilding4Line />,
      category: "Construction",
      features: ["Project Management", "Property Development", "Investment Consultancy"]
    },
    {
      id: 10,
      title: "Safety & Security Solutions",
      description:
        "Advanced safety and security services including fire safety systems, detection solutions, and emergency response planning.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
      icon: <RiShieldCheckLine />,
      category: "Security",
      features: ["Fire Safety Systems", "Detection Solutions", "Emergency Planning"]
    },
    {
      id: 11,
      title: "Renewable Energy & Waste Management",
      description:
        "Sustainable energy solutions including solar installations, waste management systems, and environmental consultancy services.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=60",
      icon: <RiPlantLine />,
      category: "Environment",
      features: ["Solar Energy Systems", "Waste Management", "Environmental Consulting"]
    },
    {
      id: 12,
      title: "Transportation & Escort Services",
      description:
        "Enhanced transportation services including logistics, fleet management, and professional escort services for secure transport.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=60",
      icon: <RiCarLine />,
      category: "Transport",
      features: ["Fleet Management", "Secure Transport", "Escort Services"]
    },
    {
      id: 13,
      title: "Facilities & Maintenance Services",
      description:
        "Complete facility management and maintenance solutions including building maintenance, cleaning services, and equipment management.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=60",
      icon: <RiToolsLine />,
      category: "Maintenance",
      features: ["Building Maintenance", "Cleaning Services", "Equipment Management"]
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      <SEO 
        title="Business Services - Safe Solution International | Complete Solutions in Bangladesh"
        description="Explore Safe Solution International's comprehensive business services in Bangladesh: startup consultancy, IT infrastructure, government tender support, transportation & logistics, construction, HR recruitment, branding, event management, and more. Professional solutions tailored for Bangladesh businesses."
        keywords="Safe Solution International services, business services Bangladesh, startup consultancy services, IT infrastructure Bangladesh, government tender assistance, transportation logistics Bangladesh, construction services Dhaka, HR recruitment Bangladesh, business solutions Dhaka, commercial services Bangladesh"
        url="/service"
        type="website"
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Enhanced Section Title */}
        <div className="pt-16 pb-8">
          <SectionTitle title="Our Services" />
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          {/* <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaStar className="text-sm" />
            Premium Business Solutions
          </div> */}
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive services designed to accelerate your business growth and ensure lasting success in today&apos;s competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, ) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                


                {/* Category Badge */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-sm text-gray-600 px-2 md:px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {service.category}
                </div>

                <div className="relative z-10 p-6 md:p-8">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 md:h-48 object-cover rounded-xl md:rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 group-hover:border-red-300 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-orange-50 text-gray-700 group-hover:text-red-600 flex items-center justify-center text-xl md:text-2xl rounded-xl md:rounded-2xl transition-all duration-300 mb-4 md:mb-6 group-hover:scale-110">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Link 
                        to={`/service_details/${service.id}`}
                        className="group/btn relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl py-3 px-6 font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full overflow-hidden"
                      >
                        <span className="relative z-10">Learn More</span>
                        <FaArrowRight className="relative z-10 group-hover/btn:translate-x-1 transition-transform text-xs" />
                        
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;