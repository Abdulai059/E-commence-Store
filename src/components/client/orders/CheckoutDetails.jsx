import { useSelector } from "react-redux";
import { formatCurrency } from "../../../utils/helpers";
import { getCart } from "../cart/cartSlice";

function CheckoutDetails() {
  const cart = useSelector(getCart);

  const price = cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tax = price * 0.02;
  const shippingFee = 0;
  const totalAmount = price + tax + shippingFee;

  return (
    <div className="space-y-2 border-t pt-4">
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>{formatCurrency(price)}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Tax (2%)</span>
        <span>{formatCurrency(tax)}</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Shipping Fee:</span>
        <span className="text-sm text-orange-500">Delivery charges apply</span>
      </div>
      <div className="flex justify-between border-t pt-2 text-lg font-semibold text-red-600 md:text-xl">
        <span>Total Amount:</span>
        <span className="text-green-600">₵{formatCurrency(totalAmount)}</span>
      </div>
    </div>
  );
}

export default CheckoutDetails;
