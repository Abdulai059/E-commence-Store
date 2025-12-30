import ToggleSwitch from "./ToggleSwitch";
import { formatCurrency } from "../../utils/helpers";
import TableHeader from "./TableHeader";
import Modal from "./Modal";
import Menus from "./Menus";
import { HiPhoto, HiPlus, HiTag } from "react-icons/hi2";
import AddProductForm from "../product/AddProductForm";
import ProductImageForm from "../product/ProductImageForm";
import { useNavigate } from "react-router-dom";

function ProductRow({ product, index, onStockChange }) {
  const navigate = useNavigate();

  const {
    id,
    name,
    category,
    price,
    offer_price,
    description,
    stock_quantity,
    in_stock,
    product_images,
    images,
  } = product;

  const mainImage = product_images?.[0]?.image_url || images?.[0]?.image_url || null;

  return (
    <tr className="border-t">
      <td className="flex items-center gap-3 px-4 py-3">
        <div className="h-16 w-16 overflow-hidden rounded border border-gray-200">
          <img src={mainImage} alt={name} className="h-full w-full object-cover" />
        </div>
        <span className="truncate">{name}</span>
      </td>

      <td className="px-4 py-3">{category?.name || "—"}</td>

      <td className="hidden px-4 py-3 font-medium text-red-600 md:table-cell">
        {formatCurrency(price)}
      </td>

      <td className="hidden px-4 py-3 font-medium text-green-600 md:table-cell">
        {formatCurrency(offer_price)}
      </td>

      <td className="px-4 py-3">{description || "—"}</td>

      <td className="px-8 py-3">{stock_quantity ?? "—"}</td>

      <td className="px-4 py-3">
        <ToggleSwitch checked={in_stock} onChange={() => onStockChange(index)} />
      </td>

      <td className="pl-6">
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle>Actions</Menus.Toggle>
              <Menus.List>
                <Modal.Open opens="addproduct">
                  <Menus.Button icon={<HiPlus size={18} />}>Add Product</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="addimage">
                  <Menus.Button icon={<HiPhoto size={18} />}>Add Image</Menus.Button>
                </Modal.Open>

                <Menus.Button
                  onClick={() => navigate(`/product/${id}`)}
                  icon={<HiTag size={18} />}
                >
                  View Details
                </Menus.Button>
              </Menus.List>
            </Menus.Menu>
          </Menus>

          <Modal.Window name="addproduct">
            <AddProductForm />
          </Modal.Window>

          <Modal.Window name="addimage">
            <ProductImageForm productId={id} initialProduct={{ id, name }} />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}

function Table({ products, columns, onStockChange }) {
  return (
    <div className="max-w-8xl flex w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
      <table className="w-full table-auto">
        <TableHeader columns={columns} />
        <tbody className="text-sm text-gray-700">
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              index={index}
              onStockChange={onStockChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
