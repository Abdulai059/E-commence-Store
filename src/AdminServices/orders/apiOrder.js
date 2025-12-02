import supabase from "../../services/supabase";

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

  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
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
