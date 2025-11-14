import supabase from './supabase';

export async function getProducts() {
  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (productsError) throw productsError;

  // fetch all images separately
  const { data: images, error: imagesError } = await supabase
    .from('product_images')
    .select('*');

  if (imagesError) throw imagesError;

  // attach images to products
  const productsWithImages = products.map(product => ({
    ...product,
    product_images: images.filter(img => img.product_id === product.id),
  }));

  return productsWithImages;
}
