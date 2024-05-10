import { io } from "socket.io-client";

let socket;

const socket_url = process.env.SOCKET_URL;


export const initializeSocket = (user) => {
    if(user){
        if (!socket) {
            socket = io.connect(socket_url);
            
            socket.emit('storeSocket', user._id);
    
            socket.on("connect_error", (error) => {
                console.error("Socket connection failed:", error);
            });
    
            socket.on("disconnect", (reason) => {
                console.log("Socket disconnected:", reason);
            });
    
        };
    
        return socket;

    } else {
        socket?.disconnect();
        return null
    }
}