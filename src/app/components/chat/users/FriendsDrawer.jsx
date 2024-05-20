import { createChatRoom } from '@/services/api/methods/chat'
import { updateRooms } from '@/utils/features/userSlice'
import React from 'react'
import { useDispatch } from 'react-redux'


function FriendsDrawer({ users, style }) {

    const dispatch = useDispatch()

    const styles = {
        profilePic: (url) => {
            return {
                backgroundImage: `url(${url})`,
            }
        }
    }


    const createRoom = (participant) => {
        createChatRoom(participant).then((res) => {
            dispatch(updateRooms(res.room))
            console.log(room);
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <div className={`flex-1 overflow-auto flex flex-col gap-2 ${style?.newMessageContainer} `}>
            {
                users?.map((user, i) => {
                    return (
                        <div onClick={() => createRoom(user?._id)} key={i} className='bg-slate-200 dark:bg-blue-950 w-full flex items-center p-2 gap-3 rounded border border-gray-500 cursor-pointer'>
                            <div style={styles.profilePic(user?.profilePic)} className={`${styles.profilePic} w-12 h-12 rounded-full border border-black relative justify-center items-center flex`}>
                                <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0' />
                            </div>

                            <div className='w-44 flex flex-col'>
                                <p className='truncate text-lg font-semibold'>{user?.name}</p>
                                <span className='flex gap-2 w-full'>
                                    <p className='truncate font-light text-sm'>This is a last message</p>
                                    <p className='font-light text-xs self-end ml-auto'>45m</p>
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FriendsDrawer
