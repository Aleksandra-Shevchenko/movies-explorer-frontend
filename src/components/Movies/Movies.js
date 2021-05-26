import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import { filterMovies } from '../../utils/utils';


// сделал поиск -> сохранил строку по которой производился поиск и массив найденных фильмов в localStorage -> при монтировании компонента проверяешь есть ли в localStorage данные, если есть, то берешь оттуда и отображаешь на странице

// Привет, в localStorage следует сохранять  результаты фильтрации ,а не все данные api
// сохранение выполняется localStorage.setItem('movies', data)

function Movies({ movies, onAllMovies }) {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState('off');
  const [filteredMovies, setFilteredMovies] = React.useState([]);


  function handleSearchSubmit(value) {
    setSearchQuery(value);
    localStorage.setItem('searchQuery', value);
    if(!movies.length){
      onAllMovies();
    }
  }

  function handleCheckbox(e) {
    setShortFilms(e.target.value);
	}

  React.useEffect(() => {
    
  })

  React.useEffect(() => {
    setFilteredMovies(filterMovies(movies, searchQuery, shortFilms));
  }, [searchQuery, movies, shortFilms])
  

  //---РАЗМЕТКА JSX---
  return (
    <section className='movies'>
      <SearchForm onSearchClick={handleSearchSubmit} onCheckbox={handleCheckbox} shortFilms={shortFilms}/>
      <MoviesCardList list={filteredMovies}/>
    </section>
  );
}
  
export default Movies;