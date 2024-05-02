import React from 'react'

import styles from './styles/SingleUser.module.css'

const uri = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function SingleUser() {
  return (
    <div className='bg-slate-200 w-full flex items-center p-2 gap-3 rounded border border-gray-500 cursor-pointer'>
        <div className={`${styles.profilePic} w-12 h-12 rounded-full border border-black relative justify-center items-center flex bg-[url(https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]`}>
            <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0' />
        </div>

        <div className='w-44 flex flex-col'>
            <p className='truncate text-lg font-semibold'>Gokul Krishna</p>
            <span className='flex gap-2 w-full'>
                <p className='truncate font-light text-sm'>This is a last message</p>
                <p className='font-light text-xs self-end ml-auto'>45m</p>
            </span>
        </div>

        

    </div>
  )
}

export default SingleUser
