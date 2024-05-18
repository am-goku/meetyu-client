import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import uiReducer from "./features/uiSlice";
import userReducer from "./features/userSlice";
import { useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducers = combineReducers({
    authReducer,
    uiReducer,
    userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)


const store = configureStore({
    reducer: persistedReducer,
    applyMiddleware: [],
})


const persistor = persistStore(store);



export { store, persistor };
export const useAppSelector = useSelector;