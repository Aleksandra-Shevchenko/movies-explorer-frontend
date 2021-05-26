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

export function filterShortMovies(movies, shortFilms = 'off'){
  return movies.filter((item) => {
    return item.duration < 40;
  })
}