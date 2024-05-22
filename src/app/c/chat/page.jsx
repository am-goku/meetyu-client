"use client"

import React from 'react'
import UserList from '../../components/chat/users/UserList'
import ChatBox from '../../components/chat/message/ChatBox'
import { fetchChatRooms } from '@/services/api/methods/chat'
import { useChatRoom } from '@/context/socket/ChatContext'



function Chat() {

  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedRoom, setSelectedRoom] = React.useState(null);

  const { setChatRooms } = useChatRoom()

  React.useEffect(() => {
    fetchChatRooms().then((response) => {
      const rooms = response.rooms;
      setChatRooms(rooms)
      console.log("chatRooms: ", rooms);
    })


    return () => {
      setChatRooms([]);
    }
  }, [])



  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="p-2 h-full overflow-hidden flex gap-5">
        <div className='relative'>
          <UserList isOpen={isOpen} toggleDrawer={toggleDrawer} setSelectedRoom={setSelectedRoom} />
        </div>
        <ChatBox selectedRoom={selectedRoom} />
      </div>
    </>
  )
}

export default Chat


