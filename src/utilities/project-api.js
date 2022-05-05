import sendRequest from "./send-request";

const Base_URL = '/api/projects';

export async function getAllProjects() {
    return sendRequest(`${Base_URL}/index`)
}

export async function createProject(payload) {
    return sendRequest(`${Base_URL}/new`, 'POST', payload)
  
}

export async function getOneProject( id) {
    return sendRequest(`${Base_URL}/${id}`)
}

export async function updateProject(payload, id) {
    return sendRequest(`${Base_URL}/${id}/edit`, 'PUT', payload)
}

export async function deleteProject(payload) {
    return sendRequest(`${Base_URL}/destroy`, 'DELETE', payload)
}