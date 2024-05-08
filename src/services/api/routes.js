export const auth_routes = {
    login: "/user/login",
    refresh: "/auth/refresh-token",
    email_verification: "/auth/:email/verify/:token"
}

export const user_routes = {
    register: "/user/register",

}

export const chat_routes = {
    //chat room
    create: '/chat/create-chatroom',
    fetch: '/chat/get-chatrooms',
    delete: '/chat/delete-chatroom',
    update: {
        //admin
        admin: '/chat/add-admin',
        remove_admin: '/chat/remove-admin',

        //room
        room: (roomId) => `/chat/update-chatrooms/${roomId}`,

        //user
        add_user: (roomId) => `/chat/add-users/${roomId}`,
        remove_user: (roomId) => `/chat/remove-users/${roomId}`,

        //owner
        change_owner: (roomId, adminId) => `/chat/change-owner/${roomId}/${adminId}`
    }
}