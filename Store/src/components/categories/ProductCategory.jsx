import { ProjectGrid } from "../../ui/ProductGrid";
import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";


function ProductCategory({ title, subtitle, viewAllLink, products, isLoading }) {
    return (
        <div className="my-10 md:py-12">
            <SectionHeader
                title={title}
                subtitle={subtitle}
                viewAllLink={viewAllLink}
            />

            {isLoading ? (
                <ProjectGrid
                    data={Array.from({ length: 6 }, (_, index) => ({ id: index }))}
                    renderItem={(item) => <ProductCardSkeleton key={item.id} />}
                    className="gap-6 md:grid-cols-4 lg:grid-cols-6"
                />
            ) : (
                <ProjectGrid
                    data={products}
                    renderItem={(product) => <ProductCard key={product.id} product={product} />}
                    className="gap-4 md:grid-cols-4 lg:grid-cols-6"
                />
            )}
        </div>
    );
}

export default ProductCategory;
