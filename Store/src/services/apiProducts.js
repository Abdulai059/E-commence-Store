import { PAGE_SIZE } from "../utils/constants";
import { shuffle } from "../utils/randomshuffle";
import supabase from "./supabase";

export async function getProducts({ page = 1 }) {
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
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Products could not be loaded");
  }

  // Clean & normalize returned data
  const products = shuffle(data).map((product) => ({
    ...product,
    images: product.product_images || [],
    category: product.categories || null,
  }));

  return { products, count };
}

// RESQUESTING FOR A SINGLE PPRODUCT
export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select(
      `*, 
      categories(*),
      product_images(*)`,
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product not found");
  }

  // Transform to match ProductDetails structure
  return {
    ...data,
    images: data.product_images || [],
    category: data.categories || null,
  };
}

export async function addProduct(product) {
  const {
    name,
    description,
    price,
    offer_price,
    stock_quantity,
    trending_colors,
    in_stock,
    category_id,
  } = product;

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        name,
        description,
        price,
        offer_price,
        stock_quantity,
        trending_colors,
        in_stock,
        category_id,
      },
    ])
    .select();

  if (error) {
    console.error("Insert failed Product:", error);
    return { error };
  }

  console.log("Inserted product:", data);
  return { data };
}
