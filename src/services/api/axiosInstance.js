import axios from "axios";

const instance = axios.create({
    baseURL: process.env.SERVER_URL,
});


instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = localStorage.getItem("access_token");
    return config;
}, async (error) => {
    return Promise.reject(error);
})



instance.interceptors.response.use((response) => {
    return Promise.resolve(response);
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
        try {
            const config_options = { headers: { Authorization: localStorage.getItem('refresh_token') } }
            const token_response = await axios.post(`${process.env.SERVER_URL}/auth/refresh-token`, {}, config_options)

            localStorage.setItem("access_token", token_response?.newAccessToken);

            if (originalRequest) {
                originalRequest.headers.Authorization = `Bearer ${token_response?.newAccessToken}`;
                const newData = await axios.request(originalRequest);
                return newData;
            }
        } catch (refreshError) {
            localStorage.clear();
            window.location.href = "/auth";
        }
    } else {
        return Promise.reject(error);
    }


})



export default instance;