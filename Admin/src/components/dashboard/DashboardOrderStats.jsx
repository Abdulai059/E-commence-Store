function DashboardOrderStats() {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white shadow-lg">
        <h3 className="mb-4 text-lg font-semibold">Today's Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-indigo-100">Total Orders</span>
            <span className="text-2xl font-bold">48</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-indigo-100">Pending</span>
            <span className="text-2xl font-bold">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-indigo-100">Delivered</span>
            <span className="text-2xl font-bold">36</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <div className="rounded-full bg-green-100 p-1.5">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Order #1234 delivered</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <div className="rounded-full bg-blue-100 p-1.5">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">New order received</p>
              <p className="text-xs text-gray-500">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <div className="rounded-full bg-orange-100 p-1.5">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Payment confirmed</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOrderStats;
