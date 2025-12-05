import { Package, Clock, CheckCircle, XCircle } from "lucide-react";
import Stat from "./Stat";
import { useOrderStats } from "../../../AdminServices/orders/useOrderStats";

function Stats() {
  const { data, isLoading } = useOrderStats();

  // if (isLoading) return <p>Loading stats...</p>;

  const { totalOrders, pendingOrders, completedOrders, cancelledOrders } = data;

  return (
    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
      <Stat
        title="Total Orders"
        value={totalOrders}
        color="bg-blue-500"
        icon={<Package className="h-6 w-6 text-white" />}
      />
      <Stat
        title="Pending Orders"
        value={pendingOrders}
        color="bg-yellow-500"
        icon={<Clock className="h-6 w-6 text-white" />}
      />
      <Stat
        title="Completed Orders"
        value={completedOrders}
        color="bg-green-500"
        icon={<CheckCircle className="h-6 w-6 text-white" />}
      />
      <Stat
        title="Cancelled Orders"
        value={cancelledOrders}
        color="bg-red-500"
        icon={<XCircle className="h-6 w-6 text-white" />}
      />

      <Stat
        title="Completed Orders"
        value={completedOrders}
        color="bg-green-500"
        icon={<CheckCircle className="h-6 w-6 text-white" />}
      />
      <Stat
        title="Cancelled Orders"
        value={cancelledOrders}
        color="bg-red-500"
        icon={<XCircle className="h-6 w-6 text-white" />}
      />
    </div>
  );
}

export default Stats;
