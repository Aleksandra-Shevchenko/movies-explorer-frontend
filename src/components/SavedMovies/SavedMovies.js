import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';
import React from 'react';


function SavedMovies(props) {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState('off');
  const [filteredMovies, setFilteredMovies] = React.useState(props.list);


  // обработчик отправки формы
  function handleSearchSubmit(value) {
    setSearchQuery(value);
    const resultList = filterMovies(props.list, searchQuery, shortFilms);
    setFilteredMovies(resultList);
  }

  // обработчик клика по радиокнопке
  function handleShortFilms(e) {
    setShortFilms(e.target.value);
  }

  // по новому запросу фильтруем фильмы
  React.useEffect(() => {
    const arr = filterMovies(props.list, searchQuery, shortFilms);
    setFilteredMovies(arr);
  }, [searchQuery, shortFilms, props.list])



  // ---РАЗМЕТКА JSX---
  return (
    <section className='saved-movies'>
      <SearchForm onSearchClick={handleSearchSubmit} onCheckbox={handleShortFilms} shortFilms={shortFilms} savedMoviesPage={true}/>
      <MoviesCardList list={filteredMovies} savedMoviesPage={true} onDelete={props.onDeleteClick}/>
    </section>
  );
}
  
export default SavedMovies;