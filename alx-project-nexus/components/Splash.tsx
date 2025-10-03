import { useEffect } from "react";
import Image from "next/image";
import { SPLASH_ICON } from "@/constants";
import { SplashProps } from "@/interfaces";

const Splash: React.FC<SplashProps> = ({ visible, durationMs = 4000, onFinish }) => {
    useEffect(() => {
        if (!visible) return;

        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            onFinish?.();
            document.body.style.overflow = "auto";
        }, durationMs);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, [visible, durationMs, onFinish]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity">
            <div className="flex flex-col items-center gap-4">
                {/* Logo */}
                <div className="rounded-full bg-gradient-to-r from-teal-400 to-pink-500 p-4 shadow-xl flex items-center justify-center animate-pulse-scale">
                    <Image
                        src={SPLASH_ICON}
                        alt="Brand"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                {/* Loading text */}
                <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold flex items-center gap-2">
                    {/* Gradient text */}
                    <span className="bg-gradient-to-r to-teal-400 from-pink-500 bg-clip-text text-transparent">
                        Loading catalog
                    </span>

                    {/* Animated dots */}
                    <span className="flex gap-1">
                        <span className="text-pink-500 text-2xl animate-bounce">.</span>
                        <span className="text-pink-500 text-2xl animate-bounce animation-delay-200">.</span>
                        <span className="text-pink-500 text-2xl animate-bounce animation-delay-400">.</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Splash;
