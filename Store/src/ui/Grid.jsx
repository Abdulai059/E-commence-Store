export function Grid({ children, columns = { base: 1, sm: 2, lg: 4 }, gap = 8, className = "" }) {
  // Map numbers to Tailwind classes
  const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  };

  const gapMap = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
  };

  return (
    <div
      className={`grid ${colMap[columns.base] || "grid-cols-1"} sm:${colMap[columns.sm] || "grid-cols-2"} lg:${colMap[columns.lg] || "grid-cols-4"} ${gapMap[gap] || "gap-4"} ${className} `}
    >
      {children}
    </div>
  );
}
