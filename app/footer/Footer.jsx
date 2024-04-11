import React from 'react'

export default function Footer() {
  return (
    <div className='container1 bg-[#0F3F4C] text-white flex justify-center items-center pb-[2rem] pt-[2rem]'>
     <div className='left flex-col justify-center items-center pl-9' style={{flex:5}}>
        <div className='heading font-extrabold pb-5 pt-2'><i class="fa-solid fa-graduation-cap pr-1"></i> LifeTrackScholar</div>
        <div className='subheading1 font-medium'>Your Ultimate Management Solution</div>
        <div className='subheading2 font-light'>Maintaining a happy and healthy work-life balance </div>
     </div>
     <div className='right flex-col justify-end items-center' style={{flex:5}}>
        <div className='allicons flex justify-center items-center pb-3'>
        <i className="fa-brands fa-facebook pr-4 cursor-pointer"></i>
        <i class="fa-brands fa-linkedin pr-4 cursor-pointer"></i>
        <i class="fa-brands fa-twitter pr-4 cursor-pointer"></i>        
        </div>
        <div className='icon2 flex justify-center items-center pb-3'>
        <i class="fa-regular fa-envelope pr-3 cursor-pointer"></i>
        lifeTrackScholar@gmail.com
        </div>
        <div className='icon2 flex justify-center items-center'>
        <i class="fa-sharp fa-regular fa-phone pr-3 cursor-pointer"></i>
        +91 90909 12345
        </div>
     </div>
    </div>
  )
}
