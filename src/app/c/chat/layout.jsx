import ChatContext from '@/context/socket/ChatContext'
import React from 'react'

function layout({ children }) {
    return (
        <ChatContext>
            {children}
        </ChatContext>
    )
}

export default layout
