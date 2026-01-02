import TableHeader from "../ui/TableHeader";
import { Snippet } from "@heroui/snippet";
import Menus from "../ui/Menus";
import { HiPlus, HiTag, HiTrash } from "react-icons/hi2";
import Modal from "../ui/Modal";

import AddCategory from "./AddCategory";
import CategoryTableSkeleton from "../skeleton/CategoryTableSkeleton";
import CategoryEditForm from "../product/CategoryEditForm";
import { useDeleteCategory } from "../../hooks/useDeleteCategory";
import ConfirmDelete from "../ui/ConfirmDelete";

const columns = [
  { label: "Product", key: "product" },
  { label: "Category", key: "category" },
  { label: "Description", key: "description" },
  { label: "ProductId", key: "product" },
  { label: "Add Product", key: "add" },
];

function AddProductTable({ isLoading, categories }) {
  const categoryList = Array.isArray(categories) ? categories : [];
  const { deleteCategory, isLoading: deleting } = useDeleteCategory();

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
                        src={category.image_url || ""}
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
                              <Menus.Button icon={<HiPlus />}>
                                Add Category
                              </Menus.Button>
                            </Modal.Open>


                            <Modal.Open opens="editcategory">
                              <Menus.Button icon={<HiTag />}>
                                Edit Category
                              </Menus.Button>
                            </Modal.Open>


                            <Modal.Open opens="deletecategory">
                              <Menus.Button icon={<HiTrash />} className="text-red-600">
                                Delete Category
                              </Menus.Button>
                            </Modal.Open>
                          </Menus.List>
                        </Menus.Menu>
                      </Menus>

                      {/* Modals */}
                      <Modal.Window name="addcategory">
                        <AddCategory />
                      </Modal.Window>

                      <Modal.Window name="editcategory">
                        <CategoryEditForm category={category} />
                      </Modal.Window>

                      <Modal.Window name="deletecategory">
                        <ConfirmDelete
                          resourceName={category.name}
                          disabled={deleting}
                          onConfirm={() => deleteCategory(category.id)}
                        />
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
