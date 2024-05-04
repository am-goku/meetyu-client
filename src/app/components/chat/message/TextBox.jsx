"use client"

import React from 'react'
import PropTypes from 'prop-types'

function TextBox({user, seen, message}) {


    return (
        <div className={`${!user? 'bg-blue-50 dark:bg-blue-950': 'bg-blue-100 dark:bg-blue-900'} max-w-96 min-w-32 px-5 pt-2 pb-7 rounded relative ${user && 'ml-auto'}`}>
            <p>{message}</p>
            <div className='absolute text-xs text-slate-500 dark:text-slate-50 right-2 bottom-1 flex gap-2'>
                <p>10:30pm</p>
                {
                    user && (
                        seen ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                        <path d="M11,16.4l-4.7-4.7l1.4-1.4l3.3,3.3l8.4-8.4C17.5,3.3,14.9,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10 c0-1.9-0.5-3.6-1.4-5.1L11,16.4z"></path>
                    </svg> :
                        <svg fill="#000000" viewBox="0 0 32 32" width={15} height={15} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,32A16,16,0,1,0,0,16,16,16,0,0,0,16,32ZM16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z"></path> </g></svg>
                    )
                }
            </div>
        </div>
    )
}



TextBox.propTypes = {
    user: PropTypes.bool.isRequired,
    seen: PropTypes.bool.isRequired,
}


export default TextBox
