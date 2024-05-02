import React from 'react'
import UserList from '../components/chat/users/UserList'
import ChatBox from '../components/chat/message/ChatBox'

function Chat() {
  return (
    <>
        <div className="bg-emerald-500 p-2 h-full overflow-hidden flex gap-5">

            <UserList />

            <ChatBox />

        </div>
    </>
  )
}

export default Chat