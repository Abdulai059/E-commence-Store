import { Grid } from "../../ui/Grid";
import SectionHeader from "../../ui/SectionHeader";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";

function CategorySection() {
  const { isLoading, categories } = useCategories();
  console.log(categories);
  return (
    <div className="mx-auto px-4 py-12">
      {/* Header with View All */}
      <SectionHeader
        title="Shop by Category"
        subtitle="Explore our wide range of electronics and appliances"
        viewAllLink="/new-arrivals"
      />

      {/* Product Grid */}
      <Grid className="gap-4 md:grid-cols-8">
        {categories?.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </Grid>
    </div>
  );
}

export default CategorySection;









import { useRef, useState, useEffect } from "react";
import { Grid } from "../../ui/Grid";
import SectionHeader from "../../ui/SectionHeader";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";

function CategorySection() {
  const { isLoading, categories } = useCategories();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, [categories]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-auto px-4 py-12">
      {/* Header */}
      <SectionHeader
        title="Shop by Category"
        subtitle="Explore our wide range of electronics and appliances"
        viewAllLink="/new-arrivals"
      />

      {/* Mobile: Horizontal scroll */}
      <div className="relative md:hidden">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
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

        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories?.map((category) => (
            <div key={category.id} className="w-1/2 flex-none snap-start">
              <CategoriesCard category={category} />
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop: Grid layout */}
       <Grid className="hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6 md:grid">
        {categories?.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </Grid>
    </div>
  );
}


