"use client";

import { changeTheme } from "@/utils/features/uiSlice";
import { useAppSelector } from "@/utils/store";
import React from "react";
import { useDispatch } from "react-redux";
import NavButton from "../components/buttons/NavButton";
import Link from "next/link";

function NavBar() {
  const theme = useAppSelector((state) => state?.uiReducer.theme);
  const dispatch = useDispatch();


  const switchTheme = () => {
    let newTheme;
    if (theme === "dark") {
      newTheme = "light";
    } else {
      newTheme = "dark";
    }
    dispatch(changeTheme(newTheme));
  };

  return (
    <div className="flex flex-col gap-24 h-screen w-72 p-10">
      {/* Headline */}
      <div className="flex w-full justify-center">
        <h1 className="font-bold text-7xl text-black dark:text-white">
          MeetYu
        </h1>
      </div>

      {/* Navlinks */}
      <div className="flex flex-col gap-20 justify-center text-black dark:text-white">
        <Link id="navLink" href="/profile">
          <NavButton title="Profile" />
        </Link>
        <Link id="navLink" href="/chat">
          <NavButton title="Chat" />
        </Link>
        <Link id="navLink" href="/explore">
          <NavButton title="Explore" />
        </Link>
        <NavButton title="Change Theme" cbFun={switchTheme} />
      </div>
    </div>
  );
}

export default NavBar;
