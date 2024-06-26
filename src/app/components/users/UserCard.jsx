"use client"

import Image from 'next/image'
import React from 'react'
import ExploreOptions from './ExploreOptions'
import { Typography } from '@mui/material'
import { useAppSelector } from '@/utils/store'

const desc = "In summary, debouncing delays the execution of a function until after a period of inactivity, while throttling limits the rate at which a function can be executed. These techniques are commonly used in web development to improve performance and user experience in various scenarios.In summary, debouncing delays the execution of a function until after a period of inactivity, while throttling limits the rate at which a function can be executed. These techniques are commonly used in web development to improve performance and user experience in various scenarios."


function UserCard({ user }) {

  const theme = useAppSelector(state => state?.uiReducer?.theme)


  return (
    <div className={`flex justify-center border p-3  ${theme==='dark'? 'bg-blue-950 text-white': 'bg-blue-200 text-black'}`}>
      <div className="flex flex-col gap-10 select-none">
        <div className="p-3 relative w-64 h-96">
          <Image alt='Error loading' priority='high' src={user?.profile_pic} fill={true} sizes='100, 100' />
        </div>
        <ExploreOptions userId={user?._id} />
      </div>


      <div className="gap-3 flex justify-start p-3 items-start flex-col">
        <div className="flex gap-5 items-end self-start h-fit select-none ">
          <strong className="text-4xl font-semibold font-sans">{user?.name}</strong>
          <strong className="text-xl font-semibold font-sans">{23}</strong>
        </div>
        <div className="flex flex-col gap-5  self-start">
          <div className="overflow-auto">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
