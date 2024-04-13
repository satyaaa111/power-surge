"use client"
//this is the main page
import { useState } from 'react';
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Landing_page from "./landing_page/Landing_page";
import '@fortawesome/fontawesome-free/css/all.css';
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
     
      <Navbar/>
      <Landing_page/>
      <AcadDashboard formData={formData} setFormData={setFormData}/>
      <Footer/>
      
      
    </div>
  );
}