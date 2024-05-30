'use client'

import React from 'react'
import { useSocket } from '@/context/socket/SocketProvider'
import MessageArea from './MessageArea'
import UserInfo from './UserInfo'




function ChatBox({ selectedRoom }) {

  const [info, setInfo] = React.useState(false)

  const socket = useSocket();


  React.useEffect(() => {
    return () => {
      socket?.emit('leave-room', { roomId: selectedRoom?._id });
    }
  }, [selectedRoom])


  return (
    <div className='bg-blue-200 dark:bg-transparent dark:border-blue-900 dark:border flex-1 flex flex-col gap-3 relative'>
      {
        selectedRoom ?
          (

            info ? <UserInfo room={selectedRoom} setInfo={setInfo} /> :
              <MessageArea selectedRoom={selectedRoom} setInfo={setInfo} />

          ) : (
            <div className='absolute right-[50%] top-[50%]'>Start A Chat</div>
          )
      }

    </div>
  )
}


export default ChatBox
