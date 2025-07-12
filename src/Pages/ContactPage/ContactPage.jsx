import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaRocket, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      console.log("Form Submitted:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        terms: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaEnvelope className="text-blue-400" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            Say Hello to Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to reduce costs and create new revenue? Have questions about our services? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FaPhone,
              title: "Call Us",
              info: "+1 (555) 123-4567",
              description: "Mon-Fri 9am-6pm",
              color: "from-blue-500 to-purple-600"
            },
            {
              icon: FaEnvelope,
              title: "Email Us",
              info: "info@safesolutionint.com",
              description: "24/7 Support",
              color: "from-green-500 to-teal-600"
            },
            {
              icon: FaMapMarkerAlt,
              title: "Visit Us",
              info: "123 Business Ave",
              description: "Suite 100, City, State",
              color: "from-red-500 to-pink-600"
            }
          ].map((contact, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">{contact.info}</p>
              <p className="text-gray-500">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "name", label: "Full Name *", type: "text" },
                  { name: "email", label: "Email Address *", type: "email" },
                  { name: "phone", label: "Phone Number", type: "text" },
                  { name: "company", label: "Company Name", type: "text" },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:bg-white transition-colors focus:outline-none ${
                        errors[field.name] 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      {field.label}
                    </label>
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:bg-white transition-colors focus:outline-none resize-none ${
                    errors.message 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-200 focus:border-blue-500"
                  }`}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Message *
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span>
                    I have read and accept the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                      Terms of Service & Privacy Policy *
                    </a>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 mb-8">
                When you partner with Safe Solution International, you&apos;re choosing excellence, reliability, and comprehensive support for your business needs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: FaRocket,
                  title: "Fast Response Time",
                  description: "We respond to all inquiries within 24 hours and provide quick turnaround on all projects.",
                  color: "text-blue-500"
                },
                {
                  icon: FaShieldAlt,
                  title: "Reliable & Secure",
                  description: "Your data and projects are handled with the highest level of security and confidentiality.",
                  color: "text-green-500"
                },
                {
                  icon: FaCheckCircle,
                  title: "Proven Track Record",
                  description: "Over 1,220 successful projects completed with 300+ satisfied clients across various industries.",
                  color: "text-purple-500"
                },
                {
                  icon: FaClock,
                  title: "24/7 Support",
                  description: "Our dedicated support team is available around the clock to assist you with any questions.",
                  color: "text-red-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className={`text-xl ${benefit.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-blue-100 mb-6">
                For urgent matters or immediate consultation, give us a call directly.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <FaPhone />
                Call Now: +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
