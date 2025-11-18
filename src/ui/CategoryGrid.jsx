export function CategoryGrid({ data, renderItem }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
      {data.map((item) => renderItem(item))}
    </div>
  );
}
