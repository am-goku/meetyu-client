"use client";

import NavBar from "@/app/layouts/NavBar";
import { useAppSelector } from "@/utils/store";
import React, { useEffect } from "react";
import Loader from "../loaders/loader";
import { useDispatch } from "react-redux";
import { changeLoadingStatus, changeScreenSize } from "@/utils/features/uiSlice";

function UiProvider({ children }) {
  const theme = useAppSelector((state) => state?.uiReducer?.theme);
  const dispatch = useDispatch();

  //Supporting functions
  //:1
  const windowResize = () => {
    const port = window.visualViewport;

    if (port.width <= 767) {
      dispatch(changeScreenSize(true));
    } else {
      dispatch(changeScreenSize(false));
    }
  };


  //Render functions

  //:1 - To change theme
  useEffect(() => {
    dispatch(changeLoadingStatus());

    const doc = document.getElementById("ui-provider");
    if (theme === "dark") {
      doc.classList.add("dark");
    } else {
      doc.classList.remove("dark");
    }
  }, [theme]);

  //:2 - To change screen size
  useEffect(() => {
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);


  return (
    <div id="ui-provider" className="flex">
      <div className="p-3 flex flex-col gap-2 bg-emerald-100 dark:bg-black w-full h-screen text-black dark:text-white no-scrollbar">
        <NavBar />
        {/* <div className="flex-1"> */}
          {children}
        {/* </div> */}
      </div>

    </div>
  );
}

export default UiProvider;
