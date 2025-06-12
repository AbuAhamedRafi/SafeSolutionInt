import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';

const Projects = () => {
    const projectsData = [
      {
        id: 1,
        title: "Work Management",
        description:
          "Manage and organize your projects effectively with real-time updates and smart tools.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-4.jpg"
      },
      {
        id: 2,
        title: "Home Renovation",
        description:
          "Professional home improvement services with quality craftsmanship and timely delivery.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-3.jpg"
      },
      {
        id: 3,
        title: "Plumbing Solutions",
        description:
          "Expert plumbing services for homes and businesses, available 24/7.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-2.jpg"
      },
      {
        id: 4,
        title: "Electrical Repair",
        description:
          "Certified electricians offering reliable and safe repair services.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
      },
      {
        id: 5,
        title: "Pest Control",
        description:
          "Eco-friendly pest removal with guaranteed long-term protection.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-5.jpg"
      },
      {
        id: 6,
        title: "Cleaning Services",
        description:
          "Professional cleaning for residential and commercial spaces.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-6.jpg"
      },
      {
        id: 7,
        title: "Gardening & Landscaping",
        description:
          "Transform your outdoor space with our expert landscaping team.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
      },
      {
        id: 8,
        title: "Security Installation",
        description:
          "Install CCTV, alarms, and security systems with professional support.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-2.jpg"
      },
      {
        id: 9,
        title: "Painting Service",
        description:
          "Interior and exterior painting by skilled professionals using top-grade materials.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-3.jpg"
      },
      {
        id: 10,
        title: "Appliance Repair",
        description:
          "Affordable repair for your electronics and household appliances.",
        image:
          "https://castro.jamstacktemplates.dev/assets/img/service/service-details-4.jpg"
      },
    ];
  
    return (
      <div>
        <SectionTitle title="Our Projects" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden p-1 relative transition-all duration-300"
            >
              {/* Image with zoom */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              {/* Text */}
              <div className="py-3 space-y-3">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p>{project.description}</p>
                <Link to='/project_details' className="font-bold underline uppercase group-hover:text-red-500 transition-colors duration-300">
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Projects;