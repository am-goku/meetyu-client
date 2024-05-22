'use client'

import { useContext, createContext, useState } from 'react'

const MessageContext = createContext()
export const useChatRoom = () => useContext(MessageContext)


function ChatContext({ children }) {

    const [chatRooms, setChatRooms] = useState([])


    const clearRooms = () => {
        setChatRooms([])
        setSelectedRoom(null)
    }

    const updateRooms = (room) => {
        const updatedRooms = chatRooms.filter(r => r._id !== room._id);

        setChatRooms([room, ...updatedRooms])
    }


    return (
        <MessageContext.Provider value={{ chatRooms, setChatRooms, clearRooms, updateRooms }}>
            {children}
        </MessageContext.Provider>
    )
}

export default ChatContext