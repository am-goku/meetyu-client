import React from 'react'

import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import InfoIcon from '@mui/icons-material/Info';

function ConnectionButtons() {
    return (
        <>
            <CallIcon className='w-7 h-7 cursor-pointer' />
            <VideoCallIcon className='w-8 h-8 cursor-pointer' />
        </>
    )
}

export default ConnectionButtons
