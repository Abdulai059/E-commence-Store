import supabase from "../../services/supabase";
import { v4 as uuidv4 } from "uuid";
import { ORDER_PAGE_SIZE } from "../../utils/constants";

export async function getOrders({ page = 1 }) {
  let query = supabase
    .from("orders")
    .select(
      `
     id,
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
      order_status,
      payment_status,
      created_at
      `,
      { count: "exact" },
    )
    .order("created_at", { ascending: false });

  // Apply correct pagination
  if (page) {
    const from = (page - 1) * (ORDER_PAGE_SIZE - 1);
    const to = from + ORDER_PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Orders could not be loaded");
  }

  return { data, count };
}

export async function getOrder(orderId) {
  const { data, error } = await supabase.from("orders").select("*").eq("id", orderId).single();

  if (error) {
    console.error("Error fetching order:", error);
    throw new Error("Order not found");
  }

  return data;
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

function generateOrderId() {
  const uuid = uuidv4().replace(/-/g, "").slice(0, 8);
  return `ORD-${uuid.toUpperCase()}`; // remove #
}
