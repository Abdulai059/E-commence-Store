import { useState } from "react";
import { TrendingUp, ShoppingCart, Users, DollarSign, Package, Eye } from "lucide-react";
import DashboardOrderStats from "./DashboardOrderStats";

export default function AsingDeiver() {
  const [timeRange, setTimeRange] = useState("monthly");
  // const { data: topProducts, isLoading, error } = useTopProducts(5);

  // Mock data
  const stats = {
    totalSales: 48590.5,
    totalOrders: 342,
    avgOrderValue: 142.08,
    // totalCustomers: 1248,
    conversionRate: 3.2,
  };

  const topProducts = [
    { id: 1, name: "Wireless Headphones Pro", image: "🎧", units: 156, revenue: 23400, stock: 45 },
    { id: 2, name: "Smart Watch Series 5", image: "⌚", units: 128, revenue: 38400, stock: 23 },
    { id: 3, name: "Laptop Stand Aluminum", image: "💻", units: 94, revenue: 4700, stock: 67 },
    { id: 4, name: "USB-C Hub 7-in-1", image: "🔌", units: 87, revenue: 3480, stock: 12 },
    { id: 5, name: "Mechanical Keyboard RGB", image: "⌨️", units: 76, revenue: 11400, stock: 34 },
  ];

  const recentOrders = [
    {
      id: "ORD-1047",
      customer: "Sarah Johnson",
      status: "Shipped",
      payment: "Paid",
      date: "2024-12-06",
      amount: 299.99,
    },
    {
      id: "ORD-1046",
      customer: "Michael Chen",
      status: "Processing",
      payment: "Paid",
      date: "2024-12-06",
      amount: 156.5,
    },
    {
      id: "ORD-1045",
      customer: "Emily Davis",
      status: "Delivered",
      payment: "Paid",
      date: "2024-12-05",
      amount: 432.0,
    },
    {
      id: "ORD-1044",
      customer: "James Wilson",
      status: "Pending",
      payment: "Pending",
      date: "2024-12-05",
      amount: 89.99,
    },
    {
      id: "ORD-1043",
      customer: "Lisa Anderson",
      status: "Shipped",
      payment: "Paid",
      date: "2024-12-04",
      amount: 567.25,
    },
    {
      id: "ORD-1042",
      customer: "David Brown",
      status: "Delivered",
      payment: "Paid",
      date: "2024-12-04",
      amount: 234.8,
    },
  ];

  const StatCard = ({ title, value, icon: Icon, trend, color }) => (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{value}</h3>
          {trend && (
            <p className="mt-2 flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              {trend}
            </p>
          )}
        </div>
        <div className={`rounded-lg ${color} p-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Pending":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentColor = (payment) => {
    return payment === "Paid" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800";
  };

  const getStockStatus = (stock) => {
    if (stock <= 15) return { color: "text-red-600", label: "Low Stock" };
    if (stock <= 30) return { color: "text-yellow-600", label: "Medium" };
    return { color: "text-green-600", label: "In Stock" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="mx-auto max-w-full">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="daily">Today</option>
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Sales"
            value={`$${stats.totalSales.toLocaleString()}`}
            icon={DollarSign}
            trend="+12.5% from last month"
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <StatCard
            title="Total Orders"
            value={stats.totalOrders.toLocaleString()}
            icon={ShoppingCart}
            trend="+8.2% from last month"
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          <StatCard
            title="Avg Order Value"
            value={`$${stats.avgOrderValue.toFixed(2)}`}
            icon={TrendingUp}
            trend="+5.1% from last month"
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          {/* <StatCard
            title="Total Customers"
            value={stats.totalCustomers.toLocaleString()}
            icon={Users}
            trend="+15.3% from last month"
            color="bg-gradient-to-br from-orange-500 to-orange-600"
          /> */}
          <StatCard
            title="Conversion Rate"
            value={`${stats.conversionRate}%`}
            icon={Package}
            trend="+0.8% from last month"
            color="bg-gradient-to-br from-pink-500 to-pink-600"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Top Selling Products - Takes 1 column */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Top Selling Products</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {topProducts.map((product) => {
                const stockStatus = getStockStatus(product.stock);
                return (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-2xl">
                      {product.image}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 text-xs text-gray-600">
                        <span>{product.units} sold</span>
                        <span className="font-semibold text-gray-900">
                          ${product.revenue.toLocaleString()}
                        </span>
                      </div>
                      <p className={`mt-1 text-xs font-medium ${stockStatus.color}`}>
                        {product.stock} units • {stockStatus.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Orders - Takes 2 columns */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View All Orders
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Order ID
                    </th>
                    <th className="pb-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Customer
                    </th>
                    <th className="pb-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Status
                    </th>
                    <th className="pb-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Payment
                    </th>
                    <th className="pb-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Date
                    </th>
                    <th className="pb-3 text-right text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Amount
                    </th>
                    <th className="pb-3 text-right text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="transition-colors hover:bg-gray-50">
                      <td className="py-4 text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="py-4 text-sm text-gray-700">{order.customer}</td>
                      <td className="py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getPaymentColor(order.payment)}`}
                        >
                          {order.payment}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-gray-600">{order.date}</td>
                      <td className="py-4 text-right text-sm font-semibold text-gray-900">
                        ${order.amount.toFixed(2)}
                      </td>
                      <td className="py-4 text-right">
                        <button className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100">
                          <Eye className="h-4 w-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <DashboardOrderStats />
        </div>
      </div>
    </div>
  );
}
