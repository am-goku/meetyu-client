"use client"

import React, { useEffect } from 'react'

import "./style.css"

function page() {




  const handleLogin = () => { }


  return (
    <div className="login flex-1 flex flex-col md:flex-row justify-center items-center md:gap-32 px-20 md:px-60">


      <div className='w-fit h-fit p-10 select-none'>
        <strong className='font-satisfy text-5xl md:text-6xl lg:text-9xl'>MeetYu</strong>
      </div>


      <div className='border border-black flex-1 flex flex-col gap-10 p-5'>
        <div>
          <label className='select-none' htmlFor="name">Full Name</label>
          <input className='w-full border border-black dark:border-white rounded h-10' type="text" name="name" id="name" />
        </div>
        <div>
          <label className='select-none' htmlFor="username">Username</label>
          <input className='w-full border border-black dark:border-white rounded h-10' type="text" name="username" id="username" />
        </div>
        <div>
          <label className='select-none' htmlFor="email">Email</label>
          <input className='w-full border border-black dark:border-white rounded h-10' type="email" name="email" id="email" />
        </div>
      </div>





    </div>
  );
}

export default page