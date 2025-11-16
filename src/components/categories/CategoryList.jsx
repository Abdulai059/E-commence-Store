import { Grid } from "../../ui/Grid"
import SectionHeader from "../../ui/SectionHeader"
import CategoriesCard from "./CategoriesCard"
import { useCategories } from "./useCategories"

function CategorySection() {
    const {isLoading, categories} = useCategories()
    console.log(categories)
  return (
     <div className="mx-auto px-4 py-12">
      {/* Header with View All */}
      <SectionHeader
        title="New Arrival"
        subtitle="Browse our selection of high-quality refrigerators"
        viewAllLink="/new-arrivals"
      />

      {/* Product Grid */}
      <Grid>
        {categories?.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </Grid>
    </div>
  )
}

export default CategorySection