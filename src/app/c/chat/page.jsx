"use client"

import React from 'react'
import UserList from '../../components/chat/users/UserList'
import ChatBox from '../../components/chat/message/ChatBox'
import { fetchChatRooms } from '@/services/api/methods/chat'
import { useChatRoom } from '@/context/socket/ChatContext'



function Chat() {

  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedRoom, setSelectedRoom] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  const { setChatRooms } = useChatRoom()

  React.useEffect(() => {
    setLoading(true)
    fetchChatRooms().then((response) => {
      const rooms = response.rooms;
      setChatRooms(rooms)
      console.log("chatRooms: ", rooms);
    }).finally(() => {
      setLoading(false)
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
      {
        loading ?
          <div className='w-full h-full text-white bg-black text-center justify-center items-center flex'>
            <p className='animate-pulse font-semibold text-xl'>Loading...</p>
          </div>
          :
          <div className="p-2 h-full overflow-hidden flex gap-5">
            <div className='relative'>
              <UserList isOpen={isOpen} toggleDrawer={toggleDrawer} setSelectedRoom={setSelectedRoom} selectedRoom={selectedRoom} />
            </div>
            <ChatBox selectedRoom={selectedRoom} />
          </div>
      }
    </>
  )
}

export default Chat


