import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


import style from "./styles/UserList.module.css"
import { get_friends } from '@/services/api/methods/user';

const MessageDrawer = React.lazy(() => import("./MessageDrawer"));
const FriendsDrawer = React.lazy(() => import("./FriendsDrawer"));

function UserList({ isOpen, toggleDrawer }) {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    get_friends().then((data) => {
      console.log("friends:", data);
      setFriends(data?.friends)
    })
  }, [])


  return (
    <div className='p-2 w-96 h-full flex flex-col gap-2 select-none'>

      <div className='bg-slate-200 dark:bg-blue-950 w-full flex items-center p-2 gap-3 rounded border border-gray-500'>
        <h1 className='font-semibold uppercase'>{isOpen && "New"} Messages</h1>
        <span className='ml-auto cursor-pointer' onClick={toggleDrawer}>{isOpen ? <CloseIcon /> : <AddIcon />}</span>
      </div>

      {
        !isOpen ? <MessageDrawer style={style} />
          :
          <FriendsDrawer users={friends} style={style} />
      }

    </div>
  )
}

export default UserList
