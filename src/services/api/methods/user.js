import apiCall from "../apiCalls";
import { user_routes } from "../routes"


export const get_suggesions = () => {
    return new Promise((resolve, reject) => {
        const url = user_routes.suggesion;
        const method = "GET";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const send_request = (id) => {
    return new Promise((resolve, reject) => {
        const url = user_routes.send_req(id);
        const method = "POST";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

export const accept_request = (id) => {
    return new Promise((resolve, reject) => {
        const url = user_routes.acc_req(id);
        const method = "POST";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const delete_request = (id) => {
    return new Promise((resolve, reject) => {
        const url = user_routes.del_req(id);
        const method = "POST";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const remove_friend = (id) => {
    return new Promise((resolve, reject) => {
        const url = user_routes.rem_frnd(id);
        const method = "POST";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const get_requests = () => {
    return new Promise((resolve, reject) => {
        const url = user_routes.get_req;
        const method = "GET";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const get_friends = () => {
    return new Promise((resolve, reject) => {
        const url = user_routes.get_friends;
        const method = "GET";

        apiCall(method, url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}