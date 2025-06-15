import { useState, useEffect } from "react";

const stats = [
    { label: "Employees", target: 60 },
    { label: "Projects", target: 1220 },
    { label: "Clients", target: 200 },
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
        <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Title & Description */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Who We Are
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                        We are a passionate team delivering innovative solutions for businesses worldwide. Our expertise spans multiple industries, and our commitment to excellence drives measurable results for our clients.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition"
                        >
                            <span className="text-5xl font-bold text-red-500 mb-2">
                                +{counts[idx]}
                            </span>
                            <span className="text-lg font-medium text-gray-700 uppercase tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
