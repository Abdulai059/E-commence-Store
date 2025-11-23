import { useDispatch, useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import { Trash2 } from "lucide-react";
import { deleteItem } from "./cartSlice";

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleDelete(productId) {
    dispatch(deleteItem(productId));
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col rounded-lg bg-white px-6 py-16 shadow-lg md:mt-[190px] md:flex-row">
      <div className="max-w-4xl flex-1">
        <h1 className="mb-6 text-3xl font-medium">
          Shopping Cart <span className="text-sm text-indigo-500">{cart.length} Items</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] pb-3 text-base font-medium text-gray-500">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cart.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] items-center pt-3 text-sm font-medium text-gray-500 md:text-base"
          >
            <div className="flex items-center gap-3 md:gap-6">
              {/* IMAGE */}
              <div className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded border border-gray-300">
                <img className="h-full max-w-full object-cover" src={item.image} alt={item.name} />
              </div>

              {/* DETAILS */}
              <div>
                <p className="hidden font-semibold md:block">{item.name}</p>
                <div className="font-normal text-gray-500/70">
                  <p>
                    Qty: <span>{item.quantity}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* SUBTOTAL */}
            <p className="text-center">${item.price * item.quantity}</p>

            {/* DELETE */}
            <button onClick={() => handleDelete(item.productId)} className="mx-auto cursor-pointer text-red-600">
              <Trash2 />
            </button>
          </div>
        ))}

        {/* Back to shop */}
        <button className="group mt-8 flex cursor-pointer items-center gap-2 font-medium text-indigo-500">
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
              stroke="#615fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Shopping
        </button>
      </div>

      <CartSummary />
    </div>
  );
}

export default ShoppingCart;