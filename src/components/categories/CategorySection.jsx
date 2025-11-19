import CarouselSection from "../../ui/CarouselSection";
import SectionHeader from "../../ui/SectionHeader";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";

function CategorySection() {
  const { isLoading, categories } = useCategories();

  return (
    <div className="md:py-12 pt-5">
      <SectionHeader
        title="Shop by Category"
        subtitle="Explore our wide range of electronics and appliances"
        viewAllLink="/new-arrivals"
          showViewAll = {false}
      />
      <CarouselSection
        items={categories}
        showArrows={true}
        renderItem={(category) => <CategoriesCard category={category} />}
      />
    </div>
  );
}

export default CategorySection;
