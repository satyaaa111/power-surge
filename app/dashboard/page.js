"use client"
//this is the main page
import { useState } from 'react';

// import Navbar from "./navbar/Navbar";
;
import '@fortawesome/fontawesome-free/css/all.css';
import AcadDashboard from "../components/Dashboard_A";

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
      {/* <Navbar/> */}
      
      <AcadDashboard formData={formData} setFormData={setFormData}/>
     
       
      
    </div>
  );
}
