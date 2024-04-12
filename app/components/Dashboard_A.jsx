"use client";
import React,{ useState } from 'react';
import Calendar from 'react-calendar';
import Link  from 'next/link';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Data from '../Data_MajorEventsAcads/data.json';
import Scheduler from '../components/Scheduler';

const AcadDashboard = ({ formData,setFormData}) => {
  const [popUp,setPopUp] = useState(false);
  const [todoInput, setTodoInput] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [schedules, setSchedules] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject.trim() !== '' && date.trim() !== '' && time.trim() !== '') {
      const newSchedule = {
        id: Date.now(),
        subject,
        date,
        time,
        description,
        todoInput
      };
      setSchedules([...schedules, newSchedule]);
      setSubject('');
      setDate('');
      setTime('');
      setDescription('');
    }
  };

  const handleUndo = (id) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  function formatDateToddMMYYYY(dateString) {
    const dateObject = new Date(dateString);
  
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
  
    return `${day}-${month}-${year}`;
  }

  const handleViewDetails = (id) => {};

  const handleCalendarClick = (value) => {
    //Function for handling  the calendar click event
    // setFormData(...FormData,'date':value)
    console.log(value,formatDateToddMMYYYY(value));
    setFormData({
      ...formData,
      [formData.date]:formatDateToddMMYYYY(value),
    });
    setPopUp(!popUp);
  }
  
  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setFormData({
        ...formData,
        todos: [...formData.todos, { text: todoInput, completed: false }],
      });
      setTodoInput('');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...formData.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setFormData({ ...formData, todos: updatedTodos });
  };
  
  const handleRemoveTodo = (index) => {
    const updatedTodos = [...formData.todos];
    updatedTodos.splice(index, 1);
    setFormData({ ...formData, todos: updatedTodos });
  };

  const handleMajorEventSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('/api/major-events', { ...formData, todos: formData.todos });
      // Reset the form data after successful submission
      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        todos: [],
      });
      setTodoInput('');
      // Display a success message or redirect to another page
    } catch (error) {
      console.error('Error submitting major event:', error);
      // Display an error message to the user
    }
  };

  const handleMajorEvent =()=>{
    setPopUp(!popUp);
    window.scrollTo({
      top: "0",
      left: "0",
      behavior: "smooth",
    });
  }

  return (
    <>
    <div 
    className='main flex justify-around items-center p-10 overflow-x-hidden' 
    style={{
      background:"#FAFAFB"
    }}>
      {/* PopUp */}
    {popUp &&
    <div>
      <Scheduler />
    </div> 
}
      <div className="section1 w-[50vw] flex-col justify-center items-center ">
          <h1 className='heading text-2xl font-bold w-[40vw]'>ACADEMIC DASHBOARD</h1>
          <div className=' border-2 pl-10 pb-5 flex-col justify-center items-center '>
            <div 
              className="subheading" 
              style={{
                padding:'2px',
                width:'40vw'
              }}>
              Your achievements
            </div>
            <div 
            className="minisubheading text-[0.75rem]" 
            style={{
              padding:'2px',
              width:'40vw'
            }}>
              This week
            </div>
            <div className="strip w-[35vw]">
              {Data.map((element,i)=>{
                return(
                  <>
                  <div 
                  className="strip flex justify-evenly items-center gap-5 p-4 " 
                  style={{
                    border:'1px solid gray',
                  }}>
                      <div className="circle rounded-[50%] w-[3vw] h-[6vh] min-h-[10px] min-w-[10px] bg-green-500 font-extrabold text-[1.5rem] flex justify-center items-center text-white">✓</div>
                      <div className=' flex-col gap-2'>
                        <div>{element.title}</div>
                        <div>{element.date}</div>
                      </div>
                      <div 
                      className="status_comp" 
                      style={{
                        border:'1px solid gray',
                        padding:'2px',
                        borderRadius:'5rem'
                      }}>
                        {element.status}
                      </div>
                  </div>
                  </>
              )
            })}
            </div>
          </div>
          <Link
          className="button flex justify-center items-center gap-2 p-3" 
          onClick={handleMajorEvent} 
          style={{
            background:'#0E9BA8',
            width:'clamp(100px,10rem,300px)',
            padding:'0.25rem 1.25rem',
            borderRadius:'0.75rem'
          }}
          href= "/study-schedule" 
           >
            Add Event
          </Link>
      </div>
      <div className="section2 flex-row justify-center items-center px-7 py-10 border-2">
        <div>Calendar</div>
        <Calendar onClickDay={(value)=>{handleCalendarClick(value)}}  />
      </div>
    </div>
    <h1 className=' p-5 font-bold '>UPCOMING MAJOR EVENTS</h1>
    <div className="section2 flex justify-start items-start w-[100vw] flex-wrap ">
      
    {Data.map((element,i)=>{return(
    <div key={i} className="stats1 flex justify-evenly w-[50vw] p-5">
        <div className="event flex-col justify-evenly w-[18.5vw] h-[20vh] p-5 bg-slate-300 rounded-md">
            <div>{element.title}</div>
            <div className=' font-semibold '>{element.date}</div>
        </div>
        <div className="progress flex-col justify-evenly w-[18.5vw] h-[20vh] p-5 bg-yellow-300 rounded-md">
            <div className=' font-semibold '>{element.progress}</div>
            <button onClick={handleViewDetails} className='font-sm'>View Details</button>
        </div>
      </div>)})}
    </div>
    </>
  )
};
export default AcadDashboard;
