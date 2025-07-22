import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaAward,
  FaCalendarAlt,
  FaUsers,
  FaEye,
  FaHeart,
  FaShare
} from "react-icons/fa";
import SectionTitle from '../../components/SectionTitle';
import SEO from '../../components/SEO';

const Projects = () => {
    const projectsData = [
      {
        id: 1,
        title: "Enterprise Work Management System",
        description:
          "Complete digital transformation solution for enterprise project management with real-time collaboration tools and advanced analytics.",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=60",
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
        description:
          "Comprehensive renovation of a 50,000 sq ft office building with sustainable design and smart building technologies.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=60",
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
        description:
          "Implementation of IoT-based infrastructure monitoring system for municipal water and waste management.",
        image:
          "https://images.unsplash.com/photo-1581093458791-9d42e72b9353?auto=format&fit=crop&w=800&q=60",
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
        description:
          "Complete automation solution for manufacturing processes with AI-powered quality control and predictive maintenance.",
        image:
          "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=60",
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
        description:
          "Custom e-commerce solution with advanced analytics, multi-vendor support, and mobile-first design approach.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=60",
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
        description:
          "Complete brand identity redesign and digital marketing campaign resulting in 300% increase in brand recognition.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60",
        category: "Branding",
        client: "StartUp Ventures",
        duration: "3 months",
        year: "2024",
        status: "Completed",
        tags: ["Branding", "Marketing", "Digital"]
      },
      {
        id: 7,
        title: "Green Building Certification",
        description:
          "LEED-certified sustainable office building with renewable energy systems and smart environmental controls.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=60",
        category: "Green Building",
        client: "Eco Developments",
        duration: "14 months",
        year: "2023",
        status: "Completed",
        tags: ["LEED", "Sustainable", "Green Tech"]
      },
      {
        id: 8,
        title: "Cybersecurity Framework",
        description:
          "Enterprise-grade cybersecurity implementation with zero-trust architecture and 24/7 threat monitoring.",
        image:
          "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=60",
        category: "Cybersecurity",
        client: "Financial Services",
        duration: "5 months",
        year: "2024",
        status: "Completed",
        tags: ["Security", "Zero-Trust", "Enterprise"]
      },
      {
        id: 9,
        title: "AI-Powered Analytics Platform",
        description:
          "Machine learning platform for business intelligence with real-time data processing and predictive analytics.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
        category: "AI & Analytics",
        client: "Data Corp",
        duration: "7 months",
        year: "2023",
        status: "Completed",
        tags: ["AI", "ML", "Analytics"]
      },
      {
        id: 10,
        title: "Mobile App Ecosystem",
        description:
          "Cross-platform mobile application suite with integrated payment systems and real-time synchronization.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=60",
        category: "Mobile Development",
        client: "Tech Startup",
        duration: "6 months",
        year: "2024",
        status: "Completed",
        tags: ["Mobile", "Cross-Platform", "Payment"]
      },
    ];
  
    return (
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
        <SEO 
          title="Our Projects - Safe Solution International | Portfolio & Case Studies"
          description="Explore our successful project portfolio including enterprise work management systems, smart city infrastructure, e-commerce platforms, and construction projects. See our proven track record with 100+ completed projects."
          keywords="Safe Solution International projects, project portfolio Bangladesh, enterprise management systems, smart city infrastructure, e-commerce development, construction projects, IT solutions case studies"
          url="/projects"
          type="website"
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
            <SectionTitle title="Our Projects" />
          </div>

          {/* Header Section */}
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise across various industries and technologies.
            </p>
          </div>

          {/* Stats Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2">50+</div>
                <div className="text-gray-600 font-medium text-xs md:text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1 md:mb-2">100%</div>
                <div className="text-gray-600 font-medium text-xs md:text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1 md:mb-2">25+</div>
                <div className="text-gray-600 font-medium text-xs md:text-sm">Industry Awards</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1 md:mb-2">5+</div>
                <div className="text-gray-600 font-medium text-xs md:text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {project.status}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {project.category}
                  </div>

                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="relative overflow-hidden group-hover:transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-4">
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <FaEye />
                          </button>
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <FaHeart />
                          </button>
                          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <FaShare />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Project Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <FaUsers className="text-blue-500 text-xs" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <FaCalendarAlt className="text-green-500 text-xs" />
                          <span>{project.year}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Link 
                          to={`/project_details/${project.id}`}
                          className="group/btn relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl py-3 px-6 font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full overflow-hidden"
                        >
                          <span className="relative z-10">View Details</span>
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
                  Start Your Project Today
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Bring Your Vision to Life?
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Let&apos;s discuss your project requirements and create something extraordinary together. Our expert team is ready to turn your ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-500 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                    Start Your Project
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                    View More Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Projects;