import { Flame, ChevronRight } from "lucide-react";

export default function DealsBanner() {
  return (
    <div className="relative my-10 w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 shadow-lg">
    

      <div className="shimmer-effect relative z-10 flex items-center justify-between px-1 py-4 md:px-6 md:py-5">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Flame
            className="bounce-animation h-8 w-8 animate-pulse text-yellow-300"
            fill="currentColor"
          />
          <div className="flex flex-col">
            <p className="text-base font-bold tracking-wide text-white md:text-lg">
              DEALS OF THE WEEK
            </p>
            <div className="diagonal-bounce mt-1 inline-block w-fit rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-gray-800 md:text-xs">
              LIMITED TIME
            </div>
          </div>
        </div>

        {/* Right Section */}
        <button className="flex items-center gap-2 rounded-full bg-white px-2 py-1 text-sm font-semibold text-red-500 shadow-md transition-colors hover:bg-gray-100 md:px-6 md:py-2">
          See More
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
