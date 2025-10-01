import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
            {/* Big Oops! */}
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500">
                Oops!
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

            {/* Description */}
            <p className="mt-2 text-gray-400 max-w-md">
                Sorry, the page you’re looking for doesn’t exist or may have been moved.
                Let’s get you back on track.
            </p>

            {/* CTA Button */}
            <Link
                href="/"
                className="mt-6 inline-block px-6 py-3 text-lg font-medium rounded-xl shadow-lg 
        bg-gradient-to-r from-teal-500 to-pink-500 hover:scale-105 transform transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
