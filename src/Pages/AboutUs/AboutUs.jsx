import { Link } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaProjectDiagram, FaAward, FaRocket, FaShieldAlt, FaClock, FaArrowRight } from "react-icons/fa";
import SEO from "../../components/SEO";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <SEO 
        title="About Safe Solution International - Leading Business Consultancy in Bangladesh"
        description="Learn about Safe Solution International, a leading business consultancy firm in Bangladesh. We provide comprehensive solutions including startup support, IT infrastructure, government tender assistance, and project management services with 3+ years of experience."
        keywords="about Safe Solution International, business consultancy Bangladesh, company profile, startup support Bangladesh, IT services company, project management firm, government tender support"
        url="/about"
        type="website"
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaUsers className="text-blue-400" />
            About Our Company
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            Safe Solution International
          </h1>
          <p className="text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for comprehensive business solutions and startup support
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          <div className="relative group order-2 lg:order-1">
            <img
              src="/images/geometric-background-about.jpg"
              alt="About us"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              <FaRocket />
              Welcome to Safe Solution International
            </div>
            <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Comprehensive Services for Startups & Businesses
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We are your one-stop solution for establishing and growing your business. From transportation and IT support to government tenders, we provide end-to-end services to help startups and companies succeed.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our expert team covers every aspect of your business journey, ensuring seamless operations and reliable support. Whether you need help setting up, managing logistics, or navigating government processes, Safe Solution International is here for you—every step of the way.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              {[
                "End-to-end business solutions",
                "Expert startup support",
                "Government tender assistance", 
                "Reliable logistics management"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-base md:text-lg flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/service"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors mt-8"
            >
              Discover Our Services
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-gray-100 mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Years of dedication and expertise have helped us build lasting relationships and deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: FaProjectDiagram, number: "1,220+", label: "Projects Completed", color: "text-blue-500" },
              { icon: FaUsers, number: "300+", label: "Satisfied Clients", color: "text-green-500" },
              { icon: FaClock, number: "200+", label: "Expert Team Members", color: "text-purple-500" },
              { icon: FaAward, number: "50+", label: "Industry Awards", color: "text-red-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <div className="bg-gradient-to-r from-gray-100 to-blue-50 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`text-2xl md:text-3xl ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium text-xs md:text-sm leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Safe Solution International?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our commitment to excellence and comprehensive approach sets us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Reliability & Trust",
                description: "Built on years of consistent service delivery and transparent business practices that our clients can depend on.",
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: FaRocket,
                title: "Innovation & Growth",
                description: "Leveraging cutting-edge solutions and strategic insights to accelerate your business growth and market presence.",
                color: "from-green-500 to-teal-600"
              },
              {
                icon: FaUsers,
                title: "Expert Support",
                description: "Our dedicated team of professionals provides personalized guidance and support throughout your business journey.",
                color: "from-red-500 to-pink-600"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have trusted us with their growth. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-red-50 text-red-500 px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us Today
                <FaArrowRight />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
