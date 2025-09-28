import { useState, useEffect } from "react";
import HeroCard from "./HeroCard";
import { heroItems } from "@/constants";

const HeroSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto swipe every 2 minutes (120000 ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroItems.length);
        }, 120000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative mx-auto max-w-10xl overflow-hidden px-4 py-4">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {heroItems.map((item, idx) => (
                    <div key={idx} className="min-w-full flex justify-center">
                        <HeroCard {...item} />
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="hidden mt-4 md:flex justify-center gap-2">
                {heroItems.map((_, idx) => (
                    <span
                        key={idx}
                        className={`h-2 w-2 rounded-full ${idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;