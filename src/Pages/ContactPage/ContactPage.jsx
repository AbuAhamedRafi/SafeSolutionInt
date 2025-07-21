import { useState, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaRocket, FaShieldAlt, FaArrowRight, FaSpinner } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailjs';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {[
            {
              icon: FaPhone,
              title: "Call Us",
              info: "+880 1713-275781",
              description: "Sun-Thu 9am-6pm",
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
              info: "Flat:6/D, MIS Hawlader Mansion, 613 East Kazipara",
              description: "Mirpur-2,Dhaka, Bangladesh",
              color: "from-red-500 to-pink-600"
            }
          ].map((contact, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center">
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="text-xl md:text-2xl text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
              <p className="text-base md:text-lg font-semibold text-gray-700 mb-1 break-words">{contact.info}</p>
              <p className="text-sm md:text-base text-gray-500">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                      className={`peer w-full px-3 md:px-4 py-3 border-2 rounded-xl bg-gray-50 focus:bg-white transition-colors focus:outline-none text-sm md:text-base ${
                        errors[field.name] 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute left-3 md:left-4 top-3 text-gray-500 transition-all text-sm md:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      {field.label}
                    </label>
                    {errors[field.name] && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
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
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight />
                    </>
                  )}
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
