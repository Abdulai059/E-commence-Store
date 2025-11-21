import { Card, CardBody, CardFooter } from "@heroui/react";
import { formatCurrency } from "../../utils/helpers";
import ProductActionButton from "../../ui/ProductActionButton";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import Modal from "../../ui/Modal"; // Import the Modal component
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function ProductCard({ product }) {
  const { name, price, category } = product;

  // Get image safely
  const mainImage = 
    product.product_images?.[0]?.image_url || 
    product.images?.[0]?.image_url || 
    "";

  return (
    <Modal>
      <Card
        shadow="sm"
        className="overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl"
      >
        <CardBody
          className="group relative cursor-pointer overflow-visible p-0"
        >
          {/* Mobile: Make entire card clickable to open modal */}
          <Modal.Open opens={`product-${product.id}`}>
            <div className="md:cursor-default">
              <img
                src={mainImage}
                alt={name}
                className="h-[150px] w-full rounded-lg object-cover sm:h-[180px] md:h-[200px] lg:h-[220px]"
              />
            </div>
          </Modal.Open>

          {/* Hover Overlay - Desktop only */}
          <div className="absolute inset-0 hidden items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20 md:flex">
            <div className="pointer flex gap-2">
              <Modal.Open opens={`product-${product.id}`}>
                <ProductActionButton
                  icon={Eye}
                  bgColor="white"
                  textColor="black"
                  hoverColor="blue"
                  label="View Details"
                />
              </Modal.Open>

              <ProductActionButton
                icon={Heart}
                bgColor="white"
                textColor="red"
                hoverColor="darkred"
                label="Wishlist"
                onClick={() => console.log("Wishlist clicked")}
              />

              <ProductActionButton
                icon={ShoppingCart}
                bgColor="white"
                textColor="green"
                hoverColor="darkgreen"
                label="Add to Cart"
                onClick={() => console.log("Add to Cart clicked")}
              />
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex flex-col gap-1 p-3">
          <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
            {category?.name}
          </span>
          <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-800">
            {name}
          </h3>
          <p className="text-[15px] font-semibold text-red-500">
            {formatCurrency(price)}
          </p>
        </CardFooter>
      </Card>

      {/* Modal Window */}
       <Modal.Window name={`product-${product.id}`}>
        <ProjectDetailsModal product={product} />
      </Modal.Window>
    </Modal>
  );
}