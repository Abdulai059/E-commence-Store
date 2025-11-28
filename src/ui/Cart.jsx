import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";

function Cart({cart}) {
 const Subtotal = cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);


  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="relative flex items-center justify-center rounded-full border-0 bg-transparent p-2 hover:bg-red-100"
      >
        <div className="indicator">
          <ShoppingCart className="text-red-600" />
          <span className="indicator-item rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            {cart.length}
          </span>
        </div>
      </div>

      <div
        tabIndex={0}
        className="card card-compact dropdown-content z-10 mt-3 w-56 overflow-hidden rounded-lg bg-slate-50 shadow-lg"
      >
        <div className="card-body text-slate-100">
          <span className="text-lg font-semibold text-red-600">{cart.length} Items</span>
          <span className="text-gray-600 font-medium">Subtotal: {formatCurrency(Subtotal)}</span>
          <div className="card-actions">
            <Link
              to="/cart"
              className="block w-full rounded bg-gradient-to-r from-red-400 to-red-500 px-4 py-2 text-center font-medium text-white shadow-md transition-all hover:from-red-500 hover:to-red-600"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
