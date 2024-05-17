"use client"

import React from 'react'
import UserList from '../../components/chat/users/UserList'
import ChatBox from '../../components/chat/message/ChatBox'
import { useSocket } from '@/context/socket/SocketProvider'

const users = [
  {
    name: 'John Smith',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Kevin Smith',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Harold',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Peter Parker',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Goku',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Vegeta',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Bulma V',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Gohan Goku',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }, {
    name: 'Sample User Name For Testing',
    profilePic: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]



function Chat() {

  const [selectedUser, setSelectedUser] = React.useState(null)

  const socket = useSocket()

  const switchUser = (usr) => {
    setSelectedUser(usr)
  }

  React.useEffect(() => {
    socket?.on('blocked', () => {
      console.log("Block event excecuted")
    })
  })


  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="p-2 h-full overflow-hidden flex gap-5">

        <div className='relative'>
          <UserList users={users} setSelectedUser={switchUser} isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </div>

        <ChatBox user={selectedUser} />

      </div>
    </>
  )
}

export default Chat


