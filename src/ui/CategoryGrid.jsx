export function CategoryGrid({ data, renderItem }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl">
      {data.map((item) => renderItem(item))}
    </div>
  );
}
