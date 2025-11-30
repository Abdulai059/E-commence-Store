import supabase, { supabaseUrl } from "./supabase";

export async function createProductImage(productId, file, productName = null) {
  const isExisting = file?.startsWith?.(supabaseUrl);

  const imageName = `${productId}-${crypto.randomUUID()}-${file.name}`.replaceAll("/", "");

  const filePath = `product-images/${imageName}`;

  const imageUrl = isExisting
    ? file
    : `${supabaseUrl}/storage/v1/object/public/product-images/${filePath}`;

  // Count images
  const { count } = await supabase
    .from("product_images")
    .select("id", { count: "exact", head: true })
    .eq("product_id", productId);

  const position = (count || 0) + 1;

  const { data, error } = await supabase
    .from("product_images")
    .insert({
      product_id: productId,
      image_url: imageUrl,
      position,
      product_name: productName,
    })
    .select()
    .single();

  if (error) throw error;

  if (!isExisting) {
    const { error: storageError } = await supabase.storage
      .from("product-images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (storageError) {
      await supabase.from("product_images").delete().eq("id", data.id);
      throw new Error("Upload failed → rollback");
    }
  }

  return data;
}
