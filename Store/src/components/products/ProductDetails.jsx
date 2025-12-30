import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";

function ProductDetails({ product, addToCartText, buyNowText }) {
  const dispatch = useDispatch();

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
    dispatch(addItem(newItem));
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

          <ProductInfo
            product={product}
            onAddToCart={handleAddToCart}
            addToCartText={addToCartText}
            buyNowText={buyNowText}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
