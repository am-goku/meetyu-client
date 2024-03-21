import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isValid: false,
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },

        logIn: (state, action) => {
            return {
                isValid: true,
                user: action.payload,
            }
        }
    }
})




export const {logIn, logOut} = auth.actions;
export default auth.reducer;