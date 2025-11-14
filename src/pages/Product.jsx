import ProductFeature from '../components/products/ProductFeature';
import { productsdata } from '../components/products/ProductsData';

function Product() {
  return (
    <div>
      <ProductFeature productsdata={productsdata} />
      {/* <Productimg /> */}
    </div>
  );
}

export default Product;

