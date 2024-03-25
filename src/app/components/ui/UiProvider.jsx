"use client";

import NavBar from "@/app/layouts/NavBar";
import { useAppSelector } from "@/utils/store";
import React, { useEffect } from "react";
import Loader from "../loaders/loader";
import { useDispatch } from "react-redux";
import { changeLoadingStatus } from "@/utils/features/uiSlice";

function UiProvider({ children }) {
  const theme = useAppSelector((state) => state?.uiReducer?.theme);
  const loading = useAppSelector((state) => state?.uiReducer?.loading)
const dispatch = useDispatch()
  useEffect(() => {

    
    dispatch(changeLoadingStatus())

    setTimeout(() => {
        dispatch(changeLoadingStatus())
    }, 1000)

    const doc = document.getElementById("ui-provider");
    if (theme === "dark") {
      doc.classList.add("dark");
    } else {
      doc.classList.remove("dark");
    }
  }, [theme]);


  return (
    <div id="ui-provider" className="flex">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex bg-emerald-100 dark:bg-black w-full h-full">
          <NavBar />
          <div className="w-full p-3 m-3 glass overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default UiProvider;
