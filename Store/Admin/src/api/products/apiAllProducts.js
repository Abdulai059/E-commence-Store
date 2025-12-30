import supabase from "../../services/supabase";
import { PAGE_SIZE } from "../../utils/constants";

export async function getAllProducts({ page = 1, pageSize = PAGE_SIZE }) {
  let query = supabase
    .from("products")
    .select(
      `
        id,
        name,
        description,
        price,
        offer_price,
        stock_quantity,
        trending_colors,
        in_stock,
        categories (
          id,
          name,
          description
        ),
        created_at,
        product_images (
          id,
          image_url,
          position
        )
      `,
      { count: "exact" },
    )
    .order("created_at", { ascending: false });

  // Apply pagination
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Products could not be loaded");
  }

  // Clean & normalize returned data
  const products = data.map((product) => ({
    ...product,
    images: product.product_images || [],
    category: product.categories || null,
  }));

  return { products, count };
}
