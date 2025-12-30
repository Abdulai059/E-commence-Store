function Checkbox({ checked, onChange, label }) {
  return (
    <label className="relative flex cursor-pointer items-center gap-3">
      <input type="checkbox" checked={checked} onChange={onChange} className="peer hidden" />
      <span className="relative flex h-5 w-5 items-center justify-center rounded border border-slate-300 peer-checked:border-red-600"></span>
      <svg
        className="absolute top-1/2 left-1 hidden -translate-y-1/2 transform peer-checked:inline"
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z"
          fill="#2563EB"
          stroke="#EF4444"
          strokeWidth="0.4"
        />
      </svg>
      <span className="text-sm text-gray-700 select-none">{label}</span>
    </label>
  );
}

export default Checkbox;
