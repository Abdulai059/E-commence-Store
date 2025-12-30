import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrdersTableRow({ order }) {
  const navigate = useNavigate();

  return (
    <td className="px-6 py-4 text-sm whitespace-nowrap">
      <button
        onClick={() => navigate(`/orders/${order.id}`)}
        className="flex items-center gap-1 text-blue-600 hover:text-blue-900"
      >
        <Eye className="h-4 w-4" />
        View
      </button>
    </td>
  );
}

export default OrdersTableRow;
