const { createSlice } = require("@reduxjs/toolkit");


let theme = "light";
if(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    theme = "dark";
}

let route;
if (typeof window !== "undefined") {
  route =
    window.location.pathname
      .split("/")[1]
      .split("")
      .map((char, i) => {
        return i === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");
}


let winSize;
if (typeof window !== "undefined") {
  winSize = window.visualViewport.width;
}



const initialState = {
  theme: theme,
  online: null,
  loading: false,
  activeLink: route || "Home",
  minScreen: winSize <= 767,
};

const uiReducer = createSlice({
    name: "ui",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },

        changeActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },

        changeOnlineStatus: (state, action) => {
            state.online = action.payload;
        },

        changeLoadingStatus: (state) => {
            state.loading = !state.loading;
        },

        changeScreenSize: (state, action) => {
            state.minScreen = action.payload;
        }
    }
})

export const {changeOnlineStatus, changeTheme, changeLoadingStatus, changeActiveLink, changeScreenSize} = uiReducer.actions;
export default uiReducer.reducer;