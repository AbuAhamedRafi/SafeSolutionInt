const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/blue-skyline-with-modern-construction-site-silhouettes-building-with-scaffolds_88272-8833.jpg?semt=ais_hybrid&w=740')",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center p-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Safe Solution International</h1>
          <p className="text-lg md:text-xl my-6 md:my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos,
            voluptatem rerum, tenetur iusto magni quia doloribus dicta atque facere
            pariatur consequatur itaque? Praesentium itaque neque nulla provident at,
            voluptatibus.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <button className="px-10 py-2 border bg-red-500/50 border-red-500  rounded hover:bg-red-500 text-white transform duration-500 hover:scale-105">
              See Detail
            </button>
          </div>
        </div>
        {/* <div className="p-5">Optional Right Side Content</div> */}
      </div>
    </section>
  );
};

export default Hero;
