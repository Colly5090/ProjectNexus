import { useEffect, useState } from "react";
import { Platform } from "@/interfaces";

const InstallInstructions: React.FC = () => {
    const [platform, setPlatform] = useState<Platform>(null);

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();

        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isSafari =
            /safari/.test(userAgent) && !/crios/.test(userAgent) && !/fxios/.test(userAgent);

        if (/android/.test(userAgent)) {
            setPlatform("android");
        } else if (isIOS && isSafari) {
            setPlatform("ios-safari");
        } else if (isIOS && !isSafari) {
            setPlatform("ios-other");
        } else {
            setPlatform("desktop");
        }
    }, []);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Install App</h2>

            {platform === "android" && (
                <div>
                    <p className="mb-2">📱 Install with these steps:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Tap the <strong>⋮ menu</strong> in Chrome.</li>
                        <li>Select <strong>Install App</strong> or <strong>Add to Home screen</strong>.</li>
                    </ul>
                </div>
            )}

            {platform === "ios-safari" && (
                <div>
                    <p className="mb-2">🍎 Install with these steps (Safari):</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Tap the <strong>Share</strong> button (square with ↑).</li>
                        <li>Select <strong>Add to Home Screen</strong>.</li>
                    </ul>
                </div>
            )}

            {platform === "ios-other" && (
                <div>
                    <p className="mb-2">🍎 Install with these steps:</p>
                    <p>
                        To install, please open this page in <b>Safari</b>, then tap{" "}
                        <b>Share → Add to Home Screen</b>.
                    </p>
                </div>
            )}

            {platform === "desktop" && (
                <div>
                    <p className="mb-2">💻 Install with these steps (Chrome/Edge):</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Click the <strong>install icon</strong> in the address bar (➕ in a monitor).</li>
                        <li>Or open <strong>⋮ menu → Install App</strong>.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default InstallInstructions;
