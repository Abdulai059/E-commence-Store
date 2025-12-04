function Stat({ icon, title, value, color }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`${color} rounded-lg p-3`}>{icon}</div>
      </div>
    </div>
  );
}

export default Stat;
