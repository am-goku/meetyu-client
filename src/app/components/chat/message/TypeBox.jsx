"use clinet"

import React from 'react'

import "./styles/TypeBox.css"
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MicIcon from '@mui/icons-material/Mic';

function TypeBox({sendMessage}) {

    const imgRef = React.useRef(null);
    const vidRef = React.useRef(null);
    const textRef = React.useRef(null);

    const [selectedImage, setSelectedImage] = React.useState(null)
    const [selectedVideo, setSelectedVideo] = React.useState(null)


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const selectImage = () => {
        handleClose();
        imgRef.current.click();
    }
    const selectVideo = () => {
        handleClose();
        vidRef.current.click();
    }


    React.useEffect(() => {
        imgRef.current.addEventListener('change', (e) => {
            setSelectedImage(e.target.files[0])
        })
        vidRef.current.addEventListener('change', (e) => {
            setSelectedVideo(e.target.files[0])
        })
    }, [imgRef, vidRef]);


    React.useEffect(() => {
        console.log(selectedImage);
        console.log(selectedVideo);
    }, [selectedImage, selectedVideo])



    const handleMessage = () => {
        const text = textRef.current.value;

        if (text) {
            sendMessage(text)
            textRef.current.value = ''
        }
    }




    const enterPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key was pressed!');
            handleMessage()
        }
    }

    React.useEffect(() => {
        document.addEventListener("keypress", enterPress)

        return () => document.removeEventListener("keypress", enterPress)
    }, [document])
    




    return (
        <>
            <div className="w-full h-14 flex items-center justify-center border border-black text-black dark:text-white px-3 gap-3">
                <div className="fileUploadWrapper">
                    <label onClick={handleClick} for="file">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                            <circle
                                strokeWidth="20"
                                stroke="#6c6c6c"
                                fill="none"
                                r="158.5"
                                cy="168.5"
                                cx="168.5"
                            ></circle>
                            <path
                                strokeLinecap="round"
                                strokeWidth="25"
                                stroke="#6c6c6c"
                                d="M167.759 79V259"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeWidth="25"
                                stroke="#6c6c6c"
                                d="M79 167.138H259"
                            ></path>
                        </svg>
                        <span className="tooltip">Options</span>
                    </label>
                </div>
                <MicIcon className='cursor-pointer' />
                <input ref={textRef} placeholder="Message..." type="text" id="messageInput" className='flex-1 border border-black' />
                <button onClick={handleMessage} id="sendButton" className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                        <path
                            fill="none"
                            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                        ></path>
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="33.67"
                            stroke="#6c6c6c"
                            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                        ></path>
                    </svg>
                </button>






                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                >
                    <MenuItem onClick={handleClose}>
                        <CameraAltIcon />
                    </MenuItem>
                    <MenuItem onClick={selectImage}>
                        <PhotoCameraBackIcon />
                    </MenuItem>
                    <MenuItem onClick={selectVideo}>
                        <VideoCallIcon />
                    </MenuItem>

                </Menu>
            </div>


            <input ref={imgRef} type="file" accept='image' name="image" id="image" className='hidden' />
            <input ref={vidRef} type="file" accept='video' name="video" id="video" className='hidden' />

        </>

    )
}

export default TypeBox
