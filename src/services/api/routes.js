export const auth_routes = {
    login: "/login",
    refresh: "/refresh-token",
    email_verification: "/:email/verify/:token"
}

export const user_routes = {
    register: "/register",

}

export const chat_routes = {
    //chat room
    create: '/create-chatroom',
    fetch: '/get-chatrooms',
    delete: '/delete-chatroom',
    update: {
        //admin
        admin: '/add-admin',
        remove_admin: '/remove-admin',

        //room
        room: (roomId) => `/update-chatrooms/${roomId}`,

        //user
        add_user: (roomId) => `/add-users/${roomId}`,
        remove_user: (roomId) => `/remove-users/${roomId}`,

        //owner
        change_owner: (roomId, adminId) => `/change-owner/${roomId}/${adminId}`
    }
}