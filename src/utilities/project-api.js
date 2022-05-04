import sendRequest from "./send-request";

const Base_URL = '/api/projects';

export async function getAllProjects() {
    return sendRequest(`${Base_URL}/index`, 'GET', null)
}

export async function createProject(payload) {
    return sendRequest(`${Base_URL}/new`, 'POST', payload)
  
}

export async function getOneProject(payload) {
    return sendRequest(`${Base_URL}/details`, 'GET', payload)
}