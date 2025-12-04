const StatsCards = ({ stats }) => (
  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat, idx) => (
      <div key={idx} className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
          <div className={`${stat.color} rounded-lg p-3`}>
            <stat.icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default StatsCards;
