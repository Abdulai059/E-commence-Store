import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function createOrder(order) {
  const {
    recipient_name,
    recipient_contact,
    delivery_address,
    order_note,
    payment_method,
    subtotal,
    tax,
    shipping_fee,
    total_amount,
    order_items,
    order_status = "pending",
  } = order;

  const order_id = generateOrderId();

  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        order_id,
        recipient_name,
        recipient_contact,
        delivery_address,
        order_note,
        payment_method,
        subtotal,
        tax,
        shipping_fee,
        total_amount,
        order_items,
        order_status,
      },
    ])
    .select();

  if (error) {
    console.error("Insert failed Order:", error);
    return { error };
  }

  return { data };
}

function generateOrderId() {
  const uuid = uuidv4().replace(/-/g, "").slice(0, 8);
  return `ORD-${uuid.toUpperCase()}`;
}

