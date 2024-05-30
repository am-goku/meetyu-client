'use client'

import React from 'react'
import SingleUser from './SingleUser'
import styles from './styles/SingleUser.module.css'
import { useChatRoom } from '@/context/socket/ChatContext';


function MessageDrawer({setSelectedRoom, selectedRoom}) {

    const { chatRooms } = useChatRoom()

    return (
        <div className={`flex-1 overflow-auto flex flex-col gap-2 ${styles.messageContainer}`}>
            {
                chatRooms?.map((room) => {
                    return <SingleUser setSelectedRoom={setSelectedRoom} key={room._id} room={room} selectedRoom={selectedRoom} />
                })
            }
        </div>
    )
}

export default MessageDrawer
