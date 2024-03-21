"use client"

import { useEffect, useState } from "react";
import {store, useAppSelector} from "./store";
import { Provider } from "react-redux";


export function ReduxProvider({children}) {

    const onlineFun = () => {
        console.log("you are online");
    }

    const offlineFun = () => {
        console.log("you are offline");
    }

    


    useEffect(() => {
      window.addEventListener("online", onlineFun);
      window.addEventListener("offline", offlineFun);


      return () => {
        window.removeEventListener("online", onlineFun);
        window.removeEventListener("offline", offlineFun);
      }
    }, [])


    return <Provider store={store}> {children} </Provider>
}