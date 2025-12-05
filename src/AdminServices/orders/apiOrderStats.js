import supabase from "../../services/supabase";

export async function getOrderStats() {
  // Total orders
  const { count: totalOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true });

  // Pending orders
  const { count: pendingOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "pending");

  // Completed orders
  const { count: completedOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "completed");

  // Cancelled orders
  const { count: cancelledOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "cancelled");

  return { totalOrders, pendingOrders, completedOrders, cancelledOrders };
}

export default getOrderStats;
