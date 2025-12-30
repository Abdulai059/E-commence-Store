import { useState } from "react";
import ProductImageGallery from "../shared/ProductImageGallery";
import AdminProductInfo from "./AdminProductInfo";

function AdminProductDetails({ product }) {

  if (!product) return <p>Loading...</p>;

  const imageUrls =
    product.images?.map((img) => (typeof img === "string" ? img : img.image_url)) || [];

  const [thumbnail, setThumbnail] = useState(imageUrls[0] || "");

  const handleAddToCart = () => {
    const newItem = {
      productId: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
      image: imageUrls[0],
      offer_price: product.price,
    };
    // dispatch(addItem(newItem)); // Commented out - admin may not need cart functionality
  };

  return (
    <div className="text-gray-800">
      <div className="px-2">
        <p className="text-base">
          <span>{product.category?.name || product.category}</span>:
          <span className="text-indigo-500"> {product.name}</span>
        </p>

        <div className="mt-4 flex flex-col gap-16 md:flex-row">
          <ProductImageGallery
            images={imageUrls}
            thumbnail={thumbnail}
            onThumbnailChange={setThumbnail}
          />

          <AdminProductInfo
            product={product}
            onAddToCart={handleAddToCart}
            addToCartText="Edit Product"
            buyNowText="Update Image"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminProductDetails;
