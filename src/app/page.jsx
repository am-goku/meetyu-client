"use client"

import { logIn, logOut } from "@/utils/features/authSlice";
import { useAppSelector } from "@/utils/store";
import { useDispatch } from "react-redux";

export default function Home() {
  const user = useAppSelector((state) => state.authReducer.user);

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <p>{user?.username}</p>
        <button onClick={() => {
          dispatch(logIn({username: "Gokul"}))
        }}>Login</button>

        <button onClick={() => {
          dispatch(logOut())
        }}>logout</button>

      </div>
    </>
  );
}
