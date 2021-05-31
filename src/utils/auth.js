// import { BASE_URL } from "./constants";
// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://api.shev.movies.students.nomoredomains.icu';

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
    .then(res => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    })
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then(res => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    })
}

export const signout = (token) => {
    return fetch(`${BASE_URL}/signout`,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}