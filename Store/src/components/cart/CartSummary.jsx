import { useState } from "react";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function CartSummary() {
  const [showAddress, setShowAddress] = useState(false);

  const cart = useSelector(getCart);

  // Sum of all item subtotals = quantity * unitPrice
  const price = cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

  // tax = 2% of price
  const tax = price * 0.02;

  // Shipping fee
  const shippingFee = 0;

  // Total amount
  const totalAmount = price + tax + shippingFee;

  return (
    <div className="w-full max-w-[360px] border border-gray-300/70 bg-gray-100/40 p-5 max-md:mt-16">
      <h2 className="text-lg font-medium ">Order Summary</h2>
      <hr className="my-5 border-gray-300" />

      <div className="mb-6">
        <p className="text-sm font-medium uppercase">Delivery Address</p>
        <div className="relative mt-2 flex items-start justify-between text-sm">
          <p className="text-gray-500">No address found</p>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className="cursor-pointer text-indigo-500 hover:underline"
          >
            Change
          </button>
          {showAddress && (
            <div className="absolute top-12 w-full border border-gray-300 bg-white py-1 text-sm">
              <p
                onClick={() => setShowAddress(false)}
                className="p-2 text-gray-500 hover:bg-gray-100"
              >
                New York, USA
              </p>
              <p
                onClick={() => setShowAddress(false)}
                className="cursor-pointer p-2 text-center text-indigo-500 hover:bg-indigo-500/10"
              >
                Add address
              </p>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm font-medium uppercase">Payment Method</p>

        <select className="mt-2 w-full border border-gray-300 text-base bg-white px-3 py-2 outline-none">
          <option value="COD">Cash On Delivery</option>
          <option value="Online">Online Payment</option>
        </select>
      </div>

      <hr className="border-gray-300" />

      <div className="mt-4 space-y-2 text-base text-gray-500">
        <p className="flex justify-between">
          <span>Price</span>
          <span>{formatCurrency(price)}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-600">Free</span>
        </p>
        <p className="flex justify-between">
          <span>Tax (2%)</span>
          <span>{formatCurrency(tax)}</span>
        </p>
        <p className="mt-3 flex justify-between text-base font-medium">
          <span>Total Amount:</span>
          <span className="text-base">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <Link to="/checkout">
        <Button className="mt-6 w-full cursor-pointer py-3 font-medium text-white transition">
          Place Order
        </Button>
      </Link>
    </div>
  );
}

export default CartSummary;
