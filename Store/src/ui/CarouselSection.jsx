import { useEffect, useRef, useState } from "react";
import { useAutoScroll } from "../hooks/useAutoScroll";

export function CarouselSection({ items = [], renderItem, showArrows = true }) {
  const scrollContainerRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const { scroll } = useAutoScroll(scrollContainerRef, [items]);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items]);

  if (!items || items.length === 0) return <p>Loading...</p>;

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Flex container with responsive column widths */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth px-4"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[calc(50%-0.5rem)] flex-none snap-start sm:w-[calc(33.333%-0.667rem)] md:w-[calc(12.5%-0.875rem)]"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showArrows && canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default CarouselSection;
