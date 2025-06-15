import {
    FaCamera,
    FaPlayCircle,
    FaEnvelope,
    FaStar,
    FaWifi,
    FaSnowflake,
    FaThumbtack,
    FaCheckCircle,
    FaEye,
    FaEdit,
    FaLightbulb,
} from "react-icons/fa";

const iconsLeft = [
    { icon: <FaCamera />, color: "bg-blue-100 text-blue-600" },
    { icon: <FaPlayCircle />, color: "bg-orange-100 text-orange-500" },
    { icon: <FaEnvelope />, color: "bg-indigo-100 text-indigo-600" },
    { icon: <FaStar />, color: "bg-yellow-100 text-yellow-500" },
    { icon: <FaWifi />, color: "bg-cyan-100 text-cyan-600" },
    { icon: <FaSnowflake />, color: "bg-blue-50 text-blue-400" },
    { icon: <FaThumbtack />, color: "bg-pink-100 text-pink-600" },
];

const features = [
    {
        icon: <FaCheckCircle className="text-blue-600" />,
        title: "Proven Expertise",
        desc: "Our team brings years of experience and a track record of successful projects across industries.",
    },
    {
        icon: <FaEye className="text-cyan-600" />,
        title: "Transparent Process",
        desc: "We keep you informed at every step, ensuring clarity and confidence in project delivery.",
    },
    {
        icon: <FaEdit className="text-indigo-600" />,
        title: "Tailored Solutions",
        desc: "Every project is unique. We adapt our approach to fit your specific goals and requirements.",
    },
    {
        icon: <FaLightbulb className="text-yellow-500" />,
        title: "Innovative Thinking",
        desc: "We leverage the latest technologies and creative strategies to drive your business forward.",
    },
];

const ExpertiseSection = () => {
    return (
        <section className="relative bg-white py-20 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-evenly lg:gap-6 gap-8 overflow-hidden border-t border-b border-gray-100">
            {/* Left section */}
            <div className="relative w-full max-w-xs sm:max-w-sm lg:w-[340px] lg:h-[340px] flex items-center justify-center z-10">
                {/* Mobile view - Only text */}
                <div className="block lg:hidden text-center font-extrabold text-3xl sm:text-4xl text-red-400 mb-4">
                    Our Expertise
                </div>
                {/* Desktop view - Diamond with icons */}
                <div className="hidden lg:block relative w-[340px] h-[340px]">
                    {/* Outer diamond */}
                    <div className="absolute inset-0 border-2 border-gray-200 rotate-45 rounded-2xl shadow-md bg-white" />
                    {/* Middle diamond */}
                    <div className="absolute inset-8 border-2 border-blue-100 rotate-45 rounded-2xl bg-white" />
                    {/* Inner diamond */}
                    <div className="absolute inset-16 bg-white rotate-45 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                        <span className="text-red-400 text-2xl font-extrabold tracking-wide rotate-[-45deg]">
                            Our Expertise
                        </span>
                    </div>
                    {/* Floating icons */}
                    {iconsLeft.map((item, i) => (
                        <div
                            key={i}
                            className={`absolute p-3 rounded-full shadow-md border border-gray-100 ${item.color} transition-transform hover:scale-105`}
                            style={{
                                transform: `rotate(${(360 / iconsLeft.length) * i}deg) translate(145px) rotate(-${(360 / iconsLeft.length) * i}deg)`,
                            }}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right content */}
            <div className="w-full max-w-full lg:max-w-2xl z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center lg:text-left text-gray-900">
                    Build Your Vision With a World-Class Team
                </h2>
                <p className="text-gray-700 text-lg sm:text-xl mb-10 text-center lg:text-left max-w-2xl mx-auto">
                    You are entitled to professional consultancy, ready to deliver exceptional results. Our flexible approach ensures you have the right expertise at every stage of your project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="flex gap-4 items-start bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl shrink-0">{item.icon}</div>
                            <div>
                                <h4 className="font-semibold text-lg mb-1 text-gray-900">{item.title}</h4>
                                <p className="text-base text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
