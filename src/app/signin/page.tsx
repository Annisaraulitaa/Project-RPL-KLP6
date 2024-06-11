"use client";

import React, { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://psm-rpl.up.railway.app/api/v1/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        localStorage.setItem('token', data.access_token);
        window.location.href = '/admin/events';
      } else {
        // Failed login
        const errorMessage = await response.text();
        console.error("Login failed:", response.status, errorMessage);
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex w-1/3 flex-col gap-20">
        <div className="flex w-full flex-col items-center justify-center">
          <p className="text-5xl font-medium">Login</p>
        </div>
        <div className="flex w-full flex-col gap-10">
          <div className="flex w-full flex-col">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-500 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-500 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
          <div className="flex w-full items-center gap-2">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="text-base">
              Remember me
            </label>
          </div>
          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`focus:shadow-outline w-full rounded-xl bg-reddish-brown px-4 py-2 font-semibold text-white hover:bg-red-900 focus:outline-none ${loading ? "cursor-not-allowed opacity-50" : ""}`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
