import supabase from "./supabase";

// Fetch all categories
export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, image_url, description");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return data;
}



export async function addCategory({ name, description, imageFile }) {

  let imageUrl = null;

  // 1️⃣ Upload image if present
  if (imageFile) {
    const safeFileName = imageFile.name.replaceAll(/[^a-zA-Z0-9.-]/g, "_");
    const filePath = `${Date.now()}-${safeFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("category-images")
      .upload(filePath, imageFile, { upsert: true });

    if (uploadError) throw uploadError;

    // 2️⃣ Get public URL
    const { data: urlData } = supabase.storage
      .from("category-images")
      .getPublicUrl(filePath);

    imageUrl = urlData.publicUrl;
  }

  // 3️⃣ Insert category row
  const { data, error } = await supabase
    .from("categories")
    .insert([{ name, description, image_url: imageUrl }])
    .select()
    .single();

  if (error) throw error;

  return data;

}


export async function createCategoryImage(categoryId, file, categoryName) {
  try {
    // 1. Sanitize filename
    const safeFileName = file.name.replaceAll(/[^a-zA-Z0-9.-]/g, "_");

    // 2. Build path
    const filePath = `${categoryId}/${Date.now()}-${safeFileName}`;

    // 3. Upload to category-images WITH UPSERT
    const { error: uploadError } = await supabase.storage
      .from("category-images")
      .upload(filePath, file, {
        upsert: true  // ← ADD THIS LINE
      });

    if (uploadError) {
      console.error("Upload error details:", uploadError);
      throw uploadError;
    }

    // 4. Get public URL from same bucket
    const { data: urlData } = supabase.storage
      .from("category-images")
      .getPublicUrl(filePath);

    const imageUrl = urlData.publicUrl;

    // 5. Update category table
    const { data, error: updateError } = await supabase
      .from("categories")
      .update({
        image_url: imageUrl,
        name: categoryName,
      })
      .eq("id", categoryId)
      .select()
      .single();

    if (updateError) throw updateError;

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}


export async function deleteCategory(categoryId) {
  const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", categoryId)
    .select(); 

  if (error) throw error;

  return data;
}