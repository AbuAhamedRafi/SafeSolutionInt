import { FaServer, FaCode, FaDatabase, FaShieldAlt, FaNetworkWired, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const ITServices = () => {
  const services = [
    {
      title: "Data Center & Network Setup",
      short: "Infrastructure",
      icon: <FaNetworkWired />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      desc: "Complete physical and digital network structuring. From laying specialized CQR cabling, configuring high-speed switches, securing server racks, to deploying highly available SAN/NAS storage arrays for enterprise data centers."
    },
    {
      title: "Cloud Hosting & Server Deployment",
      short: "Cloud Ops",
      icon: <FaServer />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      desc: "Bare-metal or VPS server provisioning, cloud-native deployments (AWS, Azure, DigitalOcean), CI/CD pipelines, and robust Nginx reverse-proxy architectures built for 99.99% uptime and auto-scaling."
    },
    {
      title: "Custom SaaS & Enterprise Systems",
      short: "Software",
      icon: <FaDatabase />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      desc: "Bespoke SaaS platform engineering to replace legacy models. We build custom Inventory Management tools, Biometric Attendance systems, and full-scale ERP solutions tailored strictly to your operational workflows."
    },
    {
      title: "Corporate Websites & Portfolios",
      short: "Web Dev",
      icon: <FaGlobe />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
      desc: "Lightning-fast, SEO-optimized, and visually stunning web presence. From high-conversion corporate landing pages to complex multi-level digital portfolios built on React, Next.js, and modern Jamstack architectures."
    },
    {
      title: "Backend APIs & Microservices",
      short: "Engineering",
      icon: <FaCode />,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
      desc: "Secure, high-bandwidth RESTful and GraphQL API development. Utilizing Python, FastAPI, and Node.js to power complex business logic, handle heavy data loads, and seamlessly integrate cross-platform applications."
    },
    {
      title: "Cybersecurity & Access Management",
      short: "Security",
      icon: <FaShieldAlt />,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      desc: "Auditing and hardening existing infrastructure. Implementing precise Zero-Trust access control matrices, DDoS mitigation, and continuous vulnerability scanning to protect enterprise intellectual property."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <SEO 
        title="Enterprise IT Services | Safe Solutions Int."
        description="Comprehensive IT Solutions by Safe Solutions Int. We provide Data Center setups, Web Development, Cloud Hosting, API Architecture, and Custom Enterprise SaaS."
        keywords="Data center set up Bangladesh, cloud hosting, custom SaaS development, Python FastAPI, React JS development, enterprise IT support, network cabling"
        url="/it-services"
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest rounded-md mb-2">
                Digital Division
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Enterprise <span className="text-blue-600">IT Infrastructure</span> & Development
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We bridge the gap between physical hardware and digital architecture. Safe Solutions Int. delivers scalable, 
                secure, and modern technological solutions to power the backbone of your business operations.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all">
                  Request IT Audit
                </Link>
                <a href="#services" className="bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 font-semibold py-3 px-8 rounded-lg transition-all">
                  Explore Capabilities
                </a>
              </div>
            </div>
            
            {/* Visual Abstract representing Server/Code */}
            <div className="hidden lg:block justify-self-end relative w-full h-[400px]">
               <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 bg-white border border-gray-100 rounded-2xl shadow-2xl p-8 max-w-md mx-auto transform translate-y-4 translate-x-4">
                  <div className="flex items-center justify-between border-b pb-4 mb-4">
                     <span className="font-mono text-gray-800 font-bold flex items-center gap-2">
                        <FaServer className="text-blue-500" /> core-prod-01
                     </span>
                     <span className="flex items-center gap-1 text-xs text-green-500 font-bold bg-green-50 px-2 py-1 rounded">
                        <FaCheckCircle /> ONLINE
                     </span>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-gray-500">
                     <p><span className="text-blue-400">root@server:~$</span> init deploy --env=production</p>
                     <p className="text-gray-400">Loading configurations...</p>
                     <p className="text-gray-600">[OK] Database migrations complete.</p>
                     <p className="text-gray-600">[OK] Nginx proxy reloaded.</p>
                     <p className="text-green-500 font-bold mt-4">&gt; System successfully initialized.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section id="services" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full-Stack Capabilities</h2>
            <p className="text-gray-600 text-lg">
              From bare-metal server racking to complex application deployment, our dedicated engineering team handles the entire lifecycle of industrial IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${service.bg} ${service.color} ${service.border} border rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase tracking-wider font-extrabold ${service.color}`}>{service.short}</span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Technologies We Leverage</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Just text logos for modern minimalist feel */}
               <span className="text-2xl font-black tracking-tighter">Python</span>
               <span className="text-2xl font-black tracking-tight text-blue-500">React</span>
               <span className="text-2xl font-black">Node.js</span>
               <span className="text-2xl font-bold text-teal-600">FastAPI</span>
               <span className="text-2xl font-black text-orange-500">AWS</span>
               <span className="text-2xl font-black text-green-600">Nginx</span>
               <span className="text-2xl font-black tracking-widest">Docker</span>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ITServices;
