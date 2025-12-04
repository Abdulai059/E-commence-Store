import supabase from "../../services/supabase";
import { v4 as uuidv4 } from "uuid";
import { PAGE_SIZE } from "../../utils/constants";

export async function getOrder({ page = 1 }) {
  let query = supabase
    .from("orders")
    .select(
      `
       order_id,
        recipient_name,
        recipient_contact,
        recipient_email,
        delivery_address,
        order_note,
        payment_method,
        subtotal,
        tax,
        shipping_fee,
        total_amount,
        order_items,
        order_status
      `,
      { count: "exact" },
    )
    .order("created_at", { ascending: false });

  // Apply pagination
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Orders could not be loaded");
  }

  return { data, count };
}

function generateOrderId() {
  const uuid = uuidv4().replace(/-/g, "").slice(0, 8);
  return `#ORD-${uuid.toUpperCase()}`;
}

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
