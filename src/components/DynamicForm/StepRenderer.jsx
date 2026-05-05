'use client';

export default function StepRenderer({ question, value, onChange }) {
  const { type, label, key, options } = question;

  return (
    <div>
      <label className="block text-lg font-semibold mb-3">
        {label}
      </label>

      {type === 'textarea' && (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      )}

      {type === 'select' && (
        <select
          value={value || ''}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Select</option>
          {options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>
      )}

      {(type === 'text' ||
        type === 'email' ||
        type === 'number' ||
        type === 'date') && (
        <input
          type={type}
          value={value || ''}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      )}

      {type === 'checkbox' && (
        <div className="space-y-2">
          {options.map((opt, i) => (
            <label key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  const checked = value || [];
                  if (e.target.checked) {
                    onChange(key, [...checked, opt]);
                  } else {
                    onChange(
                      key,
                      checked.filter((v) => v !== opt)
                    );
                  }
                }}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}