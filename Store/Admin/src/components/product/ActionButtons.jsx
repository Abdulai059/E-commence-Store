import Button from "../ui/Button";
import Modal from "../ui/Modal";
import ProductImageForm from "./ProductImageForm";

export function ActionButtons({ product, onAddToCart, addToCartText }) {
  return (
    <div className="mt-10 flex items-center gap-4 text-base text-gray-800">
      <button
        onClick={onAddToCart}
        className="w-full cursor-pointer bg-gray-100 py-3.5 text-center font-medium shadow-sm transition hover:bg-gray-200"
      >
        {addToCartText}
      </button>

      <Modal>
        <Modal.Open opens="addimage">
          <Button className="w-full cursor-pointer py-3.5 font-medium text-white shadow-sm transition">
            Update Image
          </Button>
        </Modal.Open>

        <Modal.Window name="addimage">
          <ProductImageForm productId={product.id} initialProduct={product} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
