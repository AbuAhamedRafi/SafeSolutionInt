import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "Startup Consultancy",
    desc: "From business planning to legal entity registration, we help lay a solid foundation for your venture.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "IT Infrastructure & Support",
    desc: "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Transportation & Logistics",
    desc: "We manage all your startup's logistical needs including warehousing, last-mile delivery, and fleet solutions.",
    image:
      "https://images.unsplash.com/photo-1585128792020-8f42b17a7d62?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Government Tender Assistance",
    desc: "We guide you through documentation, bidding, and compliance to win government projects with confidence.",
    image:
      "https://images.unsplash.com/photo-1627471428132-76f7f96f4c6e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "HR & Recruitment Services",
    desc: "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups.",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4cce0631f0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Branding & Identity",
    desc: "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    title: "Event Management",
    desc: "Professional event planning and management services to make your corporate events memorable and successful.",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    title: "Air Ticketing & Travel Services",
    desc: "Complete travel solutions including air ticketing, hotel bookings, and travel planning for business trips.",
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7f4a08f1ba?auto=format&fit=crop&w=800&q=60",
  },
];

export default function ServicesSection() {
  const customStyles = `
    .services-swiper {
      padding: 0 3.75rem 1.25rem 3.75rem;
      margin: 0 -3.75rem;
    }
    
    @media (max-width: 768px) {
      .services-swiper {
        padding: 0 0 3rem 0;
        margin: 0;
      }
    }
    
    @media (max-width: 640px) {
      .services-swiper {
        padding: 0 0 3rem 0;
        margin: 0;
      }
    }
    
    @media (max-width: 480px) {
      .services-swiper {
        padding: 0 0 3rem 0;
        margin: 0;
      }
    }
    
    /* Navigation buttons - Desktop only */
    .services-swiper .swiper-button-next,
    .services-swiper .swiper-button-prev {
      color: #ef4444 !important;
      background: rgba(255, 255, 255, 0.95) !important;
      border-radius: 50% !important;
      width: 3.5rem !important;
      height: 3.5rem !important;
      box-shadow: 0 0.5rem 1.25rem rgba(0,0,0,0.1) !important;
      transition: all 0.3s ease !important;
      backdrop-filter: blur(0.625rem) !important;
      border: 1px solid rgba(239, 68, 68, 0.1) !important;
      margin-top: 0 !important;
      z-index: 10 !important;
    }
    
    .services-swiper .swiper-button-next:after,
    .services-swiper .swiper-button-prev:after {
      font-size: 1.25rem !important;
      font-weight: 700 !important;
    }
    
    .services-swiper .swiper-button-next {
      right: 0.5rem !important;
    }
    
    .services-swiper .swiper-button-prev {
      left: 0.5rem !important;
    }
    
    .services-swiper .swiper-button-next:hover,
    .services-swiper .swiper-button-prev:hover {
      background: linear-gradient(45deg, #ef4444, #f97316) !important;
      color: white !important;
      transform: scale(1.05) !important;
      box-shadow: 0 0.75rem 1.875rem rgba(239,68,68,0.4) !important;
    }
    
    /* Hide navigation buttons on mobile */
    @media (max-width: 768px) {
      .services-swiper .swiper-button-next,
      .services-swiper .swiper-button-prev {
        display: none !important;
      }
    }
    
    .services-swiper .swiper-button-disabled {
      opacity: 0.3 !important;
      cursor: not-allowed !important;
    }
    
    /* Pagination - Mobile only */
    .services-swiper .swiper-pagination {
      position: relative !important;
      bottom: auto !important;
      margin-top: 2rem !important;
      display: none !important;
    }
    
    @media (max-width: 768px) {
      .services-swiper .swiper-pagination {
        display: block !important;
      }
    }
    
    .services-swiper .swiper-pagination-bullet {
      background: #d1d5db !important;
      opacity: 1 !important;
      width: 0.75rem !important;
      height: 0.75rem !important;
      margin: 0 0.25rem !important;
      transition: all 0.3s ease !important;
    }
    
    .services-swiper .swiper-pagination-bullet-active {
      background: linear-gradient(45deg, #ef4444, #f97316) !important;
      transform: scale(1.2) !important;
      box-shadow: 0 0.125rem 0.5rem rgba(239, 68, 68, 0.4) !important;
    }
  `;

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Services
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Comprehensive solutions designed to accelerate your business growth
            and ensure lasting success in today&apos;s competitive landscape.
          </p>

          <Link
            to="/service"
            className="group inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
          >
            View All Services
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Services Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="services-swiper"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col h-[400px] border border-gray-100/50 hover:border-red-200 relative overflow-hidden">
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg mb-4 group-hover:transform group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg h-40 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-2 text-sm">
                        {service.desc}
                      </p>
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/service_details/${service.id}`}
                      className="group/btn relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg py-2.5 px-4 font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-auto overflow-hidden"
                    >
                      <span className="relative z-10">See Details</span>
                      <FaArrowRight className="relative z-10 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />

                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
