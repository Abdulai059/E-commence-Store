function ToggleSwitch({ checked, onChange, label }) {
  return (
    <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <div className="peer h-7 w-12 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-blue-600"></div>
      <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
}

export default ToggleSwitch;
