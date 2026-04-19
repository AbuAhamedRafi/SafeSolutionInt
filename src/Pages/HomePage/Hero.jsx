import { FaCheckCircle, FaServer, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/BG.jpg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Safe Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Int.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg xs:text-xl sm:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl">
              Bangladesh&apos;s premier engineering and technology partner. Specializing in{" "}
              <span className="text-red-400 font-semibold">Next-Generation Security Hardware</span> and <span className="text-blue-400 font-semibold">Enterprise IT Infrastructure</span> to secure and scale your enterprise.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 py-6">
              {[
                "Fire & Life Safety Systems",
                "Advanced Security & Surveillance",
                "Industrial Facility Equipment",
                "Enterprise Server & Cloud IT",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm xs:text-base" />
                  <span className="font-medium text-sm xs:text-base">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <a href="#partners" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all mr-4">
                View Catalog
              </a>
              <a href="/it-services" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all">
                IT Solutions
              </a>
            </div>
          </div>

          {/* Right Side - Visual representations of the two divisions */}
          <div className="hidden lg:block lg:justify-self-end w-full">
            <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
              
              {/* Hardware Division Visual Card */}
              <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center text-2xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Physical Infrastructure</h3>
                    <p className="text-red-400 text-sm font-medium">Security & Safety Hardware</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Authorized partners for global giants providing structural hardware, fire detection, cameras, and facility equipment.
                </p>
              </div>

              {/* IT Division Visual Card */}
              <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-2 lg:ml-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-2xl">
                    <FaServer />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Digital & IT Services</h3>
                    <p className="text-blue-400 text-sm font-medium">Enterprise Software & Servers</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Custom SaaS platforms, backend architecture via Python & FastAPI, and complete cloud server provisioning.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
