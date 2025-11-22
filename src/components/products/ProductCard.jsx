import { Card, CardBody, CardFooter } from "@heroui/react";
import { formatCurrency } from "../../utils/helpers";
import ProductActionButton from "../../ui/ProductActionButton";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { name, price, category } = product;
  const navigate = useNavigate();

  // Get main image safely
  const mainImage = product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "";

  // Handle card click (mobile)
  const handleCardClick = () => navigate(`/product/${product.id}`);

  return (
    <Card
      shadow="sm"
      className="overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Card body */}
      <CardBody
        className="group relative cursor-pointer overflow-visible p-0"
        onClick={handleCardClick} // mobile click
      >
        {/* Product Image */}
        <div className="md:cursor-default">
          <img
            src={mainImage}
            alt={name}
            className="h-[150px] w-full rounded-lg object-cover sm:h-[180px] md:h-[200px] lg:h-[220px]"
          />
        </div>

        {/* Hover overlay (desktop only) */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20 md:flex">
          <div className="flex gap-2">
            {/* Eye button navigates */}
            <ProductActionButton
              icon={Eye}
              bgColor="white"
              textColor="black"
              hoverColor="blue"
              label="View Details"
              onClick={(e) => {
                e.stopPropagation(); // prevent card click
                navigate(`/product/${product.id}`);
              }}
            />

            {/* Wishlist button */}
            <ProductActionButton
              icon={Heart}
              bgColor="white"
              textColor="red"
              hoverColor="darkred"
              label="Wishlist"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Wishlist clicked");
              }}
            />

            {/* Add to Cart button */}
            <ProductActionButton
              icon={ShoppingCart}
              bgColor="white"
              textColor="green"
              hoverColor="darkgreen"
              label="Add to Cart"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Add to Cart clicked");
              }}
            />
          </div>
        </div>
      </CardBody>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-1 p-3">
        <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
          {category?.name}
        </span>
        <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-800">{name}</h3>
        <p className="text-[15px] font-semibold text-red-500">{formatCurrency(price)}</p>
      </CardFooter>
    </Card>
  );
}
