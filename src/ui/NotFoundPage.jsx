import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Number with glow effect */}
        <div className="mb-8">
          <p className="animate-pulse text-6xl font-bold text-red-400 sm:text-9xl">404</p>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl md:text-4xl">
          Page Not Found ☹️
        </h1>

        {/* Description */}
        <p className="mb-10 text-center text-base text-gray-600 sm:text-lg md:text-xl">
          Oops! Something went wrong
          <br />
          Let's get you back on track.
        </p>

        {/* Decorative line */}
        <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-linear-to-r from-red-700 to-red-500"></div>

        {/* Action Buttons */}
        <div className="flex-co flex items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/"
            className="group relative inline-flex flex-1 items-center justify-center overflow-hidden bg-red-500 px-4 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:flex-none md:px-8"
          >
            <span className="relative z-10 text-gray-100">Go Back Home</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-400 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex flex-1 items-center justify-center gap-2 border-0 border-gray-600 bg-red-200/10 bg-gradient-to-r from-gray-100 to-red-200 px-8 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 focus:ring-1 focus:ring-red-500 focus:ring-offset-2 focus:outline-none sm:flex-none"
          >
            <span>Contact Support</span>
            {/* <span className="transition-transform duration-300 group-hover:translate-x-1">→</span> */}
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 -left-4 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="absolute -right-4 bottom-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
