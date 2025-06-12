import { useEffect, useState } from "react";
import {
  FaTools,
  FaHardHat,
  FaTruckMoving,
  FaDraftingCompass,
  FaPaintRoller,
  FaWrench,
  FaCity,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const imagesData = [
  { id: 1, url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg" },
  { id: 2, url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-2.jpg" },
  { id: 3, url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-3.jpg" },
  { id: 4, url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-4.jpg" },
  { id: 5, url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-5.jpg" },
];

const ServiceDetails = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imagesData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imagesData.length) % imagesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <SectionTitle title="Service Details" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {/* Sidebar */}
        <div className="bg-base-200 p-5 rounded-lg">
          <h2 className="text-lg font-bold pb-5">Services</h2>
          <ul className="space-y-3 text-sm">
            <li className="border-b border-gray-300 p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaHardHat /> General Construction
            </li>
            <li className="border-b border-gray-300 p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaTools /> Equipment Installation
            </li>
            <li className="border-b border-gray-300 p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaTruckMoving /> Material Transport
            </li>
            <li className="border-b border-gray-300 p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaDraftingCompass /> Architectural Design
            </li>
            <li className="border-b border-gray-300 p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaPaintRoller /> Painting & Finishing
            </li>
            <li className="border-b border-gray-300 p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaWrench /> Plumbing Services
            </li>
            <li className="p-2 hover:text-red-500 cursor-pointer flex items-center gap-2">
              <FaCity /> Urban Development
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Image Carousel */}
          <div className="relative w-full overflow-hidden group rounded-lg">
            <img
              src={imagesData[current].url}
              alt={`Slide ${current + 1}`}
              className="w-full h-[250px] md:h-[400px] object-cover transition duration-700 ease-in-out"
            />

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full opacity-70 hover:opacity-100 transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full opacity-70 hover:opacity-100 transition"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Construction</h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error id ipsa atque unde quis dolore nobis eum aperiam enim blanditiis pariatur inventore eius commodi consectetur ut. Totam, assumenda!
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
              {Array(4).fill(0).map((_, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-bold mb-1">Lorem, ipsum dolor.</h2>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem omnis cum veritatis sit ducimus.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
