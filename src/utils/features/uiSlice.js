const { createSlice } = require("@reduxjs/toolkit");


let theme = "light";
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    theme = "dark";
}

const initialState = {
    theme: theme,
    online: null,
}

const uiReducer = createSlice({
    name: "ui",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },

        changeOnlineStatus: (state, action) => {
            state.online = action.payload;
        }
    }
})

export const {changeOnlineStatus, changeTheme} = uiReducer.actions;
export default uiReducer.reducer;