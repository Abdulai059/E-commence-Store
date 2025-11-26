import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import LinkButton from "../../ui/LinkButton";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col rounded-lg bg-white px-6 py-8 shadow-2xs md:mt-[165px] md:flex-row">
      <div className="max-w-4xl flex-1">
        <h1 className="mb-6 text-2xl font-medium">
          Shopping Cart <span className="text-sm text-indigo-500">{cart.length} Items</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] pb-3 text-base font-medium text-gray-500">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cart.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}

        <LinkButton
          to="/"
          className="group mt-8 flex items-center gap-2 text-indigo-500 group-hover:text-indigo-600"
        >
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
        </LinkButton>
      </div>

      <CartSummary />
    </div>
  );
}

export default ShoppingCart;
