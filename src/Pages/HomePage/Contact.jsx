import { Link } from "react-router-dom";
import { FaArrowRight} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful businesses that have accelerated their growth with our comprehensive solutions and expert guidance.
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/20 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
