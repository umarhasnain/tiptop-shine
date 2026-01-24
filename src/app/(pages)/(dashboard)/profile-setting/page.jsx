'use client';

import React from 'react';
import { FiTool, FiLoader } from 'react-icons/fi';

export default function PageUnderMaintenance() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-white px-6 text-center">
      
      {/* Animated Tool Icon */}
      <div className="mb-6 animate-bounce text-blue-500">
        <FiTool size={80} />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        🚧 Page Under Maintenance
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto">
        Oops! This page is getting a little shine. We'll be back shortly with a better experience.
      </p>

      {/* Loader / Spinner */}
      <div className="flex justify-center mb-6">
        <FiLoader className="animate-spin text-blue-500" size={40} />
      </div>

      {/* Call-to-Actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition font-semibold"
        >
          Go to Homepage
        </a>
        <a
          href="/help-center/request-form"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
        >
          Contact Support
        </a>
      </div>

      {/* Footer */}
      <p className="text-gray-400 mt-10 text-sm">
        &copy; {new Date().getFullYear()} TipTop-Shine. All rights reserved.
      </p>
    </div>
  );
}
