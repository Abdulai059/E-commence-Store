// ProductCard.jsx
import { Card, CardBody, CardFooter } from "@heroui/react";
import { formatCurrency } from "../../utils/helpers";
import ProductActionButton from "../../ui/ProductActionButton";
import { Eye, Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  const { name, price, category } = product;

  // Get image safely
  const mainImage =
    product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "";

  return (
    <Card
      isPressable
      shadow="sm"
      className="overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl"
    >
      <CardBody className="group relative overflow-visible p-0">
        <img
          src={mainImage}
          alt={name}
          className="h-[150px] w-full rounded-lg object-cover sm:h-[180px] md:h-[200px] lg:h-[220px]"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20 pointer-events-none">
          <div className="pointer-events-auto flex gap-2">
            <ProductActionButton
              icon={Eye}
              bgColor="white"
              textColor="black"
              label="Quick View"
              onClick={() => console.log("Quick View clicked", product)}
            />
            <ProductActionButton
              icon={Heart}
              bgColor="white"
              textColor="red"
              label="Wishlist"
              onClick={() => console.log("Wishlist clicked", product)}
            />
            <ProductActionButton
              icon={ShoppingCart}
              bgColor="white"
              textColor="green"
              label="Add to Cart"
              onClick={() => console.log("Add to Cart clicked", product)}
            />
          </div>
        </div>
      </CardBody>

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
