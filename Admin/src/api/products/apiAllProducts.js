import supabase from "../../services/supabase";
import { PAGE_SIZE } from "../../utils/constants";

export async function getAllProducts({ page = 1, pageSize = 7 }) {
  // 1 Get total count separately
  const { count: totalCount, error: countError } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true });

  if (countError) throw countError;

  // 2️ Fetch paginated products with joins
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      name,
      description,
      price,
      offer_price,
      stock_quantity,
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
    `)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;

  // Normalize
  const products = data.map((product) => ({
    ...product,
    images: product.product_images || [],
    category: product.categories || null,
  }));

  return { products, count: totalCount };
}