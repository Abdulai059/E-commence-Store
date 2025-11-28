import { ShoppingBag, MapPin, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getCart } from "../../components/cart/cartSlice";
import RadioCheckbox from "../../ui/RadioCheckbox";

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("mobile");
  const [orderNote, setOrderNote] = useState("");

  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="mx-4 min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-[1600px] px-0 md:mt-[100px]">
        <div className="mb-8 flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-gray-700" />
          <h1 className="text-lg font-semibold text-red-600">
            Checkout <span className="text-base text-gray-600"> {cart.length} items </span>
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Billing Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <span className="text-red-500">*</span> Recipient Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value="Guest 0319"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <span className="text-red-500">*</span> Recipient contact
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value="0502930000"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Delivery Address
                  </label>
                  <div className="flex items-center justify-between rounded-md border border-gray-300 p-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-700">Guest Address</span>
                    </div>
                    <button className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                      <MapPin className="h-4 w-4" />
                      Select Location
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Delivery Fee: <span className="font-medium">N/A</span>
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Order Note (Optional)
                  </label>
                  <textarea
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Add any notes about your order"
                    className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 border-b-2 border-red-200 pb-2 text-lg font-semibold">
                Order Summary
              </h2>

              <div className="mb-6 space-y-4">
                {cart.map((item) => (
                  <CheckoutItems item={item} key={item.productId} />
                ))}
              </div>

              <CheckoutDetails />
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>

              <div className="space-y-3">
                <label className="flex cursor-pointer items-center gap-3">
                  <RadioCheckbox
                    name="payment"
                    value="mobile"
                    checked={selectedPayment === "mobile"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  <span className="text-gray-700">Mobile Money</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <RadioCheckbox
                    name="payment"
                    value="card"
                    checked={selectedPayment === "card"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  <span className="text-gray-700">Credit Card</span>
                </label>
              </div>
            </div>

            <div className="mx-4">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-4 font-semibold text-white transition-colors hover:bg-green-700">
                <ShoppingBag className="h-5 w-5" />
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutItems({ item }) {
  const { productId, image, name, quantity, unitPrice, totalPrice } = item;

  return (
    <div className="flex gap-4">
      <img src={image} alt={name} className="h-20 w-20 rounded-md object-cover" />

      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">Qty: {quantity}</p>
        <p className="text-sm text-gray-500">{formatCurrency(unitPrice)}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-800">{formatCurrency(quantity * unitPrice)}</p>
      </div>
    </div>
  );
}

function CheckoutDetails() {
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
