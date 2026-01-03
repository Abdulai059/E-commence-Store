import { formatCurrency } from "../../utils/helpers";

function CheckoutItems({ item }) {
  const { image, name, quantity, unitPrice } = item;

  return (
    <div className="flex gap-4">
      <img src={image} alt={name} className="h-20 w-20 rounded-md object-cover" />

      <div className="flex-1 text-sm md:text-base">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <p className="text-gray-500">Qty: {quantity}</p>
        <p className="text-gray-500">{formatCurrency(unitPrice)}</p>
      </div>

      <div className="text-right text-sm md:text-base">
        <p className="font-medium text-gray-800">{formatCurrency(quantity * unitPrice)}</p>
      </div>
    </div>
  );
}

export default CheckoutItems;
