export function RadioGroup({ label, name, value, onChange, options }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-normal text-slate-400 mb-1.5">
        {label}
      </label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="inline-flex items-center gap-2 cursor-pointer group"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 accent-cyan-500 cursor-pointer"
            />
            <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
