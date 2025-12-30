import CheckoutItems from "./CheckoutItems";
import CheckoutDetails from "./CheckoutDetails";

export default function OrderSummary({ cart }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 border-b-2 border-red-200 pb-2 font-semibold sm:text-base md:text-lg">
        Order Summary
      </h2>
      <div className="mb-6 space-y-4">
        {cart.map((item) => (
          <CheckoutItems item={item} key={item.productId} />
        ))}
      </div>
      <CheckoutDetails />
    </div>
  );
}
