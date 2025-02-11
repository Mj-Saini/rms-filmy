"use client";
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useUserContext = () => useContext(MyContext);

export const ContextProvider = ({ children }) => {
  const [editingId, setEditingId] = useState(null);
  const [studentData, setStudentData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    city: "",
  });

  const value = {
    formData,
    setFormData,
    editingId,
    setEditingId,
    studentData,
    setStudentData,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
