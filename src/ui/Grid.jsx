export function Grid({ 
  children,
  columns = { base: 1, sm: 2, lg: 4 },
  gap = 8,
  className = ""
}) {
  return (
    <div 
      className={`grid grid-cols-${columns.base} gap-${gap} sm:grid-cols-${columns.sm} lg:grid-cols-${columns.lg} ${className}`}
    >
      {children}
    </div>
  );
}