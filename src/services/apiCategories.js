import supabase from "./supabase";

// Fetch all categories
export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("id, name");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return data;
}
