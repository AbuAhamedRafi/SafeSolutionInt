import { FaServer, FaCode, FaRobot, FaDatabase } from "react-icons/fa";

const ITServices = () => {
  const services = [
    {
      title: "Custom SaaS & Enterprise Systems",
      icon: <FaDatabase />,
      desc: "Tailored software solutions including automated Inventory Management systems and Biometric-integrated Attendance Management."
    },
    {
      title: "Web & Application Development",
      icon: <FaCode />,
      desc: "High-performance corporate websites and scalable web applications built on modern stacks like TypeScript and Node.js."
    },
    {
      title: "Backend Architecture",
      icon: <FaRobot />,
      desc: "Secure, high-speed API development and microservices utilizing Python and FastAPI to handle complex data logic."
    },
    {
      title: "Server Infrastructure & Deployment",
      icon: <FaServer />,
      desc: "Complete server setup, cloud provisioning, and reverse proxy routing using Nginx to ensure secure, high-availability deployments."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-28 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Enterprise IT Infrastructure
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Scalable, secure, and modern digital solutions to power the backend of your business operations. From custom internal SaaS platforms to robust cloud infrastructure deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-colors group">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center text-2xl text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITServices;
