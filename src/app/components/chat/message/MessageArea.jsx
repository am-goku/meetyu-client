'use client'

import { useEffect, useState } from 'react'


import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import BoxHeader from './BoxHeader';
import TextBox from './TextBox';
import TypeBox from './TypeBox';
import { fetchMessages } from '@/services/api/methods/chat';
import { useAppSelector } from '@/utils/store';
import { useSocket } from '@/context/socket/SocketProvider';



const MessageArea = ({ selectedRoom, setInfo }) => {

    const [messages, setMessages] = useState([])

    const [loading, setLoading] = useState(false)

    const user = useAppSelector(state => state?.authReducer?.user)

    const socket = useSocket();


    useEffect(() => {
        if (selectedRoom) {
            setLoading(true)
            socket?.emit('open-room', { roomId: selectedRoom?._id });
            fetchMessages(selectedRoom?._id).then((res) => {
                setMessages(res.data)
                setLoading(false)
            }).catch((err) => {
                console.log("Error fetching messages", err);
            })
        }
    }, [selectedRoom, socket])


    useEffect(() => {
        const handleMessageReceive = (msg) => {
            console.log(
                "prev messages:", messages,
                "\n newMessage:", msg
            )
            setMessages(prevMessages => [msg, ...prevMessages]);
        }

        socket?.on('recieve-message', handleMessageReceive);

        // Cleanup function to remove the event listener
        return () => {
            socket?.off('recieve-message', handleMessageReceive);
        }

    }, [socket, messages])


    return (
        <>
            <BoxHeader room={selectedRoom} setInfo={setInfo} />

            <div className='flex-1 px-5 pb-3 flex flex-col-reverse gap-2 overflow-auto'>



                {
                    loading ? (
                        <div className='w-full h-full flex justify-center items-end'>
                            <ScatterPlotIcon className='animate-spin' />
                        </div>
                    ) : (
                        messages.map((msg) => {
                            return (
                                <TextBox key={msg?._id} user={msg?.sender === user?._id} message={msg.message} />
                            )
                        })
                    )
                }


            </div>

            <div className='w-full h-20 p-3 border border-black dark:border-t-slate-50 flex items-center'>
                <TypeBox selectedRoom={selectedRoom} />
            </div>

        </>
    )
}


export default MessageArea