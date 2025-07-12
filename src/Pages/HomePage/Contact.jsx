import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactMethods = [
  {
    icon: <FaPhone className="text-xl" />,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Mon-Fri 9am-6pm"
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    title: "Email Us", 
    detail: "info@safesolution.com",
    description: "We'll respond within 24hrs"
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    title: "Visit Us",
    detail: "123 Business Ave",
    description: "Downtown Business District"
  },
  {
    icon: <FaClock className="text-xl" />,
    title: "Schedule",
    detail: "Book a Meeting",
    description: "Free consultation available"
  }
];

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

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-red-300 font-semibold mb-1">{method.detail}</p>
              <p className="text-gray-300 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Choose Safe Solution International?
              </h3>
              <div className="space-y-4">
                {[
                  "✅ Proven track record with 500+ successful projects",
                  "✅ 24/7 dedicated support and consultation",
                  "✅ Industry-leading expertise across multiple sectors",
                  "✅ Customized solutions tailored to your needs"
                ].map((benefit, i) => (
                  <p key={i} className="text-gray-200 text-lg flex items-center gap-3">
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">
                Get Your Free Business Consultation
              </h4>
              <p className="text-gray-200 mb-6">
                Discover how we can help accelerate your business growth with our expert solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-red-500 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
