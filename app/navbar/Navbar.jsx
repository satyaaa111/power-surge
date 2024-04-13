import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className='container flex justify-start items-center pt-[1rem] pb-[1rem] border-b border-gray-300 bg-[#F2F3F4] overflow-x-hidden'>
    <div className='left-item flex justify-start items-center pl-[1rem]' style={{flex:2}}>
        <div className='logo w-[3rem] pr-2'>
            <img src="/images/logo1.webp" alt="" />
        </div>
        <div className='title flex justify-center items-center text-gray-800 font-bold font-sans font-900'>LifeTrackScholar</div>
    </div>
    <div className='middleitem flex justify-center items-center' style={{flex:6}}>
        <ul className='flex justify-between items-center'>
            
            <li className='mid_items pr-9'>
                <Link href="/">
                <span className='mid_items_text flex justify-center items-center text-teal-500 font-semibold cursor-pointer hover:text-blue-500'>Dashboard</span>
                </Link>
            </li>
            <li className='mid_items pr-9'>
              <Link href="/">
                <span className='mid_items_text flex justify-center items-center text-teal-500 font-semibold cursor-pointer hover:text-blue-500'>Achievements</span>
                </Link>
            </li>
            <li className='mid_items pr-9'>
            <Link href="/">
                <span className='mid_items_text flex justify-center items-center text-teal-500 font-semibold cursor-pointer hover:text-blue-500'>Daily Dose</span>
                </Link>
            </li>
            <li className='mid_items pr-9'>
            <Link href="/">
                <span className='mid_items_text flex justify-center items-center text-teal-500 font-semibold cursor-pointer hover:text-blue-500'>AI Calling Bot </span>
                </Link>
            </li>
        </ul>

    </div>
    <div className='profile flex justify-end items-center pr-[1.9rem] cursor-pointer' style={{flex:2}}>
    <Link href="/"><img className="profile_img rounded-full" src="/images/Avatar.jpg" alt="" /> </Link>
    </div>

      </div>
    </div>
  )
}
