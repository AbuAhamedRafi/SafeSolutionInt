import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    id: 1,
    title: "Startup Consultancy",
    desc: "From business planning to legal entity registration, we help lay a solid foundation for your venture.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "IT Infrastructure & Support",
    desc: "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Transportation & Logistics",
    desc: "We manage all your startup's logistical needs including warehousing, last-mile delivery, and fleet solutions.",
    image: "https://images.unsplash.com/photo-1585128792020-8f42b17a7d62?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Government Tender Assistance",
    desc: "We guide you through documentation, bidding, and compliance to win government projects with confidence.",
    image: "https://images.unsplash.com/photo-1627471428132-76f7f96f4c6e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "HR & Recruitment Services",
    desc: "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups.",
    image: "https://images.unsplash.com/photo-1581090700227-4c4cce0631f0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Branding & Identity",
    desc: "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    title: "Event Management",
    desc: "Professional event planning and management services to make your corporate events memorable and successful.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    title: "Air Ticketing & Travel Services",
    desc: "Complete travel solutions including air ticketing, hotel bookings, and travel planning for business trips.",
    image: "https://images.unsplash.com/photo-1588776814546-ec7f4a08f1ba?auto=format&fit=crop&w=800&q=60",
  },
];


export default function ServicesSection() {
  const customStyles = `
    .services-swiper {
      padding-bottom: 50px;
    }
    
    .services-swiper .swiper-pagination {
      bottom: 0 !important;
    }
    
    .services-swiper .swiper-pagination-bullet {
      background: #ef4444 !important;
      opacity: 0.3 !important;
      width: 12px !important;
      height: 12px !important;
      transition: all 0.3s ease !important;
    }
    
    .services-swiper .swiper-pagination-bullet-active {
      opacity: 1 !important;
      transform: scale(1.3) !important;
      background: linear-gradient(45deg, #ef4444, #f97316) !important;
    }
    
    .services-swiper .swiper-button-next,
    .services-swiper .swiper-button-prev {
      color: #ef4444 !important;
      font-weight: bold !important;
      background: white !important;
      border-radius: 50% !important;
      width: 50px !important;
      height: 50px !important;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
      transition: all 0.3s ease !important;
    }
    
    .services-swiper .swiper-button-next:hover,
    .services-swiper .swiper-button-prev:hover {
      background: linear-gradient(45deg, #ef4444, #f97316) !important;
      color: white !important;
      transform: scale(1.1) !important;
    }
    
    .services-swiper .swiper-button-next:after,
    .services-swiper .swiper-button-prev:after {
      font-size: 18px !important;
    }

    @keyframes serviceFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    
    .service-card:hover {
      animation: serviceFloat 2s ease-in-out infinite;
    }
  `;

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaStar className="text-sm" />
            Premium Services
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Services
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive solutions designed to accelerate your business growth and ensure lasting success in today&apos;s competitive landscape.
          </p>

          <Link
            to="/service"
            className="group inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-600 transition-colors duration-300"
          >
            View All Services
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="services-swiper"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="service-card group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col h-[480px] border border-gray-100 hover:border-red-200 relative overflow-hidden">
                
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Service Number Badge */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {i + 1}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl h-48 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <FaCheckCircle className="text-green-500 text-xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-sm">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <Link 
                      to={`/service_details/${service.id}`}
                      className="group/btn relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl py-3 px-6 font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-auto overflow-hidden"
                    >
                      <span className="relative z-10">See Details</span>
                      <FaArrowRight className="relative z-10 group-hover/btn:translate-x-1 transition-transform text-xs" />
                      
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Let&apos;s discuss how our comprehensive services can accelerate your growth and success.
          </p>
          <button className="bg-white text-red-500 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
