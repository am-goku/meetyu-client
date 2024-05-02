import React from 'react'
import SingleUser from './SingleUser'

const arr = [1,2,3,4,5,6,7,8,9,10]

function UserList() {
  return (
    <div className='p-2 w-96 h-full flex flex-col gap-2 overflow-auto select-none'>
      
      <SingleUser/>
        <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>
      <SingleUser/>

      
    </div>
  )
}

export default UserList
