// import { BASE_URL } from "./constants";
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// --- API ДЛЯ ОТПРАВКИ ЗАПРОСА НА СТОРОННИЙ СЕРВЕР ---

export function getMovies() {
  return fetch(MOVIES_URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}
