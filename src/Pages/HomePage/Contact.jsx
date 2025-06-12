import { Link } from "react-router-dom";

const Contact = () => {
  return (
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
  );
};

export default Contact;
