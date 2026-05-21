'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      // ✅ SAVE PROPERLY
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("loggedInEmail", data.user.email);

      // Optional: token save
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      router.push('/general-dashboard');

    } catch (error) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">

        <div className="flex justify-center mb-4">
          <Image
            src="/images/Fram99.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 text-sm mb-6">
          Login to access your TipTop Shine dashboard
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
              Create one
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}