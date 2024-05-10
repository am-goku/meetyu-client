"use client"

import { initializeSocket } from '@/services/socket/socketIo';
import { useAppSelector } from '@/utils/store';
import React, { useContext, createContext } from 'react'


const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }) {

    const [socket, setSocket] = React.useState(null)

    const user = useAppSelector(state => state?.authReducer?.user)

    React.useEffect(() => {
        const io = initializeSocket(user);
        setSocket(io)
    }, [user])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider
