export default function SupportRequestForm() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-slate-200">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-200">
          <h1 className="text-xl font-semibold text-slate-900">
            Submit a Request
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Provide details below and our support team will review your request.
          </p>
        </div>

        {/* Form */}
        <form className="px-8 py-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormSelect
              label="Request Type"
              options={[
                "Credit return request",
                "Technical issue",
                "General enquiry",
              ]}
            />

            <FormInput
              label="Your Email Address"
              type="email"
              placeholder="you@company.com"
            />
          </div>

          <FormSelect
            label="Reason for Credit Return"
            options={[
              "Invalid lead",
              "Duplicate lead",
              "Incorrect information",
              "Other",
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput
              label="Lead Name"
              placeholder="Lead full name"
            />

            <FormInput
              label="Lead Email (optional)"
              type="email"
              placeholder="lead@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Request Details
            </label>
            <textarea
              rows="4"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain why this request qualifies for a credit return..."
            />
            <p className="text-xs text-slate-400 mt-1">
              Be clear and concise to speed up review.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Attachment (optional)
            </label>
            <input
              type="file"
              className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:bg-slate-100 file:text-slate-700
              hover:file:bg-slate-200"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* Reusable components */

function FormInput({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

function FormSelect({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <select
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        <option value="">Select an option</option>
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
