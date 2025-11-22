import React from "react";
import { Flame, ChevronRight } from "lucide-react";

export default function DealsBanner() {
  return (
    <div className="relative my-10 w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 shadow-lg">
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bounce-animation {
          animation: bounce 1s ease-in-out infinite;
        }
          

    @keyframes diagonal-bounce {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -5px); } 
        }
        .diagonal-bounce {
          animation: diagonal-bounce 1s ease-in-out infinite;
        }




        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.5) 55%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0.1) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 4s infinite;
          filter: blur(1px);
        }
      `}</style>

      <div className="shimmer-effect relative z-10 flex items-center justify-between px-1 py-4 md:py-5 md:px-6">
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
