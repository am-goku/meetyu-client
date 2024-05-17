import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { MessageDrawer, NewMessageDrawer } from './UserDrawer';

import style from "./styles/UserList.module.css"

function UserList({users, setSelectedUser, isOpen, toggleDrawer}) {
  return (
    <div className='p-2 w-96 h-full flex flex-col gap-2 select-none'>
      
      <div className='bg-slate-200 dark:bg-blue-950 w-full flex items-center p-2 gap-3 rounded border border-gray-500'>
        <h1 className='font-semibold uppercase'>{isOpen && "New"} Messages</h1>
        <span className='ml-auto cursor-pointer' onClick={toggleDrawer}>{isOpen? <CloseIcon />: <AddIcon />}</span>
      </div>

      {
        !isOpen ? <MessageDrawer users={users} style={style} setSelectedUser={setSelectedUser} />
          :
          <NewMessageDrawer users={users} style={style} setSelectedUser={setSelectedUser} />
      }
      
    </div>
  )
}

export default UserList
