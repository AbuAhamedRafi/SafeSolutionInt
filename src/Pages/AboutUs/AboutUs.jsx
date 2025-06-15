// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
// import { FcBusinessman, FcHome, FcRating, FcStatistics } from "react-icons/fc";

const AboutUs = () => {
  // const [employeeCount, setEmployeeCount] = useState(0);
  // const [projectCount, setProjectCount] = useState(0);
  // const [clientCount, setClientCount] = useState(0);

  // useEffect(() => {
  //   const duration = 2000;
  //   const steps = 60;
  //   const interval = duration / steps;

  //   const animateCount = (target, setter) => {
  //     let current = 0;
  //     const increment = target / steps;

  //     const timer = setInterval(() => {
  //       current += increment;
  //       if (current >= target) {
  //         setter(target);
  //         clearInterval(timer);
  //       } else {
  //         setter(Math.ceil(current));
  //       }
  //     }, interval);
  //   };

    // animateCount(200, setEmployeeCount);
    // animateCount(1220, setProjectCount);
    // animateCount(300, setClientCount);
  // }, []);


  return (
    <div>
      <SectionTitle title="About Us" />

      {/* Main Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src="public\images\geometric-background-about.jpg"
            alt="About us"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <div>
            <h3 className="text-red-500 font-medium mb-2">Welcome to Safe Solution International</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Services for Startups & Businesses</h2>
            <p className="text-gray-700 mb-4 font-medium">
              We are your one-stop solution for establishing and growing your business. From transportation and IT support to government tenders, we provide end-to-end services to help startups and companies succeed.
            </p>
            <p className="text-gray-600 mb-6">
              Our expert team covers every aspect of your business journey, ensuring seamless operations and reliable support. Whether you need help setting up, managing logistics, or navigating government processes, Safe Solution International is here for you—every step of the way.
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
      <div className="p-4"> 
     <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-12 sm:py-16 rounded-3xl bg-red-500 text-white my-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-center lg:text-left">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Ready to get started?</h1>
        <p className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laborum?
          Maxime sit in quis quo fugiat sint cum iste quisquam!
        </p>
      </div>
      <div>
        <Link
          to="/contact"
          className="inline-block mt-4 lg:mt-0 py-3 px-6 bg-white text-red-500 rounded-2xl font-semibold hover:bg-red-100 transition text-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </div>
   </div>
      {/* <section
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
      </section> */}
    </div>
  );
};

export default AboutUs;
