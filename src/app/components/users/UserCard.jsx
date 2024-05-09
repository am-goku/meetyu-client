"use client"

import Image from 'next/image'
import React from 'react'
import ExploreOptions from './ExploreOptions'
import { useAppSelector } from '@/utils/store'

const desc = "In summary, debouncing delays the execution of a function until after a period of inactivity, while throttling limits the rate at which a function can be executed. These techniques are commonly used in web development to improve performance and user experience in various scenarios.In summary, debouncing delays the execution of a function until after a period of inactivity, while throttling limits the rate at which a function can be executed. These techniques are commonly used in web development to improve performance and user experience in various scenarios."


function UserCard() {
  const user = useAppSelector(state => state.authReducer.user)

  return (
    <div className="flex justify-center items-center border p-3">
          <div className="flex flex-col gap-10 select-none">
            <div className="p-3 relative w-64 h-96">
              <Image src={"https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg"} fill={true} />
            </div>
            <ExploreOptions />
          </div>
          

          <div className="gap-3 flex justify-center p-3 items-center flex-col">
            <div className="flex gap-5 items-end self-start h-fit select-none ">
              <strong className="text-4xl font-semibold font-sans">{user?.name}</strong>
              <strong className="text-xl font-semibold font-sans">{23}</strong>
            </div>
            <div className="flex flex-col gap-5  self-start">
              <div className="max-h-32 max-w-[60rem] overflow-auto">
                <p>{desc}</p>
              </div>
            </div>
            <div className="w-full p-5 overflow-auto flex gap-3 items-center">
              <Image src={"https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"} width={200} height={200} />
              <Image src={"https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"} width={200} height={200} />
              <Image src={"https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"} width={200} height={200} />
              <Image src={"https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg"} width={200} height={200} />
            </div>
          </div>
        </div>
  )
}

export default UserCard
