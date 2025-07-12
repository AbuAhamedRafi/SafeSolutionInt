import { useState, useEffect } from "react";
import { FaUsers, FaProjectDiagram, FaHandshake, FaAward, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const stats = [
    { label: "Team Members", target: 60, icon: <FaUsers className="text-blue-500" /> },
    { label: "Projects Completed", target: 1220, icon: <FaProjectDiagram className="text-green-500" /> },
    { label: "Happy Clients", target: 200, icon: <FaHandshake className="text-purple-500" /> },
    { label: "Awards Won", target: 150, icon: <FaAward className="text-yellow-500" /> },
];

const features = [
    "10+ Years of Excellence",
    "Global Service Coverage", 
    "24/7 Customer Support",
    "Industry-Leading Solutions"
];

const About = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        stats.forEach((stat, idx) => {
            let current = 0;
            const increment = stat.target / steps;
            const timer = setInterval(() => {
                current += increment;
                setCounts(prev => {
                    const updated = [...prev];
                    updated[idx] = current >= stat.target ? stat.target : Math.ceil(current);
                    return updated;
                });
                if (current >= stat.target) clearInterval(timer);
            }, interval);
        });
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                            <FaAward className="text-sm" />
                            About Safe Solution International
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Who{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                We Are
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are a passionate team delivering innovative solutions for businesses worldwide. Our expertise spans multiple industries, and our commitment to excellence drives measurable results for our clients.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Learn More About Us
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <div
                                key={stat.label}
                                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-red-200 transition-all duration-300 text-center relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                                
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    
                                    {/* Number */}
                                    <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                        {counts[idx]}+
                                    </div>
                                    
                                    {/* Label */}
                                    <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-20 text-center">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200 p-8 sm:p-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied clients who have transformed their businesses with our expert solutions and dedicated support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                Get Started Today
                            </button>
                            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
