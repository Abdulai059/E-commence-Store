import { useEffect, useRef, useState } from "react";
import { Grid } from "./Grid";
import SectionHeader from "./SectionHeader";
import { useAutoScroll } from "../hooks/useAutoScroll";

function CarouselSection({
  title,
  subtitle,
  viewAllLink,
  items = [],
  renderItem,
  mobileCols = "w-1/2",       
  desktopCols = "lg:grid-cols-4", 
   showArrows = true, 
}) {
  const scrollContainerRef = useRef();

  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);

  // Use auto-scroll hook
  const { scroll } = useAutoScroll(scrollContainerRef, [items]);

  // Check scroll position for arrows
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setScrollLeft(scrollLeft > 0);
    setScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [items]);

  return (
    <div className="mx-auto px-4 py-12">
      {/* Section Header */}
      <SectionHeader title={title} subtitle={subtitle} viewAllLink={viewAllLink} />

      {/* MOBILE CAROUSEL */}
      <div className="relative md:hidden">
        {showArrows && scrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <div key={index} className={`${mobileCols} flex-none snap-start`}>
              {renderItem(item)}
            </div>
          ))}
        </div>

        {showArrows && scrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* DESKTOP GRID */}
      <Grid className={`hidden md:grid gap-6 ${desktopCols}`}>
        {items.map((item, index) => (
          <div key={index}>{renderItem(item)}</div>
        ))}
      </Grid>
    </div>
  );
}

export default CarouselSection;
