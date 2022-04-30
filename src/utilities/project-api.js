import sendRequest from "./send-request";

const Base_URL = '/api/projects';

export async function getAllProjects() {
    return sendRequest(`${Base_URL}/index`, 'GET', null)
}

