import apiCall from "../apiCalls";
import { chat_routes } from "../routes";



export async function createChatRoom(participants) {
    try {
        const url = chat_routes.create;
        const method = "POST";
        const body = {
            participants: [participants],
            type: 'one-one',
        }

        const data = await apiCall(method, url, body);

        return Promise.resolve(data);

    } catch (error) {
        return Promise.reject(error);
    }
}


export async function fetchChatRooms() {
    try {
        const url = chat_routes.fetch;
        const method = "GET";
        
        const data = await apiCall(method, url);

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}


export async function deleteChatRoom(roomId) {
    try {
        const url = chat_routes.delete(roomId);
        const method = "DELETE";

        const data = await apiCall(method, url);

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
}