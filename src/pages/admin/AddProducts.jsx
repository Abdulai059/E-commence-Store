import AddProductTable from "../../components/admin/AddProductTable";
import { useAllProducts } from "../../hooks/admin/useAllProducts";

function AddProducts() {
  const { isLoading, products, count } = useAllProducts();

  return (
    <div className="pt-20 pl-30 w-full">
      <AddProductTable isLoading={isLoading} products={products} />
    </div>
  );
}

export default AddProducts;

// return (
//     <div className="flex flex-col justify-between items-center bg-white py-10">
//       <form className="max-w-lg space-y-5 p-4 md:p-10">
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="mt-2 flex flex-wrap items-center gap-3">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label key={index} htmlFor={`image${index}`}>
//                   <input accept="image/*" type="file" id={`image${index}`} hidden />
//                   <img
//                     className="max-w-24 cursor-pointer"
//                     src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
//                     alt="uploadArea"
//                     width={100}
//                     height={100}
//                   />
//                 </label>
//               ))}
//           </div>
//         </div>
//         <div className="flex max-w-md flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             placeholder="Type here"
//             className="rounded border border-gray-500/40 px-3 py-2 outline-none md:py-2.5"
//             required
//           />
//         </div>
//         <div className="flex max-w-md flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="product-description">
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             rows={4}
//             className="resize-none rounded border border-gray-500/40 px-3 py-2 outline-none md:py-2.5"
//             placeholder="Type here"
//           ></textarea>
//         </div>
//         <div className="flex w-full flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="category">
//             Category
//           </label>
//           <select
//             id="category"
//             className="rounded border border-gray-500/40 px-3 py-2 outline-none md:py-2.5"
//           >
//             <option value="">Select Category</option>
//             {[{ name: "Electronics" }, { name: "Clothing" }, { name: "Accessories" }].map(
//               (item, index) => (
//                 <option key={index} value={item.name}>
//                   {item.name}
//                 </option>
//               ),
//             )}
//           </select>
//         </div>
//         <div className="flex flex-wrap items-center gap-5">
//           <div className="flex w-32 flex-1 flex-col gap-1">
//             <label className="text-base font-medium" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               placeholder="0"
//               className="rounded border border-gray-500/40 px-3 py-2 outline-none md:py-2.5"
//               required
//             />
//           </div>
//           <div className="flex w-32 flex-1 flex-col gap-1">
//             <label className="text-base font-medium" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               placeholder="0"
//               className="rounded border border-gray-500/40 px-3 py-2 outline-none md:py-2.5"
//               required
//             />
//           </div>
//         </div>
//         <button className="rounded bg-indigo-500 px-8 py-2.5 font-medium text-white">ADD</button>
//       </form>
//     </div>
//   );
