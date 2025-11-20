import ProductActionButton from "../ui/ProductActionButton";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import Modal from "./Modal";
import ProjectDetailsModal from "../components/products/ProjectDetailsModal";

function ProductQuikAction({ onWishlist, onAddToCart }) {
  return (
    <Modal>
      <div className="flex gap-2">
        <Modal.Open opens="details">
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
          onClick={onWishlist}
        />

        <ProductActionButton
          icon={ShoppingCart}
          bgColor="white"
          textColor="green"
          hoverColor="darkgreen"
          label="Add to Cart"
          onClick={onAddToCart}
        />
      </div>

      <Modal.Window name="details">
        <ProjectDetailsModal />
      </Modal.Window>
    </Modal>
  );
}

export default ProductQuikAction;
