import { Card, CardBody, CardFooter } from "@heroui/react";
import { formatCurrency } from "../../utils/helpers";
import ProductActionButton from "../../ui/ProductActionButton";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { name, offer_price, category } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const mainImage =
    product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || null;

  function handleAddToCart(e) {
    e.stopPropagation();
    dispatch(
      addItem({
        productId: product.id,
        name: product.name,
        unitPrice: Number(product.offer_price || product.price),
        quantity: 1,
        image: mainImage,
      }),
    );

    toast.success(`${product.name} added to cart!`);
  }

  return (
    <Card
      shadow="sm"
      className="w-full overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl sm:max-w-[250px] md:max-w-[300px] lg:max-w-[320px]"
    >
      <CardBody
        className="group relative cursor-pointer overflow-visible p-0"
        // Mobile: enable full-card click
        onClick={isMobile ? () => navigate(`/product/${product.id}`) : undefined}
      >
        {/* Image */}
        <img
          src={mainImage}
          alt={name}
          className="h-[150px] w-full rounded-lg object-cover sm:h-[180px] md:h-[200px] lg:h-[220px]"
        />

        {/* Hover buttons (desktop only) */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20 md:flex">
          <div className="flex gap-2">
            {/* Eye → View Details */}
            <ProductActionButton
              icon={Eye}
              bgColor="white"
              textColor="black"
              hoverColor="blue"
              label="View Details"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
            />

            {/* Wishlist */}
            <ProductActionButton
              icon={Heart}
              bgColor="white"
              textColor="red"
              hoverColor="darkred"
              label="Wishlist"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Add to cart */}
            <ProductActionButton
              icon={ShoppingCart}
              bgColor="white"
              textColor="green"
              hoverColor="darkgreen"
              label="Add to Cart"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </CardBody>

      <CardFooter className="flex flex-col gap-1 p-2 sm:p-3">
        <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-800">{name}</h3>
        <p className="text-[15px] font-semibold text-red-500">{formatCurrency(offer_price)}</p>
      </CardFooter>
    </Card>
  );
}
