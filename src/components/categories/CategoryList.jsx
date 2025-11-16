import { useEffect, useRef, useState } from "react";
import { Grid } from "../../ui/Grid";
import SectionHeader from "../../ui/SectionHeader";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";
import { useAutoScroll } from "../../hooks/useAutoScroll";

function CategorySection() {
  const { categories } = useCategories();
  const scrollContainerRef = useRef();

  const [scrollLeft, setscrollLeft] = useState(false);
  const [scrollRight, setscrollRight] = useState(false);

  // plug in the hook
  const { scroll } = useAutoScroll(scrollContainerRef, [categories]);

  // show/hide arrows
  const scrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setscrollLeft(scrollLeft > 0);
      setscrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    scrollPosition();
    window.addEventListener("resize", scrollPosition);
    return () => window.removeEventListener("resize", scrollPosition);
  }, [categories]);

  return (
    <div className="mx-auto px-4 py-12">
      <SectionHeader
        title="Shop by Category"
        subtitle="Explore our wide range of electronics and appliances"
        viewAllLink="/new-arrivals"
      />

      {/* Mobile Scroll */}
      <div className="relative md:hidden">
        {scrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
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

        <div
          ref={scrollContainerRef}
          onScroll={scrollPosition}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {categories?.map((category) => (
            <div key={category.id} className="w-1/2 flex-none snap-start">
              <CategoriesCard category={category} />
            </div>
          ))}
        </div>

        {scrollRight && (
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

      {/* Desktop Grid */}
      <Grid className="hidden grid-cols-1 gap-6 sm:grid-cols-2 md:grid lg:grid-cols-8">
        {categories?.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </Grid>
    </div>
  );
}

export default CategorySection;
