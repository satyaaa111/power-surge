"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Your Ultimate Study Schedule Management Solution";

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const typeText = () => {
      interval = setInterval(() => {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            currentIndex = 0;
            setTypedText('');
            typeText();
          }, 3000);
        }
      }, 50);
    };

    typeText();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container flex-col justify-center items-center bg-[#D7F1FB] overflow-x-hidden'>
      <div className='part1 flex justify-center items-center pt-[4rem] pb-[3rem]'>
        <div className="part1img flex justify-center items-center" style={{ flex: 5 }}>
          <Image
            src="/images/part1Image.png"
            alt=""
            width={400}
            height={400}
            className="part1img w-[25rem] rounded-[2%]"
          />
        </div>
        <div className="part1text flex-col justify-center items-center" style={{ flex: 5 }}>
          <span className="part1text_heading flex justify-center items-center text-teal-500 font-bold text-[2rem]">
            {typedText}
          </span>
          <div className='part1text_subheading flex justify-start items-center text-gray-700 font-medium'>
            Striving for joy, wellness, and equilibrium in work and life.
          </div>
        </div>
      </div>
      <div className="part2 flex-col justify-center items-center">
        <div className="part2_heading flex justify-center items-center text-gray-500 font-bold text-[2rem] mt-[4rem] mb-[5rem]">
          Unlock Powerful Capabilities
        </div>
        <div className="3cols flex justify-center items-center pb-7">
          {/* col1 */}
          <div className="col1 flex-col justify-center items-center" style={{ flex: 3 }}>
            <div className="col11 flex-col justify-center items-center pl-[3rem] mb-[3rem] pr-5">
              <i className="fa-brands fa-bots text-orange-400 pr-3 pb-[1rem]"></i>
              <span className="text-orange-400 font-serif font-semibold text-[1.3rem]">AI Bot Assistance</span>
              <p className="text-gray font-light text-[0.9rem]">Seeking AI Bots help for tracking the schedule efficiently</p>
            </div>

            <div className="col12 flex-col justify-center items-center pl-[3rem] pr-5">
              <i className="fa-solid fa-clipboard-user text-purple-500 pr-3 pb-[1rem]"></i>
              <span className="text-purple-500 font-serif font-semibold text-[1.3rem]">Attendance Tracking</span>
              <p className="text-gray font-light text-[0.9rem]">Track your attendance for various subjects</p>
            </div>
          </div>
          {/* col2 */}
          <div className="col2 flex-col justify-center items-center" style={{ flex: 3 }}>
            <div className="col21 flex-col justify-center items-center pl-[2rem] mb-[3rem] pr-5">
              <i className="fa-solid fa-clock text-blue-600 pr-3 pb-[1rem]"></i>
              <span className="text-blue-600 font-serif font-semibold text-[1.3rem]">Real Time Updates</span>
              <p className="text-gray font-light text-[0.9rem]">
                Giving notifications for upcoming events based on student progress such as exams, hackathons, fests,etc.
              </p>
            </div>

            <div className="col22 flex-col justify-center items-center pl-[2rem] pr-5">
              <i className="fa-solid fa-mobile-screen-button text-teal-500 pr-3 pb-[1rem]"></i>
              <span className="text-teal-500 font-serif font-semibold text-[1.3rem]">Mobile Accessibility</span>
              <p className="text-gray font-light text-[0.9rem]">
                Wherever you are, away from your desk, stay connected and in control from the palm of your hand
              </p>
            </div>
          </div>
          {/* col3 */}
          <div className="col3 flex-col justify-center items-center" style={{ flex: 3 }}>
            <div className="col31 flex-col justify-center items-center pl-[2rem] mb-[3rem] pr-9">
              <i className="fa-solid fa-bullseye pr-3 text-yellow-400 pb-[1rem]"></i>
              <span className="text-yellow-400 font-serif font-semibold text-[1.3rem]">Set Goals</span>
              <p className="text-gray font-light text-[0.9rem]">
                Helping students to stay motivated and focussed on achieving their desired academic outcomes
              </p>
            </div>

            <div className="col32 flex-col justify-center items-center pl-[2rem] pr-9">
              <i className="fa-solid fa-chart-line pr-3 text-orange-400 pb-[1rem]"></i>
              <span className="text-orange-400 font-serif font-semibold text-[1.3rem]">Progress Tracking</span>
              <p className="text-gray font-light text-[0.9rem]">
                Students can track their progress on assignments and projects, enabling them to stay on top of their academic workload
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}