import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const services = [
  {
    title: "Startup Consultancy",
    desc: "From business planning to legal entity registration, we help lay a solid foundation for your venture.",
    image: "public/images/consultency.jpeg",
  },
  {
    title: "IT Infrastructure & Support",
    desc: "We provide full-scale IT services—from networking and cybersecurity to cloud-based systems and daily support.",
    image: "",
  },
  {
    title: "Transportation & Logistics",
    desc: "We manage all your startup's logistical needs including warehousing, last-mile delivery, and fleet solutions.",
    image: "https://images.unsplash.com/photo-1585128792020-8f42b17a7d62?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Government Tender Assistance",
    desc: "We guide you through documentation, bidding, and compliance to win government projects with confidence.",
    image: "https://images.unsplash.com/photo-1627471428132-76f7f96f4c6e?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Branding & Identity",
    desc: "From logo design to complete brand strategy, we craft a compelling identity that reflects your mission.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Digital Marketing",
    desc: "Reach your audience through SEO, social media, PPC, and content campaigns tailored to your goals.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "HR & Recruitment Services",
    desc: "We help you hire, onboard, and manage the best talent with scalable HR solutions tailored to startups.",
    image: "https://images.unsplash.com/photo-1581090700227-4c4cce0631f0?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Finance & Accounting",
    desc: "From bookkeeping and payroll to fundraising support, we handle your numbers while you build your business.",
    image: "https://images.unsplash.com/photo-1588776814546-ec7f4a08f1ba?auto=format&fit=crop&w=800&q=60",
  },
];


export default function ServicesSection() {

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
            Our Services
          </h1>
          <a
            href="/service"
            className="text-red-500 font-semibold hover:underline flex items-center gap-1"
          >
            SEE ALL →
          </a>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mb-12"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mb-4 h-40 w-full -mt-7 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                <button className="border border-red-500 text-red-500 rounded-lg py-1 text-sm font-medium hover:bg-red-500 hover:text-white transition">
                  SEE DETAIL
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
