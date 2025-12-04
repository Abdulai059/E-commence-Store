import { useState } from "react";
import { useAddOrder } from "../../AdminServices/orders/useCreateOrder";

export function usePlaceOrder(cart, selectedPayment, clearCart) {
  const { addNewOrder, isSubmitting } = useAddOrder();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Helper: calculate totals
  const calculateTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const tax = subtotal * 0.02;
    const shippingFee = 0;
    return { subtotal, tax, shippingFee, total: subtotal + tax + shippingFee };
  };

  const placeOrder = (formData, resetForm, resetPayment) => {
    setError(null);
    setSuccess(false);

    const { subtotal, tax, shippingFee, total } = calculateTotals();

    const orderData = {
      recipient_name: formData["recipient name"],
      recipient_contact: formData["recipient contact"],
      delivery_address: formData["delivery address"],
      order_note: formData["order note"] || null,
      payment_method: selectedPayment,
      subtotal,
      tax,
      shipping_fee: shippingFee,
      total_amount: total,
      order_items: cart.map((item) => ({
        product_id: item.productId,
        product_name: item.name,
        product_image: item.image,
        quantity: item.quantity,
        unit_price: item.unitPrice,
        total_price: item.quantity * item.unitPrice,
      })),
      order_status: "pending",
    };

    addNewOrder(orderData, {
      onSuccess: () => {
        setSuccess(true);
        if (resetForm) resetForm();
        resetPayment();
        if (clearCart) clearCart();
      },
      onError: (err) => setError(err.message || "Failed to place order"),
    });
  };

  return { placeOrder, isSubmitting, error, success };
}
