import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import { Trash2 } from "lucide-react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const { productId, image, name, quantity, unitPrice } = item;

  function handleDelete(id) {
    dispatch(deleteItem(id));
  }

  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  return (
    <Modal>
      <div className="grid grid-cols-[2fr_1fr_1fr] items-center pt-3 text-sm font-medium text-gray-500 md:text-base">
        <div className="flex items-center gap-3 md:gap-6">
          {/* IMAGE */}
          <div className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-300">
            <img className="h-full max-w-full object-cover" src={image} alt={name} />
          </div>

          {/* DETAILS */}
          <div>
            <p className="hidden pb-2 font-semibold md:block md:text-sm">{name}</p>

            <UpdateItemQuantity productId={productId} currentQuantity={currentQuantity} />
          </div>
        </div>

        {/* SUBTOTAL */}
        <p className="text-center font-semibold text-green-600">
          {formatCurrency(quantity * unitPrice)}
        </p>

        {/* DELETE */}

        <Modal.Open>
          <button className="mx-auto cursor-pointer rounded-full px-4 py-4 text-red-600 hover:bg-red-200">
            <Trash2 />
          </button>
        </Modal.Open>
      </div>

      <Modal.Window>
        <ConfirmDelete onConfirm={() => handleDelete(productId)} />
      </Modal.Window>
    </Modal>
  );
}

export default CartItem;
