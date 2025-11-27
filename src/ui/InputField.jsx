function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700 sm:mb-2 sm:text-sm">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:ring-2 focus:ring-red-50 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
      />
    </div>
  );
}

export default InputField;
