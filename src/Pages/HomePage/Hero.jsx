import { FaArrowRight, FaPlay, FaCheckCircle, FaUsers, FaAward } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/BG.jpg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
              <FaAward className="text-sm" />
              Trusted Business Partner Since 2014
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Safe Solution{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                International
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl">
              Your one-stop solution for establishing and growing your business. From transportation and IT support to government tenders, we provide{" "}
              <span className="text-red-400 font-semibold">end-to-end services</span>{" "}
              to help startups and companies succeed.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {[
                "Complete Business Setup",
                "Government Tender Support", 
                "IT Infrastructure Solutions",
                "Professional Consultancy"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
                Get Started Today
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                <FaPlay className="text-sm" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Stats/Features */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { number: "500+", label: "Projects Completed", icon: <FaCheckCircle /> },
                { number: "5000+", label: "Happy Clients", icon: <FaUsers /> },
                { number: "150+", label: "Awards Won", icon: <FaAward /> },
                { number: "10+", label: "Years Experience", icon: <FaCheckCircle /> }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-2xl text-red-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
