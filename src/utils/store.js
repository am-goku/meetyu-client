import {configureStore} from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import uiReducer from "./features/uiSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        authReducer,
        uiReducer
    },
});


export const useAppSelector = useSelector