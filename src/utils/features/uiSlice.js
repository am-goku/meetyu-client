const { createSlice } = require("@reduxjs/toolkit");


let theme = "light";
if(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    theme = "dark";
}

const initialState = {
    theme: theme,
    online: null,
    loading: false,
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
        },

        changeLoadingStatus: (state) => {
            state.loading = !state.loading;
        }
    }
})

export const {changeOnlineStatus, changeTheme, changeLoadingStatus} = uiReducer.actions;
export default uiReducer.reducer;