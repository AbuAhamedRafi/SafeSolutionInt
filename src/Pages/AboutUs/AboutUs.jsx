import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { FcBusinessman, FcHome, FcRating, FcStatistics } from "react-icons/fc";

const AboutUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateCount = (target, setter) => {
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.ceil(current));
        }
      }, interval);
    };

    animateCount(200, setEmployeeCount);
    animateCount(1220, setProjectCount);
    animateCount(300, setClientCount);
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      <SectionTitle title="About Us" />

      {/* Main Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video / Image */}
          <div className="relative">
            {!isVideoPlaying ? (
              <>
                <img
                  src="https://castro.jamstacktemplates.dev/assets/img/about/about-3.jpg"
                  alt="About us"
                  className="w-full h-auto rounded-md shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors group"
                  >
                    <span className="text-red-500 group-hover:text-white text-2xl">▶</span>
                  </button>
                </div>
              </>
            ) : (
              <video
                src="/your-video-file.mp4"
                controls
                autoPlay
                className="w-full h-auto rounded-md"
              />
            )}
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-red-500 font-medium mb-2">Welcome to Safe Solution International</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">50 Years of Experience in Industry</h2>
            <p className="text-gray-700 mb-4 font-medium">
              We are ready to build your dream home. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae odit dolorum quis
              laudantium impedit beatae perferendis natus, hic libero sed atque quibusdam possimus error.
            </p>
            <Link
              to="/services"
              className="inline-block bg-red-500 hover:bg-red-500 text-white px-6 py-3 rounded font-medium transition"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section
        className="bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/08/13/43/03/360_F_813430325_TXrckwQPj9GpiuCaYn2YM4P7v0h3OccK.jpg')`,
        }}
      >
        <div className="bg-black/60 py-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white text-center">
            <div className="flex flex-col items-center">
              <FcHome className="text-6xl mb-3" />
              <h3 className="text-3xl font-bold">+{projectCount}</h3>
              <p className="uppercase text-lg mt-1">Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <FcBusinessman className="text-6xl mb-3" />
              <h3 className="text-3xl font-bold">+{clientCount}</h3>
              <p className="uppercase text-lg mt-1">Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <FcStatistics className="text-6xl mb-3" />
              <h3 className="text-3xl font-bold">+{employeeCount}</h3>
              <p className="uppercase text-lg mt-1">Success</p>
            </div>
            <div className="flex flex-col items-center">
              <FcRating className="text-6xl mb-3" />
              <h3 className="text-3xl font-bold">+50</h3>
              <p className="uppercase text-lg mt-1">Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
