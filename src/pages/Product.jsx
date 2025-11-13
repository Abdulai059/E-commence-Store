import ProductFeature from '../components/products/ProductFeature';
import { products } from '../components/products/ProductsData';

function Product() {
  return (
    <div>
      <ProductFeature />
      {/* <Productimg /> */}
    </div>
  );
}

export default Product;

// export function Productimg() {
//   return (
//     <div>
//       <h1 className="mx-5 mb-2 text-center text-3xl font-medium text-slate-800">New Arrivals</h1>
//       <p className="mx-5 mb-10 text-center text-slate-600">
//         Explore the latest additions to our collection.
//       </p>
//       <section className="flex flex-wrap items-center justify-center gap-6">
//         <a href="#" className="group w-70">
//           <img
//             className="h-72 w-full rounded-lg object-cover object-top transition-all duration-300 group-hover:shadow-xl hover:-translate-y-0.5"
//             src="/SAMSUNGTV.jpg"
//             alt="image"
//           />
//           <p className="mt-2 text-sm">White crew-Neck T-Shirt</p>
//           <p className="text-xl">$ 29.00</p>
//         </a>
//         <a href="#" className="group w-70">
//           <img
//             className="h-72 w-full rounded-lg object-cover object-right transition-all duration-300 group-hover:shadow-xl hover:-translate-y-0.5"
//             src="/aircon.webp"
//             alt="image"
//           />
//           <p className="mt-2 text-sm">White crew-Neck T-Shirt</p>
//           <p className="text-xl">$ 39.00</p>
//         </a>
//         <a href="#" className="group w-70">
//           <img
//             className="h-72 w-full rounded-lg object-cover object-right transition-all duration-300 group-hover:shadow-xl hover:-translate-y-0.5"
//             src="/Microwavev.jpg"
//             alt="image"
//           />
//           <p className="mt-2 text-sm">White crew-Neck T-Shirt</p>
//           <p className="text-xl">$ 49.00</p>
//         </a>
//         <a href="#" className="group w-70">
//           <img
//             className="h-72 w-full rounded-lg object-cover object-right transition-all duration-300 group-hover:shadow-xl hover:-translate-y-0.5"
//             src="/deepfridzer.jpg"
//             alt="image"
//           />
//           <p className="mt-2 text-sm">White crew-Neck T-Shirt</p>
//           <p className="text-xl">$ 29.00</p>
//         </a>
//       </section>
//     </div>
//   );
// }
