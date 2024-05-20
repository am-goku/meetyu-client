import React from 'react'

import { useSocket } from '@/context/socket/SocketProvider'
import { fetchMessages, newMessage } from '@/services/api/methods/chat'
import { useAppSelector } from '@/utils/store'
import { useDispatch } from 'react-redux'
import { setRoom } from '@/utils/features/userSlice'

const TypeBox = React.lazy(() => import('./TypeBox'))
const UserInfo = React.lazy(() => import('./UserInfo'))
const TextBox = React.lazy(() => import('./TextBox'))
const BoxHeader = React.lazy(() => import('./BoxHeader'))



/**
 * ChatBox component for displaying chat messages and functionality.
 * @returns {JSX.Element} The JSX element representing the ChatBox component.
 */
function ChatBox() {

  /**
 * State variable to track whether user info is displayed.
 * @type {boolean}
 */
  const [info, setInfo] = React.useState(false)


  /**
   * State variable to store the chat messages.
   * @type {Array<{user: boolean, message: string}>}
  */
  const [messages, setMessages] = React.useState([])

  /**
   * State variable to store the selected chat room.
   * @type {Object}
  */
  const chatRoom = useAppSelector(state => state.userReducer.selectedRoom)

  /**
   * Retrieves the authenticated user from the Redux store.
   * @returns {Object} The authenticated user object.
   */
  const user = useAppSelector(state => state?.authReducer?.user)


  /**
   * React hook to access the socket instance.
   * @type {Object}
   */
  const socket = useSocket();

  const dispatch = useDispatch()

  React.useEffect(() => {
    return () => {
      dispatch(setRoom(null))
    }
  }, [])



  /**
   * React hook to fetch chat messages when the chat room changes.
   */
  React.useEffect(() => {
    if (chatRoom) {
      socket?.emit('open-room', {roomId: chatRoom?._id});

      fetchMessages(chatRoom?._id).then((res) => {
        setMessages(res.data)
      }).catch((err) => {
        console.log('====================================');
        console.log("Error fetching messages", err);
        console.log('====================================');
      })
    }


    return () => {
      
    };
  }, [chatRoom, socket])


  /**
  * React hook to listen for incoming chat messages.
  */
  React.useEffect(() => {
    socket?.on('recieve-message', (msg) => {
      setMessages((prev) => [msg, ...prev]);
    })

    return () => {
      socket?.off('receive-message');
    };
  }, [socket])


  /**
     * Function to send a chat message.
     * @param {object} msg The chat message and type to be sent.
     */
  const sendMessage = (msgObj) => {
    if (chatRoom) {
      newMessage(msgObj.message, msgObj.type, chatRoom?._id).then((res) => {
        socket.emit('send-message', {message: res.data, roomId: chatRoom._id});
      }).catch((err) => {
        console.log("Error sending message", err)
      })
    }
  }





  return (
    <div className='bg-blue-200 dark:bg-transparent dark:border-blue-900 dark:border flex-1 flex flex-col gap-3 relative'>
      {
        chatRoom &&
        (

          info ? <UserInfo room={chatRoom} setInfo={setInfo} /> :
            <MessageArea chatRoom={chatRoom} messages={messages} setInfo={setInfo} user={user} sendMessage={sendMessage} />

        )
      }

      {
        !chatRoom && <div className='absolute right-[50%] top-[50%]'>Start A Chat</div>
      }

    </div>
  )
}






const MessageArea = ({ chatRoom, setInfo, messages, user, sendMessage }) => {

  const dispatch = useDispatch()

  React.useState(() => {
    return () => {
      dispatch(setRoom(null))
    }
  }, [])

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
        <TypeBox sendMessage={sendMessage} />
      </div>

    </>
  )
}












export default ChatBox
