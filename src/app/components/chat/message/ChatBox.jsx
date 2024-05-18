import { useAppSelector } from '@/utils/store'
import React from 'react'
const TypeBox = React.lazy(() => import('./TypeBox'))
const UserInfo = React.lazy(() => import('./UserInfo'))
const TextBox = React.lazy(() => import('./TextBox'))
const BoxHeader = React.lazy(() => import('./BoxHeader'))

function ChatBox() {

  const [info, setInfo] = React.useState(false)
  const [messages, setMessages] = React.useState([])

  const chatRoom = useAppSelector(state => state.userReducer.selectedRoom)


  const sendMessage = (msg) => {
    setMessages(prev=> [{user:true, message:msg}, ...prev,])
  }


  return (
    <div className='bg-blue-200 dark:bg-transparent dark:border-blue-900 dark:border flex-1 flex flex-col gap-3 relative'>
      {
        chatRoom &&
        (

          info ? <UserInfo room={chatRoom} setInfo={setInfo} /> : <>
            <BoxHeader room={chatRoom} setInfo={setInfo} />

            <div className='flex-1 px-5 pb-3 flex flex-col-reverse gap-2 overflow-auto'>

              {
                messages.map((item, i) => {
                  return (
                    <TextBox key={i} user={item.user} message={item.message} />
                  )
                })
              }


            </div>

            <div className='w-full h-20 p-3 border border-black dark:border-t-slate-50 flex items-center'>
              <TypeBox sendMessage={sendMessage} />
            </div>

          </>

        )
      }

      {
        !chatRoom && <div className='absolute right-[50%] top-[50%]'>Start A Chat</div>
      }

    </div>
  )
}

export default ChatBox
