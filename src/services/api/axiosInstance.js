const { default: axios } = require("axios");

const instance = axios.create({
    baseURL: process.env.SERVER_URL,
});


axios.interceptors.request.use(async (config) => {
    config.headers.Authorization = localStorage.getItem("access_token");
    return config;
}, (err) => {
    return Promise.reject(err);
})


export default instance;