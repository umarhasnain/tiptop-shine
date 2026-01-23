'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        callbackUrl: "/dashboard",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-100 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 sm:p-8">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <Image
            src="/images/Fram99.png"
            alt="Logo"
            width={90}
            height={90}
            className="drop-shadow-md"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Create Account
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1 mb-6">
          Join us and start your journey 🚀
        </p>

        {/* Form */}
        <div className="space-y-4">

          {/* Full Name */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Username */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🧑</span>
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉</span>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Hint */}
          <p className="text-xs text-gray-400">
            Password should be at least 6 characters
          </p>

          {/* Button */}
          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex-1 h-px bg-gray-300"></span>
            OR
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>

          {/* Magic Link */}
          <button
            onClick={() => signIn("email")}
            className="w-full py-3 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium transition"
          >
          Sign up with Magic Link
          </button>

          {/* Login */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
