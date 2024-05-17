import React from 'react'

import SingleUser from './SingleUser'


export function MessageDrawer({ users, setSelectedUser, style }) {
    return (
        <div className={`flex-1 overflow-auto flex flex-col gap-2 ${style.messageContainer}`}>
            {
                users?.map((user, i) => <SingleUser key={i} user={user} setSelectedUser={setSelectedUser} />)
            }
        </div>
    )
}




export function NewMessageDrawer({ users, setSelectedUser, style }) {
    return (
        <div className={`flex-1 overflow-auto flex flex-col gap-2 ${style.newMessageContainer} `}>
            {/* TODO: Need to set it up as new users from connections */}
            <p>TODO: New Users from connection list</p>
        </div>
    )
}

