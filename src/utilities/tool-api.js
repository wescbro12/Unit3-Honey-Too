import sendRequest from "./send-request";

const Base_URL = '/api/tools';

export async function getAllTools() {
    return sendRequest(`${Base_URL}/index`)
}

export async function createTool(payload) {
    return sendRequest(`${Base_URL}/new`, 'POST', payload)
}

export async function getOneTool(id) {
    return sendRequest(`${Base_URL}/${id}`)
}