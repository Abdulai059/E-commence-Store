export function ProjectGrid({ data, renderItem, className = "" }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 ${className}`}>
      {data.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
