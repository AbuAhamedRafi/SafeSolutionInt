import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaCalendarAlt, 
  FaUser, 
  FaEye, 
  FaHeart, 
  FaShare,
  FaClock,
  FaStar,
  FaComments,
  FaAward
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import SEO from "../../components/SEO";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      blog: "Digital Transformation: The Future of Business Operations",
      date: "December 15, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Technology",
      description:
        "Explore how digital transformation is revolutionizing modern business operations and discover the key strategies for successful implementation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60",
      tags: ["Digital", "Business", "Technology"],
      views: "1.2k",
      comments: 24,
      featured: true
    },
    {
      id: 2,
      blog: "Building Sustainable Business Models in 2025",
      date: "December 10, 2024",
      author: "Michael Chen",
      readTime: "7 min read",
      category: "Sustainability",
      description:
        "Learn how successful companies are integrating sustainability into their core business models and creating long-term value.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=60",
      tags: ["Sustainability", "Business Model", "Future"],
      views: "890",
      comments: 18,
      featured: false
    },
    {
      id: 3,
      blog: "The Complete Guide to Government Tender Success",
      date: "December 5, 2024",
      author: "David Rodriguez",
      readTime: "10 min read",
      category: "Government",
      description:
        "A comprehensive guide to navigating government tenders, from documentation to submission strategies that win contracts.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=60",
      tags: ["Government", "Tenders", "Business"],
      views: "2.1k",
      comments: 42,
      featured: true
    },
    {
      id: 4,
      blog: "Cybersecurity Best Practices for Growing Businesses",
      date: "November 28, 2024",
      author: "Emily Zhang",
      readTime: "6 min read",
      category: "Security",
      description:
        "Essential cybersecurity strategies every growing business needs to implement to protect their digital assets and customer data.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",
      tags: ["Cybersecurity", "Business", "Protection"],
      views: "1.5k",
      comments: 31,
      featured: false
    },
    {
      id: 5,
      blog: "Effective HR Strategies for Startup Success",
      date: "November 20, 2024",
      author: "Rachel Thompson",
      readTime: "8 min read",
      category: "Human Resources",
      description:
        "Discover proven HR strategies that help startups attract, retain, and develop top talent while building a strong company culture.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60",
      tags: ["HR", "Startup", "Talent"],
      views: "967",
      comments: 15,
      featured: false
    },
    {
      id: 6,
      blog: "Brand Identity: Creating a Memorable Business Presence",
      date: "November 15, 2024",
      author: "Alex Morgan",
      readTime: "9 min read",
      category: "Branding",
      description:
        "Master the art of brand identity creation with expert tips on logo design, color psychology, and consistent brand messaging.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=60",
      tags: ["Branding", "Design", "Marketing"],
      views: "1.8k",
      comments: 28,
      featured: true
    },
    {
      id: 7,
      blog: "Event Management Excellence: From Planning to Execution",
      date: "November 8, 2024",
      author: "Jennifer Lee",
      readTime: "11 min read",
      category: "Events",
      description:
        "Learn the secrets of successful event management, from initial planning stages to flawless execution and post-event analysis.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=60",
      tags: ["Events", "Management", "Planning"],
      views: "743",
      comments: 12,
      featured: false
    },
    {
      id: 8,
      blog: "Smart Travel Management for Business Growth",
      date: "November 3, 2024",
      author: "Carlos Santos",
      readTime: "6 min read",
      category: "Travel",
      description:
        "Optimize your business travel with cost-effective strategies, booking tips, and travel management solutions for modern companies.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=60",
      tags: ["Travel", "Business", "Efficiency"],
      views: "654",
      comments: 9,
      featured: false
    },
    {
      id: 9,
      blog: "AI and Machine Learning in Business Analytics",
      date: "October 28, 2024",
      author: "Dr. Priya Patel",
      readTime: "12 min read",
      category: "Technology",
      description:
        "Explore how AI and machine learning are transforming business analytics and providing unprecedented insights for data-driven decisions.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60",
      tags: ["AI", "Analytics", "Machine Learning"],
      views: "2.3k",
      comments: 56,
      featured: true
    }
  ];

  const featuredBlogs = blogData.filter(blog => blog.featured);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      <SEO 
        title="Blog - Safe Solution International | Latest Insights & Industry News"
        description="Stay updated with the latest insights on business solutions, digital transformation, IT infrastructure, startup tips, and industry trends from Safe Solution International experts."
        keywords="business blog Bangladesh, digital transformation insights, startup tips, IT infrastructure guides, business solutions articles, industry trends Bangladesh, Safe Solution International blog"
        url="/blog"
        type="website"
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Enhanced Section Title */}
        <div className="pt-16 pb-8">
          <SectionTitle title="Our Blog" />
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest trends, insights, and expert advice to help your business thrive in today&apos;s competitive landscape.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              Featured Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredBlogs.slice(0, 2).map((blog) => (
              <div
                key={blog.id}
                className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Featured
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white/90 backdrop-blur-sm text-gray-600 px-2 md:px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {blog.category}
                </div>

                <div className="relative">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={blog.image}
                      alt={blog.blog}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-4">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <FaEye />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <FaHeart />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <FaShare />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span className="hidden xs:inline">{blog.date}</span>
                        <span className="xs:hidden">{blog.date.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUser className="text-xs" />
                        <span className="truncate max-w-24 xs:max-w-none">{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight line-clamp-2">
                      {blog.blog}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3">
                      {blog.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats and Read More */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaEye className="text-xs" />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaComments className="text-xs" />
                          <span>{blog.comments}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog_details/${blog.id}`}
                        className="group/btn inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-sm transition-colors duration-300"
                      >
                        Read More
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">All Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {blog.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                    Featured
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-600 px-2 py-1 rounded-full text-xs font-semibold z-10">
                  {blog.category}
                </div>

                <div className="relative z-10">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={blog.image}
                      alt={blog.blog}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    {/* Meta Information */}
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight line-clamp-2">
                      {blog.blog}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats and Read More */}
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaEye className="text-xs" />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaComments className="text-xs" />
                          <span>{blog.comments}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog_details/${blog.id}`}
                        className="group/btn inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-xs transition-colors duration-300"
                      >
                        Read More
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center p-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl text-white">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaAward className="text-sm" />
                Stay Updated
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Never Miss Our Latest Insights
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest business insights, tips, and strategies delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-500 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Subscribe Newsletter
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
