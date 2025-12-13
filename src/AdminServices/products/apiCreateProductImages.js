import supabase, { supabaseUrl } from "../../services/supabase";

export async function createProductImages(productImages) {
  const uploadedImages = [];
  const errors = [];

  for (const newProductImage of productImages) {
    try {
      // Check if image already has a full Supabase URL
      const hasImagePath = newProductImage.image_url?.startsWith?.(supabaseUrl);

      // Generate unique image name and construct full path
      const imageName = `${Math.random()}-${newProductImage.image_url.name}`.replaceAll("/", "");
      const imagePath = hasImagePath
        ? newProductImage.image_url
        : `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

      // Insert product image record into database
      const { data, error } = await supabase
        .from("product_images")
        .insert([
          {
            product_id: newProductImage.product_id,
            image_url: imagePath,
            position: newProductImage.position,
            product_name: newProductImage.product_name,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Database insert error:", error);
        errors.push({ position: newProductImage.position, error });
        continue;
      }

      // Skip storage upload if image URL already exists
      if (hasImagePath) {
        uploadedImages.push(data);
        continue;
      }

      // Upload image file to Supabase Storage
      const { error: storageError } = await supabase.storage
        .from("product-images")
        .upload(imageName, newProductImage.image_url);

      // Rollback database record if storage upload fails
      if (storageError) {
        await supabase.from("product_images").delete().eq("id", data.id);
        console.error("Storage upload error:", storageError);
        errors.push({ position: newProductImage.position, error: storageError });
        continue;
      }

      uploadedImages.push(data);
    } catch (err) {
      console.error("Unexpected error:", err);
      errors.push({ position: newProductImage.position, error: err });
    }
  }

  if (errors.length > 0) {
    console.warn(`${errors.length} image(s) failed to upload:`, errors);
  }

  return { uploadedImages, errors };
}
