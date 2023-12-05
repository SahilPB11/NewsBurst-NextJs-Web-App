// pages/login.js
"use client";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { emailPasswordSignIn, googleSignIn, githubSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginWithEmailPassword = () => {
    emailPasswordSignIn(email, password);
  };

  const signInWithGoogle = async () => {
    try {
      await googleSignIn().then("successfully logged in with Google");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGitHub = async () => {
    try {
      await githubSignIn().then("successfully logged in with GitHub");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full max-w-screen-xl h-full">
        {/* Left Side (Background Image) */}
        <div className="hidden lg:block bg-cover bg-center h-full ">
          <img
            src="../../OIG2.jpeg"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="lg:col-span-1 h-full">
          <div className="bg-gray-800 p-8 rounded shadow-md h-full">
            <h2 className="text-3xl font-semibold mb-4 text-center">Log In</h2>
            <div className="mb-4 ">
              <label htmlFor="email" className="block text-sm font-medium mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-8 py-3 mb-3 border rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-3"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-3 border rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3  rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-6"
              onClick={handleLoginWithEmailPassword}
            >
              Log In
            </button>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-white text-gray-800 py-3 px-3 rounded-full border border-white hover:underline mb-3"
                onClick={signInWithGoogle}
              >
                <img
                  className="inline-block w-6 h-6 mr-2"
                  src="/google.png"
                  alt="Google Icon"
                />
                Log In with Google
              </button>
              <button
                className="bg-black text-white py-3 px-2 rounded-full border border-white hover:underline mb-3"
                onClick={signInWithGitHub}
              >
                <img
                  className="inline-block w-6 h-6 mr-2"
                  src="/github.png"
                  alt="GitHub Icon"
                />
                Log In with GitHub
              </button>
              <div className="flex items-center justify-center mt-4">
                <p className="text-white text-lg">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-blue-500 hover:underline">
                    Sign up here.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
