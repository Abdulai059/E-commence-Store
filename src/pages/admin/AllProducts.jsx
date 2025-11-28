import { useAllProducts } from "../../hooks/admin/useAllProducts";
import Table from "../../ui/Table";
import { useState } from "react";

function AllProducts() {

      const { isLoading, products } = useAllProducts();




  
  const columns = [
    { label: "Product", key: "product" },
    { label: "Category", key: "category" },
    { label: "Selling Price", key: "offerPrice", hideOnMobile: true },
    { label: "Description", key: "description" },
    { label: "In Stock", key: "inStock" },
    { label: "Stock Quantity", key: "stockQty" },
  ];

  const handleStockChange = (index) => {
    setProducts((prev) => prev.map((p, i) => (i === index ? { ...p, inStock: !p.inStock } : p)));
  };

  return (
    <div className="flex flex-1 flex-col justify-between items-center py-10">
      <div className="w-7xl p-4 md:p-0">
        <h2 className="pb-4 text-lg font-medium">All Products</h2>
        <Table products={products} columns={columns} onStockChange={handleStockChange} />
      </div>
    </div>
  );
}

export default AllProducts;
