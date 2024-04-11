"use client";
import React,{ useState,useRef } from 'react';
import Calendar from './Calendar';
import { Axios } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AcadDashboard = () => {
  const [popUp,setPopUp] = useState(false);
  const scrollToTopRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMajorEventSubmit = async (e) => {
    e.preventDefault();

    try {
      res = await axios.post('/api/major-events', formData);
      // Reset the form data after successful submission
      setFormData({
        title: '',
        description: '',
        date: '',
        // Reset other form fields
      });
      // Display a success message or redirect to another page
    } catch (error) {
      console.error('Error submitting major event:', error);
      // Display an error message to the user
    }
    if(res.status == 200){
      setPopUp(!popUp);
      //toastify message success
    }else{
      setPopUp(!popUp);
      //toastify message fail
    }
  };

  const handleMajorEvent = ()=>{
    setPopUp(!popUp);
    window.scrollTo({
      top: "0",
      left: "0",
      behavior: "smooth",
    });
  }

  return (
    <div className='main flex-col justify-center items-center'>
    {popUp && 
    <div ref={scrollToTopRef} className="popUp absolute backdrop-blur-2xl z-50 w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="form flex-col gap-5 w-[50vw] min-w-[260px] h-[60vh] bg-slate-100">
        <form onSubmit={()=>handleMajorEventSubmit(e)} className=' flex justify-evenly items-center'>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        {/* Add more input fields as needed */}
        <button type="submit" onClick={()=>handleMajorEventSubmit(formData)} className=' bg-red-400'>Submit</button>
      </form>
        <button onClick={handleMajorEvent} className=' close border-l-indigo-500' >Close</button>
        </div>
      </div>}


      <div className="section1 bg-stone-700 w-[100vw] h-[80vh] flex justify-evenly items-center">
        <div className="achieve h-[60vh] w-[45vw] flex-col justify-center items-center bg-slate-200">
          Achievements
          <div className="strip_A h-[3rem] bg-gray-500">
            Progress details
          </div>
          <div className="strip_A h-[3rem] bg-gray-500">
            Progress details
          </div>
          <div className="strip_A h-[3rem] bg-gray-500">
            Progress details
          </div>
        </div>
        <div className="calendar relative h-[50%] w-[50%] ml-[10vw] mt-[-12.5vw] bg-slate-500">
          <Calendar/>
        </div>
      </div>
      <div className="section2 w-[100vw] h-[80vh] border-solid border-slate-950 bg-zinc-700">
        <div className="majorEvents flex justify-evenly items-start w-[50vw] bg-slate-100 ">
          <div className="task w-[14rem] h-[5.5rem] bg-gray-700">
           Name 
          </div>
          <div className="progress  w-[14rem] h-[5.5rem] bg-gray-400">
           progress 
          </div>
        </div>
        <div className="majorEvents flex justify-evenly items-start w-[50vw] bg-slate-100 ">
          <div className="task w-[14rem] h-[5.5rem] bg-gray-700">
           Name 
          </div>
          <div className="progress  w-[14rem] h-[5.5rem] bg-gray-400">
           progress 
          </div>
        </div>
      <div className="button" onClick={handleMajorEvent}>
        Add Event
      </div>
      </div>
    </div>
  )
};
export default AcadDashboard;
