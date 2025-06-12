const services = [
  {
    title: "Duis fermentum",
    desc: "Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.",
    image:
      "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
  },
  {
    title: "Lorem Ipsum",
    desc: "Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.",
    image:
      "https://images.overdrive.in/wp-content/odgallery/2022/08/63809_2022_Royal_Enfield_Hunter_350_468x263.jpg",
  },
  {
    title: "Etiam rhoncus",
    desc: "Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.",
    image:
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    title: "Duis fermentum",
    desc: "Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.",
    image:
      "https://www.iphotography.com/wp-content/uploads/2023/06/Best-Cameras-for-Professional-Photography-6.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-24">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
            Our Services
          </h1>
          <a
            href="#"
            className="text-red-500 font-semibold hover:underline flex items-center gap-1"
          >
            SEE ALL →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
