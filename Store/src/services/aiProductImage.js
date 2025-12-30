import supabase from "./supabase";

export async function createProductImage(productId, file, productName) {
  try {
    // Sanitize filename
    const safeFileName = file.name.replaceAll(/[^a-zA-Z0-9.-]/g, "_");
    const filePath = `${productId}/${Date.now()}-${safeFileName}`;

    // 1. Upload to bucket
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // 2. Get public URL
    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    const imageUrl = urlData.publicUrl;

    // 3. Get current count
    const { data: existingImages, error: fetchError } = await supabase
      .from("product_images")
      .select("*")
      .eq("product_id", productId);

    if (fetchError) throw fetchError;

    const position = (existingImages?.length || 0) + 1;

    // 4. Insert row
    const { data, error: insertError } = await supabase
      .from("product_images")
      .insert([
        {
          product_id: productId,
          image_url: imageUrl,
          position,
          product_name: productName,
        },
      ])
      .select();

    if (insertError) throw insertError;

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
