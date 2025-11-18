import supabase from './supabase';

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      id,
      name,
      description,
      price,
      offer_price,
      stock_quantity,
      categories(id, name, description),
      created_at,
      product_images(id, image_url, position)
    `,
    )
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    throw new Error('Products could not be loaded');
  }

  return data.map((product) => ({
    ...product,
    images: product.product_images || [], // ensure `images` is always an array
    category: product.categories || null,
  }));
}
