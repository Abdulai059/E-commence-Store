import CarouselSection from "../../ui/CarouselSection";
import CategoriesCard from "./CategoriesCard";
import { useCategories } from "./useCategories";

function CategorySection() {
  const {isLoading, categories } = useCategories();

  return (
    <CarouselSection
      title="Shop by Category"
      subtitle="Explore our wide range of electronics and appliances"
      viewAllLink="/new-arrivals"
      items={categories}
      mobileCols="w-1/2"   
      desktopCols="lg:grid-cols-8"
      renderItem={(category) => <CategoriesCard category={category} />}
    />
  );
}

export default CategorySection;
