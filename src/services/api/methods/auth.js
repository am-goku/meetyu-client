import apiCall from "../apiCalls";
import { auth_routes } from "../routes";

// @desc: Token refresh function
export const refresh_token = async () => {
    try {
        const url = auth_routes.refresh;
        const method = "POST";
        const response = await apiCall(method, url);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
};

// @desc: Login function
export const user_login = async ({email, password}) => {
    try {
        const data = {email, password};
        const url = auth_routes.login;
        const method = "POST";
        const response = await apiCall(method, url, data);

        localStorage.setItem("access_token", response.accessToken);
        localStorage.setItem("refresh_token", response.refreshToken);

        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}

// @desc: Register function
export const user_register = async ({name, email, password}) => {
    try {
        const data = {name, email, password};
        const url = auth_routes.register;
        const method = "POST";
        const response = await apiCall(method, url, data);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}