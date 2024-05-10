"use client"

import { useAppSelector } from "@/utils/store"
import { redirect } from "next/navigation"
import React from "react"

export default function Home() {

  const user = useAppSelector(state => state?.authReducer?.user)

  if (!user) {
    return redirect('/auth')
  }

  return (
    <>

      hello

      <button className=" px-3 bg-white w-fit text-black"> Connect socket </button>

    </>
  )
}
