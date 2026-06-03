import { Info } from 'lucide-react';

export function InputField({ label, name, value, onChange, placeholder = '', type = 'text', rows = 1, hint = '' }) {
  const baseClasses = "w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all";

  return (
    <div className="mb-4">
      <label className="block text-sm font-normal text-slate-400 mb-1">
        {label}
      </label>
      {hint && (
        <div className="flex items-start gap-1.5 mb-1.5">
          <Info className="w-3.5 h-3.5 text-slate-600 mt-0.5 flex-shrink-0" />
          <span className="text-xs text-slate-600 leading-relaxed">{hint}</span>
        </div>
      )}
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </div>
  );
}
