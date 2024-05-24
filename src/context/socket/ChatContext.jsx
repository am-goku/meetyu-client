'use client'

import { useContext, createContext, useState, useEffect } from 'react'
import { useSocket } from './SocketProvider'

const MessageContext = createContext()
export const useChatRoom = () => useContext(MessageContext)


function ChatContext({ children }) {

    const [chatRooms, setChatRooms] = useState([])

    const socket = useSocket();

    const clearRooms = () => {
        setChatRooms([])
        setSelectedRoom(null)
    }

    const updateRooms = (room) => {
        const updatedRooms = chatRooms.filter(r => r._id !== room._id);

        setChatRooms([room, ...updatedRooms])
    }

    //TODO: Not working properly
    // useEffect(() => {
    //     socket?.on('new-message', ({room}) => {
    //         console.log("New message", room);
    //         updateRooms(room);
    //     })
    // }, [])


    return (
        <MessageContext.Provider value={{ chatRooms, setChatRooms, clearRooms, updateRooms }}>
            {children}
        </MessageContext.Provider>
    )
}

export default ChatContext