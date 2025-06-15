const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // a better background image to use for free keep the copmpany description(We are your one-stop solution for establishing and growing your business. From transportation and IT support to government tenders, we provide end-to-end services to help startups and companies succeed.) in mind
          backgroundImage: "url('/images/BG.jpg')",
        }}
      ></div>

      {/* Subtle Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Safe Solution International
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100 font-medium">
            We are your one-stop solution for establishing and growing your business. From transportation and IT support to government tenders, we provide end-to-end services to help startups and companies succeed.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="/about"
              className="px-8 py-2 border border-red-600 bg-transparent rounded shadow-sm hover:bg-red-600 hover:text-white transition-colors duration-300 font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* <div className="p-5">Optional Right Side Content</div> */}
      </div>
    </section>
  );
};

export default Hero;
