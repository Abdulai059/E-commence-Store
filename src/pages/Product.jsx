import ProductsSection from '../components/products/ProductsSection';
import { productsdata } from '../components/products/ProductsData';

function Product() {
  return (
    <div>
      <ProductsSection productsdata={productsdata} />
      {/* <Productimg /> */}
    </div>
  );
}

export default Product;

