import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaDollarSign,
  FaRuler,
  FaBuilding,
  FaCheckCircle,
  FaAward,
  FaTrophy,
  FaStar,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaShare,
  FaEye,
  FaThumbsUp,
  FaClock,
  FaChartLine
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const projectsData = [
  {
    id: 1,
    title: "Enterprise Work Management System",
    description: "A comprehensive digital transformation solution designed to revolutionize enterprise project management. This cutting-edge system features real-time collaboration tools, advanced analytics, automated workflow management, and seamless integration capabilities. The platform supports multi-team coordination, resource allocation optimization, and provides detailed performance insights through interactive dashboards.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    category: "Software Development",
    client: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    duration: "6 months",
    year: "2024",
    budget: "$850,000",
    area: "Enterprise Software",
    architect: "Digital Solutions Team",
    status: "Completed",
    completionDate: "March 2024",
    features: [
      "Real-time Collaboration Dashboard",
      "Advanced Analytics & Reporting",
      "Automated Workflow Management",
      "Multi-platform Integration",
      "Cloud-based Infrastructure",
      "Mobile Responsive Design",
      "Role-based Access Control",
      "API Documentation & SDK"
    ],
    achievements: [
      "40% increase in project efficiency",
      "Reduced project delivery time by 30%",
      "99.9% system uptime achieved",
      "250+ concurrent users supported"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=60"
    ]
  },
  {
    id: 2,
    title: "Modern Office Complex Renovation",
    description: "Complete architectural transformation of a 50,000 sq ft office building featuring sustainable design principles, smart building technologies, and modern workplace amenities. The project incorporated energy-efficient systems, flexible workspace designs, and state-of-the-art security infrastructure.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    category: "Construction",
    client: "Corporate Holdings Ltd.",
    location: "New York, NY",
    duration: "12 months",
    year: "2024",
    budget: "$2,500,000",
    area: "50,000 sq ft",
    architect: "Modern Design Associates",
    status: "Completed",
    completionDate: "June 2024",
    features: [
      "LEED Gold Certification",
      "Smart Building Systems",
      "Energy Efficient HVAC",
      "Flexible Workspace Design",
      "Advanced Security Systems",
      "Green Roof Installation",
      "Solar Panel Integration",
      "Smart Lighting Controls"
    ],
    achievements: [
      "30% reduction in energy consumption",
      "LEED Gold certification achieved",
      "Completed 2 weeks ahead of schedule",
      "Zero safety incidents during construction"
    ],
    technologies: ["IoT Sensors", "Building Management Systems", "Solar Technology", "Smart Glass"],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=60"
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Find the project based on the ID parameter, fallback to first project
  const project = projectsData.find(p => p.id === parseInt(id)) || projectsData[0];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Enhanced Section Title */}
        <div className="pt-16 pb-8">
          <SectionTitle title="Project Details" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition-colors duration-300"
            >
              <FaArrowLeft className="text-sm" />
              Back to Projects
            </Link>
          </div>

          {/* Hero Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div className="relative h-80 lg:h-96 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {project.status}
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                {project.category}
              </div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>Completed {project.completionDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar - Project Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Project Information Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaTrophy className="text-yellow-500" />
                  Project Information
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: <FaUser />, label: "Client", value: project.client },
                    { icon: <FaMapMarkerAlt />, label: "Location", value: project.location },
                    { icon: <FaRuler />, label: "Scope", value: project.area },
                    { icon: <FaCalendarAlt />, label: "Year", value: project.year },
                    { icon: <FaDollarSign />, label: "Budget", value: project.budget },
                    { icon: <FaBuilding />, label: "Team", value: project.architect },
                  ].map(({ icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-red-500">{icon}</div>
                        <span className="font-semibold text-gray-700">{label}:</span>
                      </div>
                      <span className="text-gray-900 font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl text-white p-6">
                <h3 className="text-lg font-bold mb-4">Interested in Similar Project?</h3>
                <p className="text-sm opacity-90 mb-6">Get a free consultation for your project requirements.</p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-red-500 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                    <FaPhone className="text-sm" />
                    Call Now
                  </button>
                  <button className="w-full border-2 border-white/30 text-white py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    <FaEnvelope className="text-sm" />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Project Description */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaEye className="text-blue-500" />
                  Project Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Key Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaChartLine className="text-green-500" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {project.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <FaCheckCircle className="text-green-500 text-sm flex-shrink-0 mt-1" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FaClock className="text-blue-500" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaAward className="text-yellow-500" />
                  Project Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features?.map((feature, index) => (
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

              {/* Project Gallery */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaEye className="text-purple-500" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.gallery?.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors">
                          <FaEye />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100 p-8">
                <div className="text-center">
                  <FaQuoteLeft className="text-4xl text-blue-500 mx-auto mb-4 opacity-60" />
                  <blockquote className="text-xl text-gray-700 italic mb-6 max-w-2xl mx-auto">
                    &ldquo;Safe Solution International delivered exceptional results on our {project.title.toLowerCase()}. 
                    Their professionalism and attention to detail exceeded all our expectations.&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <cite className="text-gray-600 font-medium">{project.client}</cite>
                </div>
              </div>

              {/* Action Section */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl text-white p-8 shadow-2xl">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Start Your Project Today</h3>
                  <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Ready to transform your ideas into reality? Let&apos;s discuss your project requirements 
                    and create something extraordinary together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center gap-2 bg-white text-red-500 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <FaPhone className="text-sm" />
                      Schedule Consultation
                    </button>
                    <button className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg">
                      <FaShare className="text-sm" />
                      Share Project
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm opacity-80">
                    <div className="flex items-center gap-2">
                      <FaThumbsUp />
                      <span>100% Satisfaction Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>24/7 Support Available</span>
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

export default ProjectDetails;
