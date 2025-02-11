"use client";

import React, { useState } from "react";

const SignUpUser = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signUpNewUser();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpUser;
