import apiCall from "../apiCalls";
import { chat_routes, messageRoutes } from "../routes";


/**
 * Creates a new chat room with the specified participants.
 *
 * @param {Array} participants - An array of user IDs who will participate in the chat room.
 * @returns {Promise} A promise that resolves to the created chat room's data upon success, or rejects with an error if the request fails.
 * @throws {Error} If the API call fails.
 */
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




/**
 * Fetches all chat rooms.
 *
 * @returns {Promise} A promise that resolves to an array of chat rooms' data upon success, or rejects with an error if the request fails.
 * @throws {Error} If the API call fails.
 */
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




/**
 * Deletes a chat room with the specified ID.
 *
 * @param {string} roomId - The ID of the chat room to be deleted.
 * @returns {Promise} A promise that resolves to the deleted chat room's data upon success, or rejects with an error if the request fails.
 * @throws {Error} If the API call fails.
 */
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




/**
 * Sends a message to a chat room.
 *
 * @param {string} message - The text of the message to be sent.
 * @param {string} type - The type of the message (e.g., 'text', 'image', 'file').
 * @param {string} roomId - The ID of the chat room to which the message will be sent.
 * @returns {Promise} A promise that resolves to the sent message's data upon success, or rejects with an error if the request fails.
 * @throws {Error} If the API call fails.
 */
export async function newMessage(message, type, roomId) {
    try {
        const url = messageRoutes.send(roomId);
        const method = "POST";
        const body = {
            message: message,
            type: type
        }

        const data = await apiCall(method, url, body);

        return Promise.resolve(data);

    } catch (error) {
        return Promise.reject(error)
    }
}



/**
 * Deletes a message with the specified ID.
 *
 * @param {string} messageId - The ID of the message to be deleted.
 * @returns {Promise} A promise that resolves to the deleted message's data upon success, or rejects with an error if the request fails.
 * @throws {Error} If the API call fails.
 */
export async function deleteMessage(messageId) {
    try {
        const url = messageRoutes.delete(messageId);
        const method = "PATCH";
        const data = await apiCall(method, url);

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
}




/**
 * Fetches messages from a chat room.
 *
 * @param {string} roomId - The ID of the chat room to fetch messages from.
 * @returns {Promise} A promise that resolves to an array of messages' data upon success, or rejects with an error if the request fails.
 * @throws {Error} If the API call fails.
 */
export async function fetchMessages(roomId) {
    try {
        const url = messageRoutes.fetch(roomId);
        const method = "GET";
        const data = await apiCall(method, url);

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
}