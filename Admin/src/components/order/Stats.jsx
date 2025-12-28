import { Package, Clock, CheckCircle, XCircle, Truck, Loader } from "lucide-react";
import Stat from "./Stat";
import { useOrderStats } from "../../api/orders/useOrderStats";
import StateSkeleton from "../skeleton/StateSkeleton";

function Stats() {
  const { data, isLoading } = useOrderStats();

  if (isLoading) return <StateSkeleton />;

  const {
    totalOrders,
    pendingOrders,
    processingdOrders,
    cancelledOrders,
    shippedOrders,
    deliveredOrders,
  } = data;

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
        title="Processing Orders"
        value={processingdOrders}
        color="bg-green-500"
        icon={<Loader className="h-6 w-6 text-white" />}
      />
      <Stat
        title="Shipped Orders"
        value={shippedOrders}
        color="bg-purple-500 "
        icon={<Truck className="h-6 w-6 text-white" />}
      />
      <Stat
        title="Delivered Orders"
        value={deliveredOrders}
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
