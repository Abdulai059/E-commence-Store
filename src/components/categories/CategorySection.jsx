import CarouselSection from "../../ui/CarouselSection";
import { CategoryGrid } from "../../ui/CategoryGrid";
import { ProjectGrid } from "../../ui/ProductGrid";
import SectionHeader from "../../ui/SectionHeader";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";

function CategorySection() {
  const { isLoading, categories } = useCategories();

  return (
    <div className="md:py-12">
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      <div>
        <CarouselSection
          items={categories}
          mobileCols="w-1/2 sm:w-1/3 md:hidden lg:hidden"
          showArrows={true}
          renderItem={(category) => <CategoriesCard category={category} />}
        />

        <div className="hidden md:block">
          <CategoryGrid
            data={categories}
            renderItem={(category) => <CategoriesCard category={category} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
