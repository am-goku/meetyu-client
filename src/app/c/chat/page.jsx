"use client"

import React from 'react'
import UserList from '../../components/chat/users/UserList'
import ChatBox from '../../components/chat/message/ChatBox'
import { fetchChatRooms } from '@/services/api/methods/chat'
import { useDispatch } from 'react-redux'
import { clearRoom, setChatRooms } from '@/utils/features/userSlice'



function Chat() {

  const dispatch = useDispatch()


  React.useEffect(() => {
    fetchChatRooms().then((response) => {
      const rooms = response.rooms;
      dispatch(setChatRooms(rooms));
      console.log("chatRooms: ", rooms);
    })


    return () => {
      dispatch(clearRoom())
    }
  }, [])


  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="p-2 h-full overflow-hidden flex gap-5">

        <div className='relative'>
          <UserList isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </div>

        <ChatBox />

      </div>
    </>
  )
}

export default Chat


