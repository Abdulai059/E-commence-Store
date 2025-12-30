function RadioCheckbox({ type = "radio", name, value, checked, onChange }) {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 peer-checked:after:absolute peer-checked:after:h-2.5 peer-checked:after:w-2.5 peer-checked:after:rounded-full peer-checked:after:bg-blue-600 peer-checked:after:content-['']"></span>
     
    </div>
  );
}

export default RadioCheckbox;
