import TableSkeleton from "../skeleton/TableSkeleton";
import TableHeader from "../ui/TableHeader";
import { Snippet } from "@heroui/snippet";
import Menus from "../ui/Menus";
import { HiPhoto, HiPlus, HiTag } from "react-icons/hi2";
import Modal from "../ui/Modal";
import AddProductForm from "./AddProductForm";
import AddImages from "./AddImages";
import AddCategory from "./AddCategory";

const columns = [
  { label: "Product", key: "product" },
  { label: "Category", key: "category" },
  { label: "ProductId", key: "product" },
  { label: "Add Product", key: "add" },
];

function AddProductTable({ isLoading, products: product, categories }) {
  return (
    <div className="flex w-5xl flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
      <table className="w-5xl table-auto">
        {isLoading ? (
          <TableSkeleton columns={columns} />
        ) : (
          <>
            <TableHeader columns={columns} />
            <tbody className="text-sm text-gray-700">
              {categories.map((category, index) => {
                // Get main image for this product
                const mainImage =
                  product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "";

                return (
                  <tr key={category.id} className="border-t">
                    {/** PRODUCT CELL */}
                    <td className="flex items-center gap-3 px-4 py-3">
                      <div className="h-16 w-16 overflow-hidden rounded border border-gray-200">
                        <img
                          src={category.image_url}
                          alt={category.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="truncate">{category.name}</span>
                    </td>

                    {/** CATEGORY */}
                    <td className="px-4 py-3">{category.name || "—"}</td>

                    {/** PRICE */}
                    <td className="hidden px-4 py-3 font-medium md:table-cell">
                      <Snippet size="lg" symbol="" hideCopyButton={false}>
                        {category.id}
                      </Snippet>
                    </td>

                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <Modal>
                        <Menus>
                          <Menus.Menu>
                            <Modal.Open opens="view-order">
                              <button
                                onClick={() => setSelectedOrder(order)}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-900"
                              >
                                <Eye className="h-4 w-4" />
                                View
                              </button>
                            </Modal.Open>
                          </Menus.Menu>
                        </Menus>

                        <Modal.Window name="view-order">
                          <AddImages />
                        </Modal.Window>
                      </Modal>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}

export default AddProductTable;
