import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import uiReducer from "./features/uiSlice";
import { useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducers = combineReducers({
    authReducer,
    uiReducer
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