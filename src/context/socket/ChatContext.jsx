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

    

    //TODO: Not working properly
    useEffect(() => {
        const updateRooms = (room) => {
            if(!room) return setChatRooms([]);


            const updatedRooms = chatRooms.filter(r => r._id !== room._id);
            setChatRooms([room, ...updatedRooms])
        }


        socket?.on('new-message', ({room}) => {
            updateRooms(room);
        })

        
    }, [socket, chatRooms])


    return (
        <MessageContext.Provider value={{ chatRooms, setChatRooms, clearRooms }}>
            {children}
        </MessageContext.Provider>
    )
}

export default ChatContext