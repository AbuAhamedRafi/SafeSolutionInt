import { useState, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaShieldAlt, FaArrowRight, FaSpinner } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailjs';
import SEO from "../../components/SEO";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [honeypot, setHoneypot] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const formStartTime = useRef(Date.now());

  // Security constants
  const MAX_SUBMISSIONS_PER_HOUR = 3;
  const MIN_FORM_TIME = 3000; // 3 seconds minimum to fill form
  const RATE_LIMIT_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Honeypot trap
    if (name === 'website') {
      setHoneypot(value);
      return;
    }
    
    // Input sanitization
    let sanitizedValue = value;
    if (type === 'text' || type === 'email') {
      // Remove potentially malicious characters
      sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                           .replace(/javascript:/gi, '')
                           .replace(/on\w+=/gi, '')
                           .trim();
      
      // Limit input length
      const maxLengths = {
        name: 100,
        email: 150,
        phone: 20,
        company: 150,
        message: 1000
      };
      
      if (sanitizedValue.length > (maxLengths[name] || 500)) {
        sanitizedValue = sanitizedValue.substring(0, maxLengths[name] || 500);
      }
    }
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : sanitizedValue,
    });
  };

  const validate = () => {
    const newErrors = {};
    
    // Basic validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s.-]+$/.test(formData.name)) {
      newErrors.name = "Name contains invalid characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    } else if (formData.email.length > 150) {
      newErrors.email = "Email is too long";
    }
    
    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number contains invalid characters";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message is too long (max 1000 characters)";
    }
    
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }
    
    // Security validations
    
    // Check for spam patterns
    const spamPatterns = [
      /(.)\1{10,}/i, // Repeated characters
      /(viagra|casino|lottery|winner|congratulations|urgent|limited time)/i,
      /https?:\/\/[^\s]+/g, // Multiple URLs
    ];
    
    const textToCheck = `${formData.name} ${formData.message} ${formData.company}`;
    spamPatterns.forEach(pattern => {
      if (pattern.test(textToCheck)) {
        newErrors.spam = "Message appears to be spam";
      }
    });
    
    // Check honeypot
    if (honeypot.trim() !== "") {
      newErrors.bot = "Bot detected";
    }
    
    // Rate limiting check
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    
    if (submitCount >= MAX_SUBMISSIONS_PER_HOUR && timeSinceLastSubmit < RATE_LIMIT_COOLDOWN) {
      const remainingTime = Math.ceil((RATE_LIMIT_COOLDOWN - timeSinceLastSubmit) / (1000 * 60));
      newErrors.rateLimit = `Too many submissions. Please try again in ${remainingTime} minutes.`;
    }
    
    // Check minimum form filling time (bot detection)
    const formFillTime = now - formStartTime.current;
    if (formFillTime < MIN_FORM_TIME) {
      newErrors.fastSubmit = "Please take your time to fill the form properly";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submission
    
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // EmailJS Configuration (You need to set these up in EmailJS dashboard)
        const { serviceId, templateId, publicKey } = emailConfig;
        
        // Prepare template parameters
        const templateParams = {
          title: 'Got a New Message in Safe Solutions International website',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          message: formData.message,
          to_email: 'info@safesolutionint.com', // Your email
          reply_to: formData.email,
          timestamp: new Date().toLocaleString(),
        };
        
        // Send email using EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        // Success
        setSubmitStatus('success');
        setSubmitCount(prev => prev + 1);
        setLastSubmitTime(Date.now());
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          terms: false,
        });
        
        // Reset form start time for next submission
        formStartTime.current = Date.now();
        
        // Show success message for 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
        
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <SEO 
        title="Contact Us - Safe Solution International | Get in Touch"
        description="Contact Safe Solution International for your business needs. Get professional consultancy, IT solutions, and project management services. Reach out to us for startup support and government tender assistance in Bangladesh."
        keywords="contact Safe Solution International, business consultancy contact, IT solutions inquiry, project management contact, startup support Bangladesh, government tender assistance contact"
        url="/contact"
        type="website"
      />
      
      {/* Hero Section with Featured Form */}
      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center text-white mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaEnvelope className="text-blue-400" />
              Get In Touch
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
              Let&apos;s Start Your Project
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Featured Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Send us a Message</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and our team will respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users but visible to bots */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    <span>Message sent successfully! We&apos;ll get back to you within 24 hours.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2">
                    <span>Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}
                
                {/* Rate limit or security errors */}
                {(errors.rateLimit || errors.bot || errors.spam || errors.fastSubmit) && (
                  <div className="bg-orange-50 border border-orange-200 text-orange-800 px-4 py-3 rounded-xl flex items-center gap-2">
                    <FaShieldAlt className="text-orange-600" />
                    <span>
                      {errors.rateLimit || errors.bot || errors.spam || errors.fastSubmit}
                    </span>
                  </div>
                )}

                {/* Form Fields */}
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
                        className={`peer w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 focus:outline-none text-base ${
                          errors[field.name] 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-gray-200 focus:border-blue-500 hover:border-gray-300"
                        }`}
                      />
                      <label
                        htmlFor={field.name}
                        className="absolute left-4 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                      >
                        {field.label}
                      </label>
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 focus:outline-none resize-none text-base ${
                      errors.message 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 focus:border-blue-500 hover:border-gray-300"
                    }`}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Your Message *
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                  )}
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 transition-all"
                    />
                    <span>
                      I have read and accept the{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">
                        Terms of Service & Privacy Policy *
                      </a>
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-red-500 text-sm">{errors.terms}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-lg ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-xl transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-xl" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaArrowRight className="text-lg" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600 text-lg">
              Prefer a different way to connect? Here are all the ways you can reach our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FaPhone,
                title: "Call Us",
                info: "+880 1713-275781",
                description: "Sun-Thu 9am-6pm",
                color: "from-blue-500 to-purple-600",
                action: "tel:+880 1675884842"
              },
              {
                icon: FaEnvelope,
                title: "Email Us",
                info: "info@safesolutionint.com",
                description: "24/7 Support",
                color: "from-green-500 to-teal-600",
                action: "mailto:info@safesolutionint.com"
              },
              {
                icon: FaMapMarkerAlt,
                title: "Visit Us",
                info: "Flat:6/D, MIS Hawlader Mansion, 613 East Kazipara",
                description: "Mirpur-2, Dhaka, Bangladesh",
                color: "from-red-500 to-pink-600",
                action: "https://maps.google.com"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center block hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2 break-words">{contact.info}</p>
                <p className="text-base text-gray-500">{contact.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
