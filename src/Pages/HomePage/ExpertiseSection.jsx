import {
    FaRocket,
    FaCog,
    FaShieldAlt,
    FaUsers,
    FaChartLine,
    FaGlobe,
    FaBullseye,
    FaCheckCircle,
    FaEye,
    FaEdit,
    FaLightbulb,
    FaArrowRight,
    FaAward,
    FaClock,
} from "react-icons/fa";

const iconsLeft = [
    { icon: <FaRocket />, color: "bg-red-100 text-red-600" },
    { icon: <FaCog />, color: "bg-blue-100 text-blue-600" },
    { icon: <FaShieldAlt />, color: "bg-green-100 text-green-600" },
    { icon: <FaUsers />, color: "bg-purple-100 text-purple-600" },
    { icon: <FaChartLine />, color: "bg-orange-100 text-orange-600" },
    { icon: <FaGlobe />, color: "bg-cyan-100 text-cyan-600" },
    { icon: <FaBullseye />, color: "bg-yellow-100 text-yellow-600" },
];

const features = [
    {
        icon: <FaCheckCircle className="text-green-600" />,
        title: "Proven Expertise",
        desc: "Our team brings years of experience and a track record of successful projects across industries.",
        stat: "500+ Projects",
    },
    {
        icon: <FaEye className="text-blue-600" />,
        title: "Transparent Process",
        desc: "We keep you informed at every step, ensuring clarity and confidence in project delivery.",
        stat: "100% Transparency",
    },
    {
        icon: <FaEdit className="text-purple-600" />,
        title: "Tailored Solutions",
        desc: "Every project is unique. We adapt our approach to fit your specific goals and requirements.",
        stat: "Custom Approach",
    },
    {
        icon: <FaLightbulb className="text-orange-500" />,
        title: "Innovative Thinking",
        desc: "We leverage the latest technologies and creative strategies to drive your business forward.",
        stat: "Cutting-Edge Tech",
    },
];

const stats = [
    {
        icon: <FaAward className="text-yellow-500" />,
        number: "150+",
        label: "Awards Won",
    },
    {
        icon: <FaUsers className="text-blue-500" />,
        number: "5000+",
        label: "Happy Clients",
    },
    {
        icon: <FaClock className="text-green-500" />,
        number: "10+",
        label: "Years Experience",
    },
    {
        icon: <FaGlobe className="text-purple-500" />,
        number: "50+",
        label: "Countries Served",
    },
];

const ExpertiseSection = () => {
    // Custom styles for floating animation
    const floatingKeyframes = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .floating-icon {
            animation: float 3s ease-in-out infinite;
        }
        .floating-icon:nth-child(1) { animation-delay: 0s; }
        .floating-icon:nth-child(2) { animation-delay: 0.5s; }
        .floating-icon:nth-child(3) { animation-delay: 1s; }
        .floating-icon:nth-child(4) { animation-delay: 1.5s; }
        .floating-icon:nth-child(5) { animation-delay: 2s; }
        .floating-icon:nth-child(6) { animation-delay: 2.5s; }
        .floating-icon:nth-child(7) { animation-delay: 3s; }
    `;

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-4 sm:px-8 overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: floatingKeyframes }} />
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <FaAward className="text-sm" />
                        World-Class Expertise
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
                        Build Your Vision With a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            World-Class Team
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Transform your ideas into reality with our comprehensive expertise. We combine innovation, 
                        experience, and cutting-edge technology to deliver exceptional results that exceed expectations.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                                <div className="text-2xl">{stat.icon}</div>
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left section - Diamond with icons */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-[380px] h-[380px]">
                            {/* Outer diamond with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rotate-45 rounded-3xl shadow-2xl opacity-90" />
                            {/* Middle diamond */}
                            <div className="absolute inset-4 bg-white rotate-45 rounded-3xl shadow-xl border-4 border-white/20" />
                            {/* Inner diamond */}
                            <div className="absolute inset-12 bg-gradient-to-br from-gray-50 to-white rotate-45 rounded-2xl flex items-center justify-center shadow-lg">
                                <div className="text-center rotate-[-45deg]">
                                    <div className="text-3xl font-bold text-gray-900 mb-2">Our</div>
                                    <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                        Expertise
                                    </div>
                                </div>
                            </div>
                            {/* Floating icons with enhanced animation */}
                            {iconsLeft.map((item, i) => (
                                <div
                                    key={i}
                                    className={`floating-icon absolute p-4 rounded-2xl shadow-xl border border-white/20 ${item.color} transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm`}
                                    style={{
                                        transform: `rotate(${(360 / iconsLeft.length) * i}deg) translate(160px) rotate(-${(360 / iconsLeft.length) * i}deg)`,
                                    }}
                                >
                                    <div className="text-xl">{item.icon}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right content - Features */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            {features.map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex gap-6 items-start bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-red-200 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="text-2xl">{item.icon}</div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                                                {item.title}
                                            </h4>
                                            <div className="text-sm font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                                                {item.stat}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Get Started Today
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
