export function ProjectGrid({ data, renderItem }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {data.map((item) => renderItem(item))}
    </div>
  );
}
