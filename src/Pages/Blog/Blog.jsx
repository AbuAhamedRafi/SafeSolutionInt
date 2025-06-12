import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      blog: "Smart Work Management: Tools and Techniques for Modern Projects",
      date: "January 4, 2025",
      description:
        "Manage and organize your projects effectively with real-time updates and smart tools.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-4.jpg",
    },
    {
      id: 2,
      blog: "Home Renovation Tips: How to Upgrade Your Space with Style",
      date: "January 4, 2025",
      description:
        "Professional home improvement services with quality craftsmanship and timely delivery.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-3.jpg",
    },
    {
      id: 3,
      blog: "Plumbing Problems Solved: Expert Solutions for Every Home",
      date: "January 4, 2025",
      description:
        "Expert plumbing services for homes and businesses, available 24/7.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-2.jpg",
    },
    {
      id: 4,
      blog: "Electrical Repair Made Easy: Safe and Reliable Services",
      date: "January 4, 2025",
      description:
        "Certified electricians offering reliable and safe repair services.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg",
    },
    {
      id: 5,
      blog: "Say Goodbye to Pests: Long-Term, Eco-Friendly Pest Control",
      date: "January 4, 2025",
      description:
        "Eco-friendly pest removal with guaranteed long-term protection.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-5.jpg",
    },
    {
      id: 6,
      blog: "Deep Cleaning Done Right: Sparkling Homes and Offices",
      date: "January 4, 2025",
      description:
        "Professional cleaning for residential and commercial spaces.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-6.jpg",
    },
    {
      id: 7,
      blog: "Transform Your Garden: Landscaping Ideas That Impress",
      date: "January 4, 2025",
      description:
        "Transform your outdoor space with our expert landscaping team.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg",
    },
    {
      id: 8,
      blog: "Complete Guide to Home Security: From CCTV to Smart Systems",
      date: "January 4, 2025",
      description:
        "Install CCTV, alarms, and security systems with professional support.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-2.jpg",
    },
    {
      id: 9,
      blog: "Painting Like a Pro: Color Ideas and Interior Inspiration",
      date: "January 4, 2025",
      description:
        "Interior and exterior painting by skilled professionals using top-grade materials.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-3.jpg",
    },
    {
      id: 10,
      blog: "Fix It Fast: Reliable Appliance Repair Services You Can Trust",
      date: "January 4, 2025",
      description:
        "Affordable repair for your electronics and household appliances.",
      image:
        "https://castro.jamstacktemplates.dev/assets/img/service/service-details-4.jpg",
    },
  ];

  return (
    <div className="">
      <SectionTitle title="Blog" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 max-w-7xl mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.blog}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 group-hover:bg-black/20 transition duration-500 group-hover:scale-105"></div>
            </div>

            {/* Text */}
            <div className="p-5 space-y-3 bg-white">
              <p className="text-gray-500 font-semibold text-sm">{blog.date}</p>
              <Link
                to="/blog_details"
                className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-red-500 transition-colors"
              >
                {blog.blog}
              </Link>
              <p className="text-gray-600">{blog.description}</p>
              <Link
                to="/blog_details"
                className="font-semibold text-red-700 uppercase text-sm hover:underline"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
