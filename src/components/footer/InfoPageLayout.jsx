"use client";

export default function InfoPageLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-20">

      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          {subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12 border">
        {children}
      </div>

    </div>
  );
}