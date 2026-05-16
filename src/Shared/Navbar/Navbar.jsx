import { useState, useEffect, useRef } from "react";
import { FaHome, FaChevronDown } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiAlignRight, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const catalogRef = useRef(null);
  const servicesRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) {
        setCatalogOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
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
    setServicesOpen(false);
  };

  const serviceLinks = [
    { label: "Facilities Management", id: "facilities-services" },
    { label: "Technical Operations & Maintenance", id: "technical-operations" },
    { label: "Soft Services", id: "soft-services" },
    { label: "FM Consultancy & Advisory", id: "fm-consultancy" },
    { label: "Project Management & Support", id: "project-management" },
    { label: "Bio Clean Services", id: "bio-clean" },
  ];

  const catalogCategories = [
    {
      title: "Fire & Life Safety",
      sub: ["Fire Detection Systems", "Fire Protection Systems", "Fire Extinguishers"],
    },
    {
      title: "Security & Surveillance",
      sub: ["CCTV & Monitoring", "Access Control Systems", "Baggage Claim Machines", "Electric Fences"],
    },
    {
      title: "Industrial & Facility Equipment",
      sub: ["Energy Saving Pumps", "Safety Cabinets & Modular Systems", "Emergency Lights"],
    },
    {
      title: "Health, Safety & PPE",
      sub: ["Health & Medical Equipment", "Emergency Garments & Vests"],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">

      {/* ── Desktop top info bar ─────────────────────────────────────── */}
      <div
        className={`hidden md:flex max-w-7xl mx-auto justify-between items-center px-6 transition-all duration-500 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-32 opacity-100 py-4"
        }`}
      >
        <Link to="/" className="flex items-center space-x-5 hover:opacity-80 transition-opacity duration-200">
          <img
            src="/images/logo.png"
            alt="Safe Solutions Int."
            className="w-16 h-16 object-contain"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Safe Solutions Int.</h1>
            <p className="text-sm text-gray-500">Start Strong, Start Right</p>
          </div>
        </Link>

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
              <p className="text-gray-600">Flat:6/D, MIS Hawlader Mansion, 613 East Kazipara</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile top bar ───────────────────────────────────────────── */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <Link to="/" className="flex items-center gap-2.5" onClick={handleLinkClick}>
          <img
            src="/images/logo.png"
            alt="Safe Solutions Int."
            className="w-9 h-9 object-contain flex-shrink-0"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="leading-tight">
            <p className="text-sm font-bold text-gray-900">Safe Solutions</p>
            <p className="text-xs text-gray-500">Int. — Start Strong, Start Right</p>
          </div>
        </Link>

        {/* Hamburger — explicit size so the min-height CSS rule doesn't warp it */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ minHeight: "unset", minWidth: "unset" }}
          className="w-10 h-10 flex items-center justify-center text-2xl text-red-500 rounded-lg hover:bg-red-50 transition-colors focus:outline-none"
        >
          {menuOpen ? <RiCloseFill /> : <RiAlignRight />}
        </button>
      </div>

      {/* ── Desktop nav bar ──────────────────────────────────────────── */}
      <nav
        className={`hidden md:flex bg-red-500 w-full relative transition-all duration-300 shadow-sm ${
          isScrolled ? "py-4" : "py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-center items-center space-x-8">
          <Link to="/" onClick={handleLinkClick} className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300">
            HOME
          </Link>

          {/* Catalog mega-menu */}
          <div className="relative" ref={catalogRef}>
            <button
              onClick={() => setCatalogOpen(!catalogOpen)}
              className="flex items-center space-x-1 text-white text-sm font-semibold hover:text-gray-200 transition duration-300 py-2"
            >
              <span>CATALOG</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${catalogOpen ? "rotate-180" : ""}`} />
            </button>
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
                                to={`/catalog/${subItem.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
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

          {/* Services dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center space-x-1 text-white text-sm font-semibold hover:text-gray-200 transition duration-300 py-2"
            >
              <span>SERVICES</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-72 bg-white text-gray-800 shadow-2xl z-50 border-t border-red-500 rounded-b-xl">
                <div className="py-3">
                  {serviceLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={`/services#${link.id}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-red-500 hover:bg-red-50 font-medium transition-colors"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/it-services" onClick={handleLinkClick} className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300">
            IT SERVICES
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300">
            ABOUT
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300">
            CONTACT
          </Link>
        </div>
      </nav>

      {/* ── Mobile full-screen slide-down menu ───────────────────────── */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white z-40 overflow-y-auto">
          <nav className="flex flex-col divide-y divide-gray-100">

            {/* HOME */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              HOME
            </Link>

            {/* CATALOG accordion */}
            <div>
              <button
                onClick={() => setCatalogOpen(!catalogOpen)}
                className="w-full flex justify-between items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <span>CATALOG</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${catalogOpen ? "rotate-180 text-red-500" : "text-gray-400"}`} />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: catalogOpen ? "600px" : "0px" }}
              >
                <div className="bg-gray-50 px-5 py-4 space-y-5">
                  {catalogCategories.map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">{cat.title}</p>
                      <ul className="space-y-1 pl-3 border-l-2 border-red-100">
                        {cat.sub.map((subItem, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              to={`/catalog/${subItem.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                              className="block text-sm text-gray-600 hover:text-red-500 py-1 transition-colors"
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

            {/* SERVICES accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <span>SERVICES</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${servicesOpen ? "rotate-180 text-red-500" : "text-gray-400"}`} />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: servicesOpen ? "400px" : "0px" }}
              >
                <div className="bg-gray-50 px-5 py-4 pl-8 space-y-1 border-l-2 border-red-100 ml-5">
                  {serviceLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={`/services#${link.id}`}
                      className="block text-sm text-gray-600 hover:text-red-500 py-1.5 transition-colors"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Flat links */}
            <Link to="/it-services" onClick={handleLinkClick} className="flex items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:text-red-500 hover:bg-red-50 transition-colors">
              IT SERVICES
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="flex items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:text-red-500 hover:bg-red-50 transition-colors">
              ABOUT
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="flex items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:text-red-500 hover:bg-red-50 transition-colors">
              CONTACT
            </Link>

            {/* Mobile contact info footer */}
            <div className="px-5 py-5 bg-gray-50 space-y-3">
              <a href="tel:+8801575838180" className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 border border-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-red-500 text-xs" />
                </div>
                +880 1575838180
              </a>
              <p className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 border border-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaHome className="text-red-500 text-xs" />
                </span>
                Flat:6/D, MIS Hawlader Mansion, 613 East Kazipara
              </p>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
