import React from 'react'
import ConnectionButtons from './connections/ConnectionButtons'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const styles = {
    profilePic: (url) => {
        return {
            backgroundImage: `url(${url})`,
        }
    }
}


function UserInfo({user, setInfo}) {

    return (
        <div className='flex-1 flex flex-col items-center py-10 gap-5 relative'>
            <div className='w-36 h-36 rounded-full bg-cover bg-no-repeat bg-center shadow-lg border border-blue-900' style={styles.profilePic(user?.profilePic)} />
            <div className='flex flex-col justify-center items-center text-xl'>
                <strong>{user?.name}</strong>
                <div className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-green-400 rounded-full' />
                    <p className='font-sairaConte text-sm'>Online</p>
                </div>
            </div>

            <div className='flex gap-10'>
                <ConnectionButtons />
            </div>








            <div className='absolute w-20 h-20 left-5 top-10 flex justify-center'>
                <span onClick={()=> setInfo(false)}><ArrowBackIcon className='cursor-pointer' /></span>
            </div>


        </div>
    )
}

export default UserInfo
