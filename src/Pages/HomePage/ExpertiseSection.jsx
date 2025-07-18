import { useState, useEffect } from "react";
import {
    FaLightbulb,
    FaServer,
    FaTruck,
    FaFileContract,
    FaUsers,
    FaPalette,
    FaCalendarAlt,
    FaCheckCircle,
    FaEye,
    FaEdit,
} from "react-icons/fa";

// Icons matching the services offered
const iconsLeft = [
    { icon: <FaLightbulb />, color: "bg-blue-100 text-blue-600", label: "Startup Consultancy" },
    { icon: <FaServer />, color: "bg-green-100 text-green-600", label: "IT Infrastructure" },
    { icon: <FaTruck />, color: "bg-orange-100 text-orange-600", label: "Transportation" },
    { icon: <FaFileContract />, color: "bg-purple-100 text-purple-600", label: "Government Tenders" },
    { icon: <FaUsers />, color: "bg-pink-100 text-pink-600", label: "HR Services" },
    { icon: <FaPalette />, color: "bg-indigo-100 text-indigo-600", label: "Branding" },
    { icon: <FaCalendarAlt />, color: "bg-red-100 text-red-600", label: "Event Management" },
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

const ExpertiseSection = () => {
    // Mobile detection and responsive handling
    const [isMobile, setIsMobile] = useState(false);
    const [orbitRadius, setOrbitRadius] = useState(185);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            // Set radius based on screen size
            if (window.innerWidth < 640) {
                setOrbitRadius(130);
            } else if (window.innerWidth < 768) {
                setOrbitRadius(150);
            } else {
                setOrbitRadius(185);
            }
        };

        checkMobile();
        const handleResize = () => {
            // Debounce resize events
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(checkMobile, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(window.resizeTimeout);
        };
    }, []);

    const animationKeyframes = `
        @keyframes orbitRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes counterRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
        
        @keyframes iconFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            25% { transform: translateY(-5px) scale(1.05); }
            50% { transform: translateY(-10px) scale(1.1); }
            75% { transform: translateY(-5px) scale(1.05); }
        }
        
        @keyframes iconPulse {
            0%, 100% { 
                box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
                border-color: rgba(255, 255, 255, 0.5);
            }
            50% { 
                box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
                border-color: rgba(255, 255, 255, 0.8);
            }
        }
        
        @keyframes iconGlow {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4)); }
            50% { filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)); }
        }
        
        @keyframes diamondPulse {
            0%, 100% { transform: rotate(45deg) scale(1); }
            50% { transform: rotate(45deg) scale(1.03); }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        .orbit-container {
            animation: orbitRotate 25s linear infinite;
            will-change: transform;
        }
        
        .orbit-item {
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: 0 0;
        }
        
        .floating-icon {
            animation: iconFloat 4s ease-in-out infinite, iconGlow 3s ease-in-out infinite;
            position: relative;
            transform: translate(-50%, -50%);
            will-change: transform;
        }
        
        .icon-content {
            animation: counterRotate 25s linear infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            will-change: transform;
        }
        
        .floating-icon::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: inherit;
            padding: 3px;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            background-size: 200% 200%;
            animation: shimmer 4s linear infinite;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask-composite: xor;
        }
        
        .floating-icon:hover {
            animation: iconFloat 2s ease-in-out infinite, iconPulse 2s ease-in-out infinite;
        }
        
        .floating-icon:nth-child(1) { animation-delay: 0s; }
        .floating-icon:nth-child(2) { animation-delay: 0.4s; }
        .floating-icon:nth-child(3) { animation-delay: 0.8s; }
        .floating-icon:nth-child(4) { animation-delay: 1.2s; }
        .floating-icon:nth-child(5) { animation-delay: 1.6s; }
        .floating-icon:nth-child(6) { animation-delay: 2.0s; }
        .floating-icon:nth-child(7) { animation-delay: 2.4s; }
        
        .diamond-outer {
            animation: diamondPulse 6s ease-in-out infinite;
            will-change: transform;
        }
        
        .stats-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stats-card:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .feature-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card:hover {
            transform: translateX(8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 767px) {
            .orbit-container {
                animation-duration: 35s;
            }
            
            .icon-content {
                animation-duration: 35s;
            }
            
            .floating-icon {
                animation: iconFloat 6s ease-in-out infinite;
            }
            
            .floating-icon::before {
                display: none;
            }
            
            .feature-card:hover {
                transform: translateX(4px);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            }
            
            .stats-card:hover {
                transform: translateY(-4px) scale(1.02);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
            }
            
            .diamond-outer {
                animation-duration: 8s;
            }
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-4 sm:px-8 overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: animationKeyframes }} />
            
            {/* Enhanced background decorative elements - optimized for mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-24 -right-24 ${isMobile ? 'w-60 h-60' : 'w-96 h-96'} bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl animate-pulse`}></div>
                <div className={`absolute -bottom-24 -left-24 ${isMobile ? 'w-60 h-60' : 'w-96 h-96'} bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
                
                {/* Floating particles - reduced for mobile */}
                {[...Array(isMobile ? 3 : 6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-red-400/30 rounded-full animate-ping"
                        style={{
                            top: `${20 + (i * 15)}%`,
                            left: `${10 + (i * 12)}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: '3s'
                        }}
                    ></div>
                ))}
                
                {/* Additional geometric shapes */}
                <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-orange-300/30 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-blue-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
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

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left section - Diamond with orbiting icons */}
                    <div className="relative flex items-center justify-center order-1 lg:order-1">
                        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]">
                            {/* Outer diamond with enhanced gradient and pulse */}
                            <div className="diamond-outer absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rotate-45 rounded-3xl shadow-2xl opacity-90">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl"></div>
                            </div>
                            
                            {/* Middle diamond with glass effect */}
                            <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rotate-45 rounded-3xl shadow-xl border-4 border-white/30" />
                            
                            {/* Inner diamond with enhanced styling */}
                            <div className="absolute inset-8 sm:inset-10 md:inset-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 rotate-45 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-gray-200/50">
                                <div className="text-center rotate-[-45deg]">
                                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our</div>
                                    <div className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                        Expertise
                                    </div>
                                    <div className="mt-2 w-8 md:w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto"></div>
                                </div>
                            </div>
                            
                            {/* Orbiting container with proper icon positioning */}
                            <div className="orbit-container absolute inset-0">
                                {/* Service icons orbiting around the center */}
                                {iconsLeft.map((item, i) => {
                                    const angle = (360 / iconsLeft.length) * i;
                                    return (
                                        <div
                                            key={i}
                                            className="orbit-item"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`,
                                            }}
                                        >
                                            <div
                                                className={`floating-icon w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl shadow-xl border-2 border-white/60 ${item.color} backdrop-blur-sm cursor-pointer group relative overflow-hidden`}
                                                title={item.label}
                                            >
                                                <div className="icon-content">
                                                    <div className="text-lg sm:text-xl group-hover:scale-125 transition-transform duration-300 relative z-10">
                                                        {item.icon}
                                                    </div>
                                                </div>
                                                
                                                {/* Ripple effect on hover */}
                                                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/30 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-110 transition-all duration-300"></div>
                                                
                                                {/* Service label tooltip */}
                                                <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                                                    {item.label}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            {/* Enhanced decorative orbit rings - simplified for mobile */}
                            {!isMobile && (
                                <>
                                    <div className="absolute inset-[-30px] border-2 border-blue-200/40 rounded-full animate-spin opacity-60" style={{ animationDuration: '40s' }}></div>
                                    <div className="absolute inset-[-60px] border border-purple-200/30 rounded-full animate-spin opacity-40" style={{ animationDuration: '60s', animationDirection: 'reverse' }}></div>
                                </>
                            )}
                            <div className="absolute inset-[-90px] border border-red-200/20 rounded-full animate-spin opacity-30" style={{ animationDuration: isMobile ? '60s' : '80s' }}></div>
                        </div>
                    </div>

                    {/* Right content - Enhanced Features */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
                        <div className="grid gap-4 md:gap-6">
                            {features.map((item, i) => (
                                <div
                                    key={i}
                                    className="feature-card group flex gap-4 md:gap-6 items-start bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6 hover:border-red-200 relative overflow-hidden"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    {/* Sliding background effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-orange-50/50 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                    
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 relative z-10 shadow-md">
                                        <div className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    </div>
                                    <div className="flex-grow relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                            <h4 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <div className="text-xs md:text-sm font-semibold text-red-500 bg-red-50 px-2 md:px-3 py-1 rounded-full group-hover:bg-red-100 group-hover:scale-105 transition-all duration-300 self-start sm:self-auto">
                                                {item.stat}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
