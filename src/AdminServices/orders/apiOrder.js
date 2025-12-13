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

export async function getTopProducts(limit = 5) {
  // 1️⃣ Fetch completed orders
  const { data: orders, error } = await supabase
    .from("orders")
    .select("order_items")
    .eq("order_status", "completed");

  if (error) throw error;

  // 2️⃣ Aggregate product data
  const productMap = {};

  orders.forEach((order) => {
    const items = order.order_items || [];
    items.forEach((item) => {
      const { product_id, product_name, quantity, unit_price } = item;

      if (!productMap[product_id]) {
        productMap[product_id] = { id: product_id, name: product_name, units: 0, revenue: 0 };
      }

      productMap[product_id].units += quantity;
      productMap[product_id].revenue += unit_price * quantity;
    });
  });

  // 3️⃣ Optional: fetch stock & image from products table
  const productIds = Object.keys(productMap);

  if (productIds.length > 0) {
    const { data: products } = await supabase
      .from("products")
      .select("id, stock, image")
      .in("id", productIds);

    products.forEach((p) => {
      if (productMap[p.id]) {
        productMap[p.id].stock = p.stock;
        productMap[p.id].image = p.image;
      }
    });
  }

  // 4️⃣ Convert to array and sort by units
  const topProducts = Object.values(productMap)
    .sort((a, b) => b.units - a.units)
    .slice(0, limit);

  return topProducts;
}
