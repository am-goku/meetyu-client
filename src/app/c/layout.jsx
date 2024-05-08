"use client"

import { useAppSelector } from '@/utils/store'
import { redirect } from 'next/navigation'
import React from 'react'

function layout({ children }) {

    const user = useAppSelector(state => state.authReducer.user)

    if(!user) {
        return redirect('/auth')
    }

    return (
        <>
            {children}
        </>
    )
}

export default layout
