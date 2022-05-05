import sendRequest from "./send-request";

const Base_URL = '/api/tools';

export async function getAllTools() {
    return sendRequest(`${Base_URL}/index`, 'GET', null)
}

export async function createTool(payload) {
    return sendRequest(`${Base_URL}/new`, 'POST', payload)
}