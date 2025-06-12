import { useState, useEffect } from "react";

const About = () => {
    const [employeeCount, setEmployeeCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const animateCount = (target, setter) => {
            let current = 0;
            const increment = target / steps;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.ceil(current));
                }
            }, interval);
        };

        animateCount(200, setEmployeeCount);
        animateCount(1220, setProjectCount);
        animateCount(300, setClientCount);
    }, []);

    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Title Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                        About Us
                    </h1>
                </div>

                {/* Description & Counters */}
                <div className="md:col-span-2 space-y-10">
                    <p className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
                        Through our large capacity, we dare to say we are different. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, modi?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Employee */}
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">+{employeeCount}</h1>
                            <div className="h-2 w-14 bg-red-500 rounded-full my-4"></div>
                            <p className="text-base sm:text-lg md:text-xl uppercase">Employee</p>
                        </div>

                        {/* Projects */}
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">+{projectCount}</h1>
                            <div className="h-2 w-14 bg-red-500 rounded-full my-4"></div>
                            <p className="text-base sm:text-lg md:text-xl uppercase">Projects</p>
                        </div>

                        {/* Clients */}
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">+{clientCount}</h1>
                            <div className="h-2 w-14 bg-red-500 rounded-full my-4"></div>
                            <p className="text-base sm:text-lg md:text-xl uppercase">Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
