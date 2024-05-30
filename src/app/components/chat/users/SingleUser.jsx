"use client"

import React, {useEffect, useState} from 'react'

import styles from './styles/SingleUser.module.css'
import { useAppSelector } from '@/utils/store'


const style = {
  profilePic: (url) => {
    return {
      backgroundImage: `url(${url})`,
    }
  }
}


function SingleUser({ room, setSelectedRoom, selectedRoom }) {

  const [user, setUser] = useState(null)

  const currUser = useAppSelector(state => state.authReducer.user)


  useEffect(() => {
    if(room?.users[0]?._id === currUser?._id){
      setUser(room.users[1])
    } else {
      setUser(room.users[0])
    }
  }, [room])


  return (
    <div onClick={()=>setSelectedRoom(room)} className={` ${room?._id === selectedRoom?._id? 'bg-blue-900 dark:bg-blue-900': 'bg-slate-200 dark:bg-blue-950'} w-full flex items-center p-2 gap-3 rounded border border-gray-500 cursor-pointer`}>
      <div style={style.profilePic(user?.profile_pic)} className={`${styles.profilePic} w-12 h-12 rounded-full border border-black relative justify-center items-center flex`}>
        <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0' />
      </div>

      <div className='w-44 flex flex-col'>
        <p className='truncate text-lg font-semibold'>{user?.name}</p>
        <span className='flex gap-2 w-full'>
          <p className='truncate font-light text-sm'>{room?.last_message?.message}</p>
          <p className='font-light text-xs self-end ml-auto'>45m</p>
        </span>
      </div>
    </div>
  )
}

export default SingleUser
