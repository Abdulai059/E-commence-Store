import { formatCurrency } from "../../utils/helpers";

function ProductPrice({ price, offerPrice, showTaxes = true }) {
  return (
    <div className="mt-6 rounded-lg bg-red-50 p-4">
      <p className="text-gray-500/70 line-through">Price: {formatCurrency(price)}</p>
      <p className="text-md py-1.5 font-medium md:text-2xl">
        Offer Price: {formatCurrency(offerPrice)}
      </p>
      {showTaxes && <span className="text-gray-500/70">(inclusive of all delivery fees)</span>}
    </div>
  );
}

export default ProductPrice;
