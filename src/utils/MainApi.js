// import { BASE_URL } from "./constants";
const BASE_URL = 'https://api.shev.movies.students.nomoredomains.icu';


// --- КЛАСС ДЛЯ ОТПРАВКИ ЗАПРОСОВ НА СЕРВЕР ПРИЛОЖЕНИЯ ---

class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._moviesUrl = `${this._baseUrl}/movies`;
    this._token = headers['authorization'];
  }


  //метод получения информации о пользователе с сервера
  getUserData() {
    return fetch(this._userUrl, {
        headers: {
          authorization: this._token,
        },
        credentials: 'include',
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  // метод сохранения отредактированных данных пользователя на сервере
  updateUserProfile(name, email) {
    console.log(JSON.stringify({
        name: name,
        email: email,
      }));

    return fetch(this._userUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: this._token,
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          email,
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }


  // метод получения избранных пользователем фильмов с сервера
  getUsersMovies() {
    return fetch(this._moviesUrl, {
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  // метод добавления нового фильма в избранное (создание карточки)
  saveNewMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    id,
  }) {
    return fetch(this._moviesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token,
      },
      credentials: 'include',
      body: JSON.stringify({
        country: country || 'неизвестно',
        director,
        duration,
        year,
        description,
        image,
        trailer: trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId: id,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //метод удаления карточки пользователя с сервера
  deleteMovie(movieId) {
    return fetch(`${this._moviesUrl}/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //метод постановки/удаления лайка на карточке
  changeLikeCardStatus(cardId, isNotLiked){
    return fetch(`${this._cardsUrl}/${cardId}/likes`, {
      method: isNotLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}


//создаем экземпляр класса Api
const mainApi = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default mainApi;