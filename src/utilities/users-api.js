import sendRequest from "./send-request";

const Base_URL = '/api/users';

export async function signUp(userData) {
    return sendRequest(`${Base_URL}`, 'POST', userData)
}

export async function checkToken() {
    return sendRequest(`${Base_URL}/check-token`)
}

export async function login(credentials) {
    return sendRequest(`${Base_URL}/login`, 'POST', credentials)
}

