// import { BASE_URL } from "./constants";
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// --- КЛАСС ДЛЯ ОТПРАВКИ ЗАПРОСА НА СТОРОННИЙ СЕРВЕР ---

class MoviesApi {
  constructor({
    moviesUrl,
    // headers
  }) {
    this._moviesUrl = moviesUrl;
    // this._token = headers['authorization'];
  }

  //метод получения всех фильмов с сервера
  getMovies() {
    return fetch(this._moviesUrl, 
    //     {
    //   headers: {
    //     authorization: this._token,
    //   },
    //   credentials: 'include',
    //   }
      )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

}


//создаем экземпляр класса
const moviesApi = new MoviesApi({
    moviesUrl: MOVIES_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   },
});

export default moviesApi;