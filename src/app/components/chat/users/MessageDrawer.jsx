'use client'

import React from 'react'
import SingleUser from './SingleUser'
import styles from './styles/SingleUser.module.css'
import { useAppSelector } from '@/utils/store';
import { useDispatch } from 'react-redux';
import { setRoom } from '@/utils/features/userSlice';


function MessageDrawer() {

    const rooms = useAppSelector(state => state.userReducer.chatRooms)
  
    const dispatch = useDispatch()
    
    const selectRoom = (room) => {
        dispatch(setRoom(room))
    }

    return (
        <div className={`flex-1 overflow-auto flex flex-col gap-2 ${styles.messageContainer}`}>
            {
                rooms?.map((room) => {
                    return <SingleUser key={room._id} room={room} selectRoom={selectRoom}/>
                })
            }
        </div>
    )
}

export default MessageDrawer
