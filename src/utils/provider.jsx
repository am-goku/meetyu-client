"use client"

import { useEffect, } from "react";
import { persistor, store, } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


export function ReduxProvider({ children }) {

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


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        {children}
      </PersistGate>
    </Provider>
  )
}