import { Card, CardBody, CardFooter } from "@heroui/react";
import { useProducts } from "./useProduct";
import { formatCurrency } from "../../utils/helpers";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import ProductActionButton from "../../ui/ProductActionButton";

export default function FeatureCopy() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {products.map((product, index) => {
        const { name, price, category } = product;

        // Get image safely
        const mainImage =
          product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "";

       

        return (
          <Card
            key={index}
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
              <div className="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 flex items-center justify-center transition-all duration-300">
                <div className="pointer-events-auto flex gap-2">
                  <ProductActionButton
                    icon={Eye}
                    bgColor="white"
                    textColor="black"
                    label="Quick View"
                    onClick={() => {}}
                  />
                  <ProductActionButton
                    icon={Heart}
                    bgColor="white"
                    textColor="red"
                    label="Wishlist"
                    onClick={() => {}}
                  />
                  <ProductActionButton
                    icon={ShoppingCart}
                    bgColor="white"
                    textColor="green"
                    label="Add to Cart"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </CardBody>

            <CardFooter className="flex flex-col gap-1 p-3">
              <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                {product?.categories?.name}
              </span>

              <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-800">{name}</h3>

              <p className="text-[15px] font-semibold text-red-500">{formatCurrency(price)}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
