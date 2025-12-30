import { useState, useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createOrder } from "../services/apiOrders";

function useAddOrder() {
  const queryClient = useQueryClient();

  const { mutate: addNewOrder, isLoading: isSubmitting } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("New Order successfully placed");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (err) => toast.error(err?.message || "Failed to create order"),
  });

  return { isSubmitting, addNewOrder };
}

export function usePlaceOrder(cart, selectedPayment, clearCart) {
  const { addNewOrder, isSubmitting } = useAddOrder();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Calculate order totals
  const calculateTotals = useCallback(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const tax = subtotal * 0.02;
    const shippingFee = 0;
    const total = subtotal + tax + shippingFee;
    return { subtotal, tax, shippingFee, total };
  }, [cart]);

  const placeOrder = useCallback(
    (formData, resetForm, resetPayment) => {
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
        order_status: "pending",
        order_items: cart.map((item) => ({
          product_id: item.productId,
          product_name: item.name,
          product_image: item.image,
          quantity: item.quantity,
          unit_price: item.unitPrice,
          total_price: item.quantity * item.unitPrice,
        })),
      };

      addNewOrder(orderData, {
        onSuccess: () => {
          setSuccess(true);
          resetForm?.();
          resetPayment?.();
          clearCart?.();
        },
        onError: (err) => setError(err.message || "Failed to place order"),
      });
    },
    [cart, selectedPayment, addNewOrder, calculateTotals, clearCart],
  );

  return { placeOrder, isSubmitting, error, success };
}

