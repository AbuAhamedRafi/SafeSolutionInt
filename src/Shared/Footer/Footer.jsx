import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Brand & Social */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Safe Solution International
            </h2>
            <p className="mb-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              corrupti. Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 text-sm">Follow us on social media:</p>
            <div className="flex items-center space-x-4 text-xl">
              <a href="#" aria-label="Instagram" className="hover:text-red-500 transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-red-500 transition">
                <FaFacebook />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-red-500 transition">
                <FaYoutube />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-red-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Middle + Right: Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Wrench", "Hammer", "Axe", "Pliers"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-red-500 transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Collections</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Tools", "Electronics", "Home & Garden", "Fashion"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-red-500 transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Shipping & Returns", "Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-red-500 transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-400">
        © Safe Solution International 2025 - 2030. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
