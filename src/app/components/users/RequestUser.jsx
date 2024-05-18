import { accept_request, delete_request } from '@/services/api/methods/user'
import { Box, Modal } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import UserCard from './UserCard'

function RequestUser({ key, user }) {

    const acceptRequest = () => {
        accept_request(user?._id).then((data) => {

        }).catch((error) => {
            console.log(error)
        })
    }


    const rejectRequest = () => {
        delete_request(user?._id).then((data) => {

        }).catch((error) => {
            console.log(error)
        })
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div onClick={handleOpen} key={key} className="flex flex-col rounded p-2 dark:bg-blue-950  gap-3 text-center justify-center w-fit h-fit cursor-pointer dark:hover:bg-opacity-55">
                <div className="p-3 relative w-52 h-72">
                    <Image alt='Error loading' priority='high' src={"https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg"} fill={true} sizes='100, 100' />
                </div>
                <span className="flex px-3">
                    <h1 className="font-semibold">{user?.name}</h1>
                    <p className="ml-auto">24</p>
                </span>
            </div>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-[50%] left-[50%] p-4 -translate-x-[50%] -translate-y-[50%] w-fit">
                    <UserCard user={user} />
                </Box>
            </Modal>
        </>
    )
}

export default RequestUser
