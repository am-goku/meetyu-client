import React from 'react'
import SingleUser from './SingleUser'
import AddIcon from '@mui/icons-material/Add';


function UserList({users, setSelectedUser}) {
  return (
    <div className='p-2 w-96 h-full flex flex-col gap-2 overflow-auto select-none'>
      
      <div className='bg-slate-200 dark:bg-blue-950 w-full flex items-center p-2 gap-3 rounded border border-gray-500'>
        <h1 className='font-semibold uppercase'>Messages</h1>
        <AddIcon className='ml-auto cursor-pointer' />
      </div>

      {
        users.map((user, i) => <SingleUser key={i} user={user} setSelectedUser={setSelectedUser} />)
      }
      
    </div>
  )
}

export default UserList
