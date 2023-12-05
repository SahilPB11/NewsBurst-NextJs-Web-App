// pages/signup.js
"use client";
// pages/signup.js
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const SignupPage = () => {
  const { emailPasswordSignUp, googleSignIn, githubSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupWithEmailPassword = () => {
    emailPasswordSignUp(email, password);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white bg-cover bg-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded shadow-md">
        <h2 className="text-4xl font-semibold mb-6 text-center">Join Us</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-6"
          onClick={handleSignupWithEmailPassword}
        >
          Sign Up
        </button>

        <div className="flex flex-col space-y-4">
          <button
            className="bg-white text-gray-800 py-2 px-2 rounded-full hover:underline"
            onClick={signInWithGoogle}
          >
            <img
              className="inline-block w-5 h-5 mr-2"
              src="/google.png"
              alt="Google Icon"
            />
            Sign Up with Google
          </button>
          <button
            className="bg-black text-white py-2 px-2 rounded-full hover:underline"
            onClick={signInWithGitHub}
          >
            <img
              className="inline-block w-5 h-5 mr-2"
              src="/github.png"
              alt="GitHub Icon"
            />
            Sign Up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
