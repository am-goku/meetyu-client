import React from 'react'
import SingleUser from './SingleUser'
import styles from './styles/SingleUser.module.css'


function MessageDrawer({rooms, setSelectedUser}) {
    return (
        <div className={`flex-1 overflow-auto flex flex-col gap-2 ${styles.messageContainer}`}>
            {
                rooms?.map((room, i) => {
                    return <SingleUser key={i} room={room} setSelectedUser={setSelectedUser} />
                })
            }
        </div>
    )
}

export default MessageDrawer
