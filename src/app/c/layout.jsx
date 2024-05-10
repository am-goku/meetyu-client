"use client"

import { useAppSelector } from '@/utils/store'
import { redirect } from 'next/navigation'

function layout({ children }) {

    const user = useAppSelector(state => state?.authReducer?.user)

    if (!user) {
        return redirect('/auth')
    }

    return children
}

export default layout
