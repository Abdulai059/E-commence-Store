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
  const { count: processingdOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "processing");

  // Cancelled orders
  const { count: cancelledOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "cancelled");

  const { count: shippedOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "shipped");

  const { count: deliveredOrders } = await supabase
    .from("orders")
    .select("order_id", { count: "exact", head: true })
    .eq("order_status", "delivered");

  return {
    totalOrders,
    pendingOrders,
    processingdOrders,
    cancelledOrders,
    shippedOrders,
    deliveredOrders,
  };
}

export default getOrderStats;
