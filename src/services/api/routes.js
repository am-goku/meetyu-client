export const auth_routes = {
    login: "/user/login",
    refresh: "/auth/refresh-token",
    email_verification: "/auth/:email/verify/:token"
}

export const user_routes = {
    register: "/user/register",

    suggesion: "/user/fetch-suggesions",

    send_req: (id) => `/user/connection/request/send/${id}`,
    del_req: (id) => `/user/connection/request/delete/${id}`,
    acc_req: (id) => `/user/connection/request/accept/${id}`,
    rem_frnd: (id) => `/user/connection/friend/remove/${id}`,

    get_req: '/user/connection/request/fetch',
    get_friends: '/user/connection/friend/fetch',
}

export const chat_routes = {
    //chat room
    create: '/chat/create-chatroom',
    fetch: '/chat/get-chatrooms',
    delete: (roomId) => `/chat/delete-chatroom/${roomId}`,
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


export const messageRoutes = {
    send: (roomId) => `/message/send/${roomId}`,
    delete: (messageId) => `/message/delete/${messageId}`,
    fetch: (roomId) => `/message/fetch/${roomId}`
}