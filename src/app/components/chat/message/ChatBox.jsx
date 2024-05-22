'use client'

import React from 'react'

import { useSocket } from '@/context/socket/SocketProvider'
import { fetchMessages } from '@/services/api/methods/chat'
import { useAppSelector } from '@/utils/store'

const TypeBox = React.lazy(() => import('./TypeBox'))
const UserInfo = React.lazy(() => import('./UserInfo'))
const TextBox = React.lazy(() => import('./TextBox'))
const BoxHeader = React.lazy(() => import('./BoxHeader'))



function ChatBox({ selectedRoom }) {


  const [info, setInfo] = React.useState(false)

  const [messages, setMessages] = React.useState([])

  const user = useAppSelector(state => state?.authReducer?.user)

  const socket = useSocket();


  React.useEffect(() => {
    return () => {
      socket?.emit('leave-room', { roomId: selectedRoom?._id });
    }
  }, [selectedRoom])


  React.useEffect(() => {
    if (selectedRoom) {
      socket?.emit('open-room', { roomId: selectedRoom?._id });
      fetchMessages(selectedRoom?._id).then((res) => {
        setMessages(res.data)
      }).catch((err) => {
        console.log("Error fetching messages", err);
      })
    }
  }, [selectedRoom, socket])


  React.useEffect(() => {
    socket?.on('recieve-message', (msg) => {
      setMessages((prev) => [msg, ...prev]);
    })

  }, [socket])



  return (
    <div className='bg-blue-200 dark:bg-transparent dark:border-blue-900 dark:border flex-1 flex flex-col gap-3 relative'>
      {
        selectedRoom &&
        (

          info ? <UserInfo room={selectedRoom} setInfo={setInfo} /> :
            <MessageArea chatRoom={selectedRoom} messages={messages} setInfo={setInfo} user={user} selectedRoom={selectedRoom} />

        )
      }

      {
        !selectedRoom && <div className='absolute right-[50%] top-[50%]'>Start A Chat</div>
      }

    </div>
  )
}



const MessageArea = ({ chatRoom, setInfo, messages, user, selectedRoom }) => {

  return (
    <>
      <BoxHeader room={chatRoom} setInfo={setInfo} />

      <div className='flex-1 px-5 pb-3 flex flex-col-reverse gap-2 overflow-auto'>

        {
          messages.map((msg) => {
            return (
              <TextBox key={msg?._id} user={msg?.sender === user?._id} message={msg.message} />
            )
          })
        }


      </div>

      <div className='w-full h-20 p-3 border border-black dark:border-t-slate-50 flex items-center'>
        <TypeBox selectedRoom={selectedRoom} />
      </div>

    </>
  )
}



export default ChatBox
