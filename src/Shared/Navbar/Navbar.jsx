import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiAlignRight, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICE", path: "/service" },
    { name: "PROJECT", path: "/projects" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Desktop Header */}
      <div
        className={`hidden md:flex max-w-7xl mx-auto justify-between items-center py-4 px-6 transition-all duration-700 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-5">
          <img
            src="https://images.seeklogo.com/logo-png/48/2/scuba-scholl-international-logo-png_seeklogo-483233.png"
            alt="Safe solution International"
            className="w-16"
          />
          <div>
            <h1 className="text-lg font-semibold">
              Safe solution International
            </h1>
            <p className="text-sm text-gray-500">Build Your Dreams</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <div className="border border-red-500 rounded-full p-2">
              <FaPhone className="text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Phone</p>
              <p className="text-gray-600">98 9875 5968 54</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="border border-red-500 rounded-full p-2">
              <FaHome className="text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Address</p>
              <p className="text-gray-600">your address goes here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <img src="https://images.seeklogo.com/logo-png/48/2/scuba-scholl-international-logo-png_seeklogo-483233.png" alt="Logo" className="w-10 h-10" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-red-500 focus:outline-none"
        >
          {menuOpen ? <RiCloseFill /> : <RiAlignRight />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex bg-red-500 transition-all duration-700 ${
          isScrolled
            ? "fixed top-0 py-4 w-full justify-center"
            : "relative py-2"
        }`}
      >
        <div className="w-full mx-auto flex justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleLinkClick}
              className="text-white text-sm font-semibold hover:text-gray-200 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-start px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className="text-gray-800 font-semibold text-center text-sm hover:text-red-500 border-b border-gray-100 w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

