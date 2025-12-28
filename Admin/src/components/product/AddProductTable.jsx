import TableHeader from "../ui/TableHeader";
import { Snippet } from "@heroui/snippet";
import Menus from "../ui/Menus";
import { HiPlus, HiTag } from "react-icons/hi2";
import Modal from "../ui/Modal";

import AddCategory from "./AddCategory";
import CategoryTableSkeleton from "../skeleton/CategoryTableSkeleton";

const columns = [
  { label: "Product", key: "product" },
  { label: "Category", key: "category" },
  { label: "Description", key: "description" },
  { label: "ProductId", key: "product" },
  { label: "Add Product", key: "add" },
];

function AddProductTable({ isLoading, products, categories }) {
  const categoryList = Array.isArray(categories) ? categories : [];
  const productList = products || [];
  const mainProduct = productList[0] || {};

  const mainImage =
    mainProduct.product_images?.[0]?.image_url || mainProduct.images?.[0]?.image_url || "";

  return (
    <span className="w-8xl flex flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
      <table className="w-8xl table-auto">
        {isLoading ? (
          <CategoryTableSkeleton columns={columns} />
        ) : (
          <>
            <TableHeader columns={columns} />
            <tbody className="text-sm text-gray-700">
              {categoryList.map((category) => (
                <tr key={category.id} className="border-t">
                  <td className="flex items-center gap-3 px-4 py-3">
                    <div className="h-16 w-16 overflow-hidden rounded border border-gray-200">
                      <img
                        src={category.image_url || mainImage}
                        alt={category.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>

                  <td className="px-4 py-3">{category.name}</td>
                  <td className="px-4 py-3">{category.description}</td>

                  <td className="hidden px-4 py-3 font-medium md:table-cell">
                    <Snippet size="lg" symbol="" hideCopyButton={false}>
                      {category.id}
                    </Snippet>
                  </td>

                  <td className="pl-6">
                    <Modal>
                      <Menus>
                        <Menus.Menu>
                          <Menus.Toggle>Actions</Menus.Toggle>
                          <Menus.List>
                            <Modal.Open opens="addcategory">
                              <Menus.Button icon={<HiPlus size={18} />}>Add Category</Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="editcategory">
                              <Menus.Button icon={<HiTag size={18} />}>Edit Category</Menus.Button>
                            </Modal.Open>
                          </Menus.List>
                        </Menus.Menu>
                      </Menus>

                      <Modal.Window name="addcategory">
                        <AddCategory />
                      </Modal.Window>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
    </span>
  );
}

export default AddProductTable;
