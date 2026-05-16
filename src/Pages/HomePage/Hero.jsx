import {
  FaCheckCircle,
  FaUsers,
  FaAward,
} from "react-icons/fa";

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
              Safe Solution{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                International
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg xs:text-xl sm:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl">
              Bangladesh&apos;s leading business consultancy firm providing comprehensive solutions for startups, SMEs, and enterprises.
              From startup consultancy and IT infrastructure to government tenders and construction services, we deliver{" "}
              <span className="text-red-400 font-semibold">
                professional business solutions
              </span>{" "}
              to help your business thrive and succeed across Bangladesh.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 py-6">
              {[
                "Complete Business Setup",
                "Government Tender Support",
                "IT Infrastructure Solutions",
                "Professional Consultancy",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm xs:text-base" />
                  <span className="font-medium text-sm xs:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Stats/Features - Hidden on mobile */}
          <div className="hidden lg:block lg:justify-self-end">
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                {
                  number: "100+",
                  label: "Projects Completed",
                  icon: <FaCheckCircle />,
                },
                { number: "200+", label: "Happy Clients", icon: <FaUsers /> },
                { number: "50+", label: "Contracts", icon: <FaAward /> },
                {
                  number: "3+",
                  label: "Years Experience",
                  icon: <FaCheckCircle />,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-2xl text-red-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
