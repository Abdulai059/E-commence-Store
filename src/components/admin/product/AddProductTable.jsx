import TableSkeleton from "../../../AdminServices/Skeleton/TableSkeleton";
import TableHeader from "../../../ui/TableHeader";
import { Snippet } from "@heroui/snippet";
import Menus from "../../../ui/Menus";
import { HiPhoto, HiPlus, HiTag } from "react-icons/hi2";
import Modal from "../../../ui/Modal";
import AddProductForm from "./AddProductForm";

const columns = [
  { label: "Product", key: "product" },
  { label: "Category", key: "category" },
  { label: "ProductId", key: "product" },
  { label: "Add Product", key: "add" },
];

function AddProductTable({ isLoading, products }) {
  console.log(products);

  return (
    <div className="flex w-5xl flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
      <table className="w-5xl table-auto">
        {isLoading ? (
          <TableSkeleton columns={columns} />
        ) : (
          <>
            <TableHeader columns={columns} />
            <tbody className="text-sm text-gray-700">
              {products.map((product, index) => {
                // Get main image for this product
                const mainImage =
                  product.product_images?.[0]?.image_url || product.images?.[0]?.image_url || "";

                return (
                  <tr key={product.id} className="border-t">
                    {/** PRODUCT CELL */}
                    <td className="flex items-center gap-3 px-4 py-3">
                      <div className="h-16 w-16 overflow-hidden rounded border border-gray-200">
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="truncate">{product.name}</span>
                    </td>

                    {/** CATEGORY */}
                    <td className="px-4 py-3">{product.category?.name || "—"}</td>

                    {/** PRICE */}
                    <td className="hidden px-4 py-3 font-medium md:table-cell">
                      <Snippet size="lg" symbol="" hideCopyButton={false}>
                        {product.id}
                      </Snippet>
                    </td>

                    <td className="pl-6">
                      <Modal>
                        <Menus>
                          <Menus.Menu>
                            <Menus.Toggle id={product.id} />

                            <Menus.List id={product.id}>
                              <Modal.Open opens="add">
                                <Menus.Button icon={<HiPlus size={18} />}>Add Product</Menus.Button>
                              </Modal.Open>

                              <Modal.Open opens="addImage">
                                <Menus.Button icon={<HiPhoto size={18} />}>Add Image</Menus.Button>
                              </Modal.Open>

                              <Menus.Button icon={<HiTag size={18} />}>Add Category</Menus.Button>
                            </Menus.List>
                          </Menus.Menu>
                        </Menus>

                        <Modal.Window name="add">
                          <AddProductForm />
                        </Modal.Window>

                        <Modal.Window name="addImage">
                          <div>Add Image Form Here</div>
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
