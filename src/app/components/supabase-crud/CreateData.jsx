"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useUserContext } from "../context/ContextProvider";

const CreateData = () => {
  const { formData, setFormData, editingId, studentData, setStudentData } =
    useUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   create new row in previous table
  const createData = async () => {
    const { data, error } = await supabase.from("students").insert([formData]);
  };

  const updateData = async (id) => {
    const { data, error } = await supabase
      .from("students")
      .update(formData)
      .eq("id", id)
      .select();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    if (editingId) {
      updateData(editingId);
    } else {
      createData();
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white text-black shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Roll Field */}
        <div>
          <label className="block font-medium">Roll:</label>
          <input
            type="text"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Second Column Field */}
        <div>
          <label className="block font-medium">Second Column:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateData;
