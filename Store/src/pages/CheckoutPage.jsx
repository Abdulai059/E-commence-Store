import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import BillingInformation from "../components/orders/BillingInformation";
import OrderSummary from "../components/orders/OrderSummary";
import PaymentMethod from "../components/orders/PaymentMethod";
import { usePlaceOrder } from "../hooks/usePlaceOrder";

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("mobile");
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Function to clear cart
  const clearCart = () => dispatch({ type: "cart/clearCart" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Reset payment method to default
  const resetPayment = () => setSelectedPayment("mobile");

  // Use the hook
  const { placeOrder, isSubmitting, error, success } = usePlaceOrder(
    cart,
    selectedPayment,
    clearCart,
  );

  // Form submit
  const onSubmit = (data) => placeOrder(data, reset, resetPayment);

  /** ------------------------------
   *  UI
   * -------------------------------*/
  return (
    <div className="mx-4 min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-[1600px] px-0 md:mt-[100px]">
        {/* Page Header */}
        <div className="mb-8 flex w-full items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 md:w-3xl">
          <ShoppingBag className="h-6 w-6 text-gray-700" />
          <h1 className="text-lg font-semibold text-red-600">
            Checkout
            <span className="text-sm text-gray-600"> ({cart.length} items)</span>
          </h1>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="font-medium text-green-800">✓ Order placed successfully!</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="font-medium text-red-800">✗ {error}</p>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <BillingInformation register={register} errors={errors} />
          </div>

          <div className="space-y-6">
            <OrderSummary cart={cart} />

            <PaymentMethod
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || cart.length === 0}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-4 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700"
            >
              <ShoppingBag className="h-5 w-5" />
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
