import React from 'react'

export default function Landing_page() {
  return (
    <div className='container flex justify-center items-center'>
        <div className='part1 flex justify-center items-center pt-6 pb-3'>
            <div className="part1img justify-center items-center" style={{flex:5}}><img src="/images/part1Image.png" className="part1img w-[20rem] pr-5" alt="" /></div>
            <div className="part1text flex-col justify-center items-center" style={{flex:5}}>
                <span className="part1text_heading justify-center items-center text-teal-500 font-bold text-[2rem]">Your Ultimate Study Schedule Management Solution</span>
                <div className='part1text_subheading justify-end items-center text-gray-700 font-medium'>For a happy healthy work life balance</div>
            </div>
        </div>
      
    </div>
  )
}
