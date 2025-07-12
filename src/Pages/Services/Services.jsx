import { 
  RiRocketLine, 
  RiComputerLine, 
  RiTruckLine, 
  RiGovernmentLine, 
  RiTeamLine, 
  RiBrushLine, 
  RiCalendarEventLine, 
  RiPlaneLine 
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaCheckCircle, FaAward } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

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
        "We manage all your startup's logistical needs including warehousing, last-mile delivery, and fleet solutions.",
      image:
        "https://images.unsplash.com/photo-1585128792020-8f42b17a7d62?auto=format&fit=crop&w=800&q=60",
      icon: <RiTruckLine />,
      category: "Logistics",
      features: ["Warehousing", "Last-mile Delivery", "Fleet Management"]
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
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
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
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaStar className="text-sm" />
            Premium Business Solutions
          </div>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive services designed to accelerate your business growth and ensure lasting success in today&apos;s competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Service Number Badge */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {service.category}
                </div>

                <div className="relative z-10 p-8">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 group-hover:border-red-300 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-orange-50 text-gray-700 group-hover:text-red-600 flex items-center justify-center text-2xl rounded-2xl transition-all duration-300 mb-6 group-hover:scale-110">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
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

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center p-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl text-white">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaAward className="text-sm" />
                Ready to Get Started?
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Transform Your Business Today
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let&apos;s discuss how our comprehensive services can accelerate your growth and help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-500 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;