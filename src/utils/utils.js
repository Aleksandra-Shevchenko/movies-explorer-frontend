export function filterMovies(movies, searchQuery, shortFilms) {
  const moviesByQuery =  movies.filter((item) => {
    const strRu = String(item.nameRU).toLowerCase();
    const strEn = String(item.nameEN).toLowerCase();
    const searchStr = searchQuery.toLowerCase();
    return (strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1);
  });

  if(shortFilms === 'on'){
    return filterShortMovies(moviesByQuery);
  }
  return moviesByQuery;
}

export function filterShortMovies(movies){
  return movies.filter((item) => {
    return item.duration < 40;
  })
}

// проверка данных на осутствие и преобразование
export function changeMovies(movies) {
  movies.forEach(movie => {
    if(!movie.image){
      movie.image = "https://g2.dcdn.lt/images/pix/kinas-76443525.jpg"
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
      movie.image = `https://api.nomoreparties.co${movie.image.url}`
    }
  });
}

export function getSavedMovieCard(arr, id) {
  return arr.find((item) => {
    return item.movieId === id;
  })
}