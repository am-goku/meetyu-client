import React from 'react'
import styles from './styles/BoxHeader.module.css'
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import InfoIcon from '@mui/icons-material/Info';

const style = {
  profilePic: (url) => {
      return {
          backgroundImage: `url(${url})`,
      }
  }
}

function BoxHeader({room, setInfo}) {

  return (
    <div className='w-full border-b-2 h-20 flex items-center gap-5 p-3 pr-5'>
        <div style={style.profilePic(room?.icon || room?.users[0]?.profile_pic)} className={`${styles.profilePic}  w-12 h-12 rounded-full`} />
        <div className='flex flex-col'>
          <strong className='font-semibold text-2xl font-sairaConte'>{room?.room_name || room?.users[0]?.name}</strong>
          <div className='flex items-center gap-2'>
            <span className='w-2 h-2 bg-green-400 rounded-full' />
            <p className='font-sairaConte text-sm'>Online</p>
          </div>
        </div>


        <div className='ml-auto flex gap-5 justify-center items-center'>
          <CallIcon className='w-7 h-7 cursor-pointer' />
          <VideoCallIcon className='w-8 h-8 cursor-pointer' />
          <span onClick={() => setInfo(true)}><InfoIcon className='w-7 h-7 cursor-pointer' /></span>
        </div>
    </div>
  )
}

export default BoxHeader
