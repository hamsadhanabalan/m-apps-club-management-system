"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.ok) {
    // Fetch session to get role
    const session = await fetch("/api/auth/session").then((res) =>
      res.json()
    );

    const role = session?.user?.role;

    if (role === "student") {
      window.location.href = "/student";
    } else if (role === "admin") {
      window.location.href = "/admin/dashboard";
    } else if (role === "superadmin") {
      window.location.href = "/super-admin";
    }
  } else {
    alert("Invalid credentials");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100">
      
      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px] border border-purple-200">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Welcome Back 👋
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Secure login for Students, Admins & Super Admin
        </p>
      </div>
    </div>
  );
}