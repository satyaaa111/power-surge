"use client"
//this is the main page
import { useState } from 'react';
import Image from "next/image";
import AcadDashboard from "./components/Dashboard_A";

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    subject:'',
    description: '',
    date: '',
    todos: [],
  });


  return (
    <div>
      <AcadDashboard formData={formData} setFormData={setFormData}/>
    </div>
  );
}