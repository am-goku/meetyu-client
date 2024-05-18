"use client"

import React from 'react'

import styles from './styles/SingleUser.module.css'
import { useDispatch } from 'react-redux'
import { setRoom } from '@/utils/features/userSlice'


const style = {
  profilePic: (url) => {
      return {
          backgroundImage: `url(${url})`,
      }
  }
}


function SingleUser({room, setSelectedUser, key}) {
  
  const dispatch = useDispatch()
  
  const selectRoom = () => {
    setSelectedUser(room?.users[0])
    dispatch(setRoom(room))
  }


  return (
    <div key={key} onClick={selectRoom} className='bg-slate-200 dark:bg-blue-950 w-full flex items-center p-2 gap-3 rounded border border-gray-500 cursor-pointer'>
        <div style={style.profilePic(room?.users[0]?.profilePic)} className={`${styles.profilePic} w-12 h-12 rounded-full border border-black relative justify-center items-center flex`}>
            <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0' />
        </div>

        <div className='w-44 flex flex-col'>
            <p className='truncate text-lg font-semibold'>{room?.users[0]?.name}</p>
            <span className='flex gap-2 w-full'>
                <p className='truncate font-light text-sm'>This is a last message</p>
                <p className='font-light text-xs self-end ml-auto'>45m</p>
            </span>
        </div>
    </div>
  )
}

export default SingleUser
