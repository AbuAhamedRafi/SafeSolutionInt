import { Link } from "react-router-dom";
import { FaWind, FaExclamationTriangle, FaCode } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const QuickAccessGrid = () => {
  const flagships = [
    {
      title: "Purity Pumps",
      path: "/catalog/energy-saving-pumps",
      icon: <FaDroplet className="text-blue-500" />,
      desc: "Industrial-grade energy saving water pumps.",
      bg: "bg-blue-50"
    },
    {
      title: "High Air Breathing Systems",
      path: "/catalog/fire-protection-systems",
      icon: <FaWind className="text-teal-500" />,
      desc: "Life safety and controlled respiratory hardware.",
      bg: "bg-teal-50"
    },
    {
      title: "Yawe Warning Lights",
      path: "/catalog/emergency-lights",
      icon: <FaExclamationTriangle className="text-red-500" />,
      desc: "High-visibility warning and emergency illumination.",
      bg: "bg-red-50"
    },
    {
      title: "Custom Software",
      path: "/it-services",
      icon: <FaCode className="text-purple-500" />,
      desc: "Tailored IT solutions, inventory, and API backends.",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flagship Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Direct access to our most demanded industrial products and enterprise architecture services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flagships.map((item, idx) => (
            <Link key={idx} to={item.path} className={`block p-8 rounded-2xl ${item.bg} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}>
              <div className="text-4xl mb-4 bg-white w-16 h-16 flex items-center justify-center rounded-xl shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessGrid;
