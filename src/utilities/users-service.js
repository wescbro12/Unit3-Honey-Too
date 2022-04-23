import { getSuggestedQuery } from '@testing-library/react';
import * as usersAPI from './users-api'


//Sign Up
export async function signUp(userData) {
    const token = await usersAPI.signup(userData);
    localStorage.setItem('token', token)
    return token;
}


//Login
export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token)
    return getUser();
}

//Getting the token

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(window.atob(token.split('.')[1]))
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
}

//getUser
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
}


//LogOut
export function logout() {
    localStorage.removeItem('token')
}

//checkToken

export function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr))
}