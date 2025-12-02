function InputField({ label, className, ...rest }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        <span className="text-red-500">*</span> {label}
      </label>
      
      <input
        {...rest}
        className={
          className ??
          "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-red-50"
        }
      />
    </div>
  );
}

export default InputField;
