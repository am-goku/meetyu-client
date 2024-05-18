import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    chatRooms: [],
    selectedRoom: null,
}

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setChatRooms: (state, action) => {
            return {
                chatRooms: action.payload,
                selectedRoom: state.selectedRoom
            }
        },

        newChatRoom: (state, action) => {
            return {
                chatRooms: [action.payload, ...state.chatRooms],
                selectedRoom: action.payload
            }
        },

        clearRoom: (state, action) => {
            return initialState
        },

        updateRooms: (state, action) => {
            const updatedRooms = state.chatRooms.filter(room => room._id !== action.payload._id);

            return {
                chatRooms: [action.payload._id, ...updatedRooms],
                selectedRoom: state.selectedRoom
            }
        },

        setRoom: (state, action) => {
            return {
                chatRooms: state.chatRooms,
                selectedRoom: action.payload,
            }
        }
    }
})




export const {clearRoom, newChatRoom, setChatRooms, updateRooms, setRoom} = user.actions;
export default user.reducer;