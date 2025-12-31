import { Card, CardBody, CardFooter } from "@heroui/react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import ProductActionButton from "../../ui/ProductActionButton";

export default function ProductCard({ product }) {
  const { name, offer_price, id, stock_quantity } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainImage =
    product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "/placeholder.jpg";

  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch(
      addItem({
        productId: id,
        name,
        unitPrice: Number(offer_price || product.price),
        quantity: 1,
        image: mainImage,
      }),
    );

    toast.success(`${name} added to cart!`);
  };

  const handleCardClick = () => {
    if (isMobile) navigate(`/product/${id}`);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    // TODO: Implement wishlist functionality
  };

  return (
    <Card
      shadow="sm"
      className="w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-2xl sm:max-w-[250px] md:max-w-[300px] lg:max-w-[320px]"
    >
      <CardBody
        className="group relative cursor-pointer overflow-visible p-0"
        onClick={handleCardClick}
      >
        <img
          src={mainImage}
          alt={name}
          className="h-[150px] w-full rounded-lg object-cover sm:h-[180px] md:h-[200px] lg:h-[220px]"
        />

        {/* Desktop hover actions */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20 md:flex">
          <div className="flex gap-2">
            <ProductActionButton
              icon={Eye}
              bgColor="white"
              textColor="black"
              hoverColor="blue"
              label="View Details"
              onClick={handleViewDetails}
            />

            <ProductActionButton
              icon={Heart}
              bgColor="white"
              textColor="red"
              hoverColor="darkred"
              label="Wishlist"
              onClick={handleWishlist}
            />

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

      <CardFooter className="flex flex-col gap-2 p-2 sm:p-3">
        <h3 className="line-clamp-1 text-[15px] font-semibold text-slate-800">{name}</h3>

        <div className="flex items-center gap-4 justify-between">
          <p className="text-[15px] font-medium text-red-500">
            {formatCurrency(offer_price)}
          </p>

          {/* <p className="text-[13px] font-medium text-gray-600">
            qty: {stock_quantity}
          </p> */}
        </div>
      </CardFooter>
    </Card>
  );
}
