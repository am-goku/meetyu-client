import Image from 'next/image'
import React from 'react'

function RequestUser({ key, user }) {

    return (
        <div key={key} className="flex flex-col rounded p-2 dark:bg-blue-950  gap-3 text-center justify-center w-fit h-fit cursor-pointer dark:hover:bg-opacity-55">
            <div className="p-3 relative w-52 h-72">
                <Image alt='Error loading' priority='high' src={"https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg"} fill={true} sizes='100, 100' />
            </div>
            <span className="flex px-3">
                <h1 className="font-semibold">{user?.name}</h1>
                <p className="ml-auto">24</p>
            </span>
        </div>
    )
}

export default RequestUser
