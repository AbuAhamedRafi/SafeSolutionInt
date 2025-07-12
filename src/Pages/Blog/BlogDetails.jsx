import { FaTags, FaCalendarAlt, FaUser, FaShare, FaEye, FaComment, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams(); // Blog ID from URL - ready for dynamic content implementation
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaTags className="text-blue-400" />
            Construction & Design
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            Smart Work Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tools and Techniques for Modern Projects
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-400" />
              <span>By Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-400" />
              <span>30 October 2019</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-blue-400" />
              <span>2.5k Views</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className="text-blue-400" />
              <span>24 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Image */}
            <div className="relative group">
              <img
                src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                alt="blog"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores voluptatibus dignissimos ullam mollitia quisquam architecto tenetur enim quasi laborum sequi, placeat beatae maiores facilis eligendi ipsum consectetur dolore eveniet.
              </p>
              
              {/* Quote */}
              <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-l-4 border-blue-500 my-8">
                <FaQuoteLeft className="absolute top-4 left-4 text-2xl text-blue-500 opacity-30" />
                <blockquote className="text-lg italic text-gray-700 font-medium pl-8">
                  Smart work is not just about tools, it&apos;s about choosing the right techniques at the right time. Success comes from understanding both the technology and the human element.
                </blockquote>
                <cite className="block text-right text-sm text-blue-600 font-semibold mt-4">- Project Manager</cite>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque saepe vitae, sunt quas aperiam itaque! Dolorem aliquam asperiores eaque. Aut doloremque, sed voluptatem vel quidem, alias commodi culpa, suscipit omnis dolorem vero! Ad doloremque eligendi maiores atque esse nihil!
              </p>

              {/* Key Points */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  {[
                    "Strategic planning reduces project complexity by 40%",
                    "Modern tools enhance team collaboration efficiency", 
                    "Automated workflows save up to 60% of manual work",
                    "Data-driven decisions improve project success rates"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share Section */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <FaShare />
                    Share
                  </button>
                </div>
                <Link 
                  to="/blog"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Back to Blog
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">Categories</h2>
              <ul className="space-y-3">
                {[
                  { name: "General Construction", count: 12 },
                  { name: "Equipment Installation", count: 8 },
                  { name: "Material Transport", count: 15 },
                  { name: "Architectural Design", count: 6 },
                  { name: "Painting & Finishing", count: 9 },
                  { name: "Plumbing Services", count: 11 },
                  { name: "Urban Development", count: 7 },
                ].map((category, index) => (
                  <li
                    key={index}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <FaTags className="text-blue-500 group-hover:text-blue-600 transition-colors" />
                      <span className="text-gray-700 group-hover:text-gray-800 font-medium">{category.name}</span>
                    </div>
                    <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-600 px-2 py-1 rounded-full text-xs font-medium transition-colors">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">Popular Posts</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Modern Construction Techniques",
                    date: "May 16, 2024",
                    views: "1.2k",
                    image: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                  },
                  {
                    title: "Sustainable Building Materials",
                    date: "April 28, 2024",
                    views: "980",
                    image: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                  },
                  {
                    title: "Project Management Tools",
                    date: "April 15, 2024",
                    views: "2.1k",
                    image: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                  }
                ].map((post, idx) => (
                  <div
                    key={idx}
                    className="group flex gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 cursor-pointer transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                      <img
                        src={post.image}
                        className="w-16 h-16 object-cover group-hover:scale-110 transition-transform duration-300"
                        alt="Popular"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 leading-tight mb-2 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-blue-400" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaEye className="text-blue-400" />
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6 text-sm">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 2, title: "Advanced Project Management Strategies", category: "Management" },
              { id: 3, title: "Sustainable Building Materials", category: "Environment" },
              { id: 4, title: "Digital Construction Technologies", category: "Technology" }
            ].map((article, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Related"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      May 20, 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye />
                      1.5k
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover cutting-edge approaches to project management that drive success...
                  </p>
                  <Link
                    to={`/blog_details/${article.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Read More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get expert guidance and world-class solutions for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started Today
                <FaArrowRight />
              </Link>
              <Link
                to="/service"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
