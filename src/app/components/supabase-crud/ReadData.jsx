"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useUserContext } from "../context/ContextProvider";

const ReadData = () => {
  const [supabaseData, setSupabaseData] = useState([]);
  const { formData, setFormData, editingId, setEditingId } = useUserContext();

  const fetchData = async () => {
    let { data: students, error } = await supabase.from("students").select("*");
    setSupabaseData(students);
  };

  const handleEditData = async (id) => {
    setFormData(supabaseData.find((item) => item.id === id));
    setEditingId(id);
  };
  const handleRemoveData = async (id) => {
    const { error } = await supabase.from("students").delete().eq("id", id);
    setSupabaseData(supabaseData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="max-w-[1160px] mx-auto mt-5">
        <div className="flex flex-wrap gap-2 justify-center">
          {supabaseData.map((items) => (
            <div key={items.id} className="w-1/4 bg-slate-700 p-3">
              <h2>{items.name}</h2>
              <p>{items.roll}</p>
              <p>{items.city}</p>
              <button
                onClick={() => handleEditData(items.id)}
                className="border border-black px-5 py-2 "
              >
                Edit
              </button>
              <button
                onClick={() => handleRemoveData(items.id)}
                className="border border-black px-5 py-2 "
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadData;
