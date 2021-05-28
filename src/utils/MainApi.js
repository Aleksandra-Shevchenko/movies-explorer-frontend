// import { BASE_URL } from "./constants";
const BASE_URL = 'https://api.shev.movies.students.nomoredomains.icu';


// --- КЛАСС ДЛЯ ОТПРАВКИ ЗАПРОСОВ НА НАЩ СЕРВЕР ПРИЛОЖЕНИЯ ---

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

//   signout() {
//     return fetch(`${this._baseUrl}/signout`,{
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Accept': 'application/json',
//         authorization : this._token,
//       }
//     })
//     .then(res => {
//       if (res.ok) {
//         return res.json;
//       }
//       return Promise.reject(`Ошибка: ${res.status}`);
//     })
//   }






















  //метод сохранения отредактированных данных пользователя на сервере
  updateUserProfile(name, email) {
    console.log(JSON.stringify({
        name: name,
        email: email,
      }));

    return fetch(this._userUrl, {
        method: 'PATCH',
        headers: {
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


  //метод получения карточек с сервера
  getSavedCards() {
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

  //метод добавления новой карточки на сервер
  postNewCard({
    name,
    link
  }) {
    return fetch(this._cardsUrl, {
        method: 'POST',
        headers: {
          authorization: this._token,
        },
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          link: link,
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
  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
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