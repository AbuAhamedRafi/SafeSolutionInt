import { useState, useEffect, useRef } from "react";
import { FaHome, FaChevronDown } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiAlignRight, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const catalogRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close catalog dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) {
        setCatalogOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setCatalogOpen(false);
  };

  const catalogCategories = [
    {
      title: "Fire & Life Safety",
      sub: ["Fire Detection Systems", "Fire Protection Systems", "Fire Extinguishers"]
    },
    {
      title: "Security & Surveillance",
      sub: ["CCTV & Monitoring", "Access Control Systems", "Baggage Claim Machines", "Electric Fences"]
    },
    {
      title: "Industrial & Facility Equipment",
      sub: ["Energy Saving Pumps", "Safety Cabinets & Modular Systems", "Emergency Lights"]
    },
    {
      title: "Health, Safety & PPE",
      sub: ["Health & Medical Equipment", "Emergency Garments & Vests"]
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">
      {/* Desktop Header */}
      <div
        className={`hidden md:flex max-w-7xl mx-auto justify-between items-center px-6 transition-all duration-500 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-32 opacity-100 py-4"
        }`}
      >
        <Link
          to="/"
          className="flex items-center space-x-5 hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="/images/logo.png"
            alt="Safe Solutions Int."
            className="w-16 h-16 object-contain"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Safe Solutions Int.
            </h1>
            <p className="text-sm text-gray-500">Start Strong, Start Right</p>
          </div>
        </Link>

        {/* Contact Info */}
        <div className="flex space-x-8">
          <div className="flex items-center space-x-3">
            <div className="border border-red-500 rounded-full p-2">
              <FaPhone className="text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600">+880 1575838180</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="border border-red-500 rounded-full p-2">
              <FaHome className="text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Address</p>
              <p className="text-gray-600">
                Flat:6/D, MIS Hawlader Mansion, 613 East Kazipara
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Safe Solutions Int."
            className="w-8 h-8 xs:w-10 xs:h-10 object-contain"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div>
            <h1 className="text-sm font-semibold text-gray-900 leading-tight">
              Safe Solutions
            </h1>
            <p className="text-xs text-gray-500">Int.</p>
          </div>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-red-500 focus:outline-none p-2 hover:bg-red-50 rounded-lg transition-colors"
        >
          {menuOpen ? <RiCloseFill /> : <RiAlignRight />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex bg-red-500 w-full relative transition-all duration-300 shadow-sm ${
          isScrolled ? "py-4" : "py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-center items-center space-x-8">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300"
          >
            HOME
          </Link>

          {/* Mega-Menu Trigger — click-based for touch/iPad support */}
          <div className="relative" ref={catalogRef}>
            <button
              onClick={() => setCatalogOpen(!catalogOpen)}
              className="flex items-center space-x-1 text-white text-sm font-semibold hover:text-gray-200 transition duration-300 py-2"
            >
              <span>CATALOG</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${catalogOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega-Menu Dropdown Grid */}
            {catalogOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-4xl bg-white text-gray-800 shadow-2xl z-50 border-t border-red-500 rounded-b-xl">
                <div className="px-6 py-8">
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     {catalogCategories.map((cat, idx) => (
                        <div key={idx}>
                          <h3 className="text-red-500 font-bold mb-3 border-b border-gray-100 pb-2 uppercase text-sm">{cat.title}</h3>
                          <ul className="space-y-2">
                            {cat.sub.map((subItem, sIdx) => (
                               <li key={sIdx}>
                                 <Link 
                                   to={`/catalog/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                   className="text-gray-600 hover:text-red-500 text-sm font-medium transition-colors block py-0.5"
                                   onClick={handleLinkClick}
                                 >
                                   {subItem}
                                 </Link>
                               </li>
                            ))}
                          </ul>
                        </div>
                     ))}
                   </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/it-services"
            onClick={handleLinkClick}
            className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300"
          >
            IT SERVICES
          </Link>

          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full border-t border-gray-100 z-50 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col px-4 py-4 space-y-1">
            <Link to="/" onClick={handleLinkClick} className="text-gray-800 font-semibold text-sm hover:text-red-500 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200">HOME</Link>
            
            <div className="px-4 py-3">
              <button 
                onClick={() => setCatalogOpen(!catalogOpen)}
                className="w-full flex justify-between items-center text-gray-800 font-semibold text-sm hover:text-red-500 transition-colors"
              >
                <span>CATALOG</span>
                <FaChevronDown className={`transition-transform duration-200 ${catalogOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {catalogOpen && (
                <div className="mt-4 space-y-4 pl-2">
                  {catalogCategories.map((cat, idx) => (
                    <div key={idx}>
                      <h4 className="text-red-500 text-xs font-bold mb-2 uppercase">{cat.title}</h4>
                      <ul className="space-y-2 pl-2 border-l border-gray-100">
                        {cat.sub.map((subItem, sIdx) => (
                           <li key={sIdx}>
                             <Link 
                               to={`/catalog/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                               className="text-gray-600 hover:text-red-500 text-sm block py-1"
                               onClick={handleLinkClick}
                             >
                               {subItem}
                             </Link>
                           </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/it-services" onClick={handleLinkClick} className="text-gray-800 font-semibold text-sm hover:text-red-500 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200 border-t border-gray-50">IT SERVICES</Link>
            <Link to="/about" onClick={handleLinkClick} className="text-gray-800 font-semibold text-sm hover:text-red-500 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200 border-t border-gray-50">ABOUT</Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-gray-800 font-semibold text-sm hover:text-red-500 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200 border-t border-gray-50">CONTACT</Link>
          </div>
        </div>
      )}
    </header>
  );
}
