export default function StateSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-gray-50 p-6">
      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 h-4 w-20 rounded bg-gray-300"></div>
                <div className="h-7 w-12 rounded bg-gray-300"></div>
              </div>

              <div className="h-12 w-12 rounded-lg bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
