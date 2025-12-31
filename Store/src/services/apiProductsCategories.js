import { shuffle } from "../utils/randomshuffle";
import supabase from "./supabase";

export async function getTelevisionProducts() {
  const TELEVISON_CATEGORY_ID = "4db6fccb-cec3-4c30-bb51-3bd6b2b540db";

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
      created_at,
      categories (
        id,
        name
      ),
      product_images (
        id,
        image_url,
        position
      )
    `)
    .eq("category_id", TELEVISON_CATEGORY_ID);

  if (error) {
    console.error(error);
    throw new Error("Television products could not be loaded");
  }

  // RANDOMIZE IN JAVASCRIPT
  return shuffle(data).slice(0, 6).map((product) => ({
    ...product,
    images: product.product_images || [],
    category: product.categories || null,
  }));
}


