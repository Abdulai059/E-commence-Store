import ProductFeature from "../components/products/ProductFeature";
import { products } from '../components/products/ProductsData';


function Product() {
  return (
    <div>
      <ProductFeature  products={products}/>
    </div>
  );
}

export default Product;
