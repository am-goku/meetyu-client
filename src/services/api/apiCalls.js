import instance from "./axiosInstance";

const apiCall = async (method, url, data) => {
    try {
        
        let response = null;

        switch(method) {
            case "GET":
                response = await instance.get(url, data);
                break
            case "POST":
                response = await instance.post(url, data);
                break
            case "PUT":
                response = await instance.put(url, data);
                break
            case "DELETE":
                response = await instance.delete(url, data);
                break
            default:
                response = Promise.reject(new Error("Invalid method"));
                break
        }

        if(response) return Promise.resolve(response?.data);

    } catch (error) {
        return Promise.reject(error?.response?.data || error);
    }
}


export default apiCall;