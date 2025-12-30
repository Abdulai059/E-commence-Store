import CarouselSection from "../../ui/CarouselSection";
import SectionHeader from "../../ui/SectionHeader";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";
import CategoriesCardSkeleton from "./CategoriesCardSkeleton";

function CategorySection() {
  const { isLoading, categories } = useCategories();

  const skeletonItems = Array.from({ length: 8 }).map((_, i) => i);

  return (
    <div className="">
      <SectionHeader
        title="Shop by Category"
        subtitle="Explore our wide range of electronics and appliances"
        viewAllLink="/new-arrivals"
        showViewAll={false}
      />

      {isLoading ? (
        <CarouselSection
          items={skeletonItems}
          showArrows={false}
          renderItem={() => <CategoriesCardSkeleton />}
        />
      ) : (
        <CarouselSection
          items={categories}
          showArrows={true}
          renderItem={(category) => <CategoriesCard category={category} />}
        />
      )}
    </div>
  );
}

export default CategorySection;
