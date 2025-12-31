import React, { useEffect } from "react";
import ProductCategory from "./ProductCategory";
import { useTelevisionProducts } from "./useTelevisionProducts";

function TelevisionCategory() {
    const { isLoading, televisions } = useTelevisionProducts();


    useEffect(() => {
        if (!isLoading) {
            console.log("televisions loaded:", televisions);
        }
    }, [isLoading, televisions]);


    return (
        <ProductCategory
            title="Latest Televisions"
            subtitle="Browse our selection of top TVs"
            viewAllLink="/shop"
            products={televisions}
            isLoading={isLoading}
        />
    );
}

export default TelevisionCategory;
