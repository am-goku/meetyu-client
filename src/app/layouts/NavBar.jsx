"use client";

import { changeActiveLink } from "@/utils/features/uiSlice";
import { useAppSelector } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavButton from "../components/buttons/NavButton";
import Link from "next/link";
import { Avatar } from "@mui/material";
import Theme from "../components/toggles/Theme";

function NavBar() {

  const dispatch = useDispatch();

  const minScreen = useAppSelector(state => state?.uiReducer?.minScreen)

  const changeLink = (route) => {
    dispatch(changeActiveLink(route))
  }



  

  return (
    <>
      <div className="w-full h-20 text-black dark:text-white flex items-center p-5">
        <div className="headline flex gap-5">
          <h1 className="font-bold text-5xl font-satisfy">MeetYu</h1>
          <Theme />
        </div>

        {!minScreen && <div className="navs flex gap-8 ml-auto -translate-x-28 items-center">
          <Link id="navLink" href="/" onClick={() => changeLink("Home")}>
            <NavButton title="Home" />
          </Link>

          <Link id="navLink" href="/c/explore" onClick={() => changeLink("Explore")}>
            <NavButton title="Explore" />
          </Link>

          <Link id="navLink" href="/c/chat" onClick={() => changeLink("Chat")}>
            <NavButton title="Chat" />
          </Link>

          <div className="flex items-center gap-3">
            <span className="w-10 h-10">
              <Avatar
                alt="Gokul Krishna"
                src="/static/images/avatar/1.jpg"
              />
            </span>
            <Link
              id="navLink"
              href="/profile"
              onClick={() => changeLink("Profile")}
            >
              <NavButton title="Profile" />
            </Link>
          </div>
        </div>}
      </div>
    </>
  );
}

export default NavBar;
