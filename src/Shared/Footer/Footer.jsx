import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Left: Brand & Social */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Safe Solutions Int.
            </h2>
            <p className="mb-4 text-sm text-gray-400 leading-relaxed">
              Your trusted engineering and technology partner. We specialize in industrial safety, security hardware, and enterprise IT infrastructure to help businesses secure and scale their operations.
            </p>
            <p className="mb-3 text-sm font-medium">Follow us on social media:</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 text-xl">
              <a href="#" aria-label="Instagram" className="hover:text-red-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-red-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <FaFacebook />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <FaYoutube />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-red-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Middle + Right: Links */}
          <div className="md:col-span-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            {/* Quick Links */}
            <div className="text-center xs:text-left">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Hardware Catalog", path: "/catalog/fire-detection-systems" },
                  { name: "IT Services", path: "/it-services" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:text-red-500 transition-colors duration-300 block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divisions */}
            <div className="text-center xs:text-left">
              <h3 className="text-lg font-semibold mb-4">Our Divisions</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  { name: "Fire & Life Safety", path: "/catalog/fire-detection-systems" },
                  { name: "Security & Surveillance", path: "/catalog/cctv-monitoring" },
                  { name: "Industrial Equipment", path: "/catalog/energy-saving-pumps" },
                  { name: "Health, Safety & PPE", path: "/catalog/health-medical-equipment" },
                  { name: "Custom SaaS Solutions", path: "/it-services" },
                  { name: "Server Infrastructure", path: "/it-services" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:text-red-500 transition-colors duration-300 block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="text-center xs:text-left col-span-1 xs:col-span-2 sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400 text-sm mb-6">
                <div className="flex items-center justify-center xs:justify-start gap-2">
                  <FaPhone className="text-red-500 flex-shrink-0" />
                  <span>+880 1575838180</span>
                </div>
                <div className="flex items-center justify-center xs:justify-start gap-2">
                  <FaEnvelope className="text-red-500 flex-shrink-0" />
                  <a href="mailto:info@safesolutionsint.com" className="hover:text-red-500 transition-colors">info@safesolutionsint.com</a>
                </div>
                <div className="flex items-start justify-center xs:justify-start gap-2">
                  <FaMapMarkerAlt className="text-red-500 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">
                    Flat:6/D, MIS Hawlader Mansion,<br />
                    613 East Kazipara, Mirpur,<br />
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
              <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 w-full"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-gray-700 py-4 px-4 text-xs sm:text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Safe Solutions Int. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
