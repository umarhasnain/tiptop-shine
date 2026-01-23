'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/Fram99.png"
            alt="Logo"
            width={80}
            height={80}
            className="drop-shadow-md"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Login to your account 👋
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="✉ Email Address"
            className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="🔒 Password"
            className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-blue-600" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <hr className="flex-1 border-gray-300" />
            OR
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Magic Link */}
          <button
            type="button"
            className="w-full border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Login with Magic Link
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-blue-600 font-medium hover:underline">
              Create one
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}
