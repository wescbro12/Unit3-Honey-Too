import { options } from "nodemon/lib/config";
import { getToken } from "./users-service";
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

async function sendRequest(url, method = 'GET', payload = null) {
    const option = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        option.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}