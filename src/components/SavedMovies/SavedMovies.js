import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';
import React from 'react';


function SavedMovies({ list, onDeleteClick, isError }) {

  // состояния запросов
  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState('off');
  // состояния фильмов
  const [filteredMovies, setFilteredMovies] = React.useState(list);
  // состояния вспомогательные
  const [isNothingFound, setIsNothingFound] = React.useState(false);

  // ---ОБРАБОТЧИКИ---
  // обработчик отправки формы
  function handleSearchSubmit(value) {
    setSearchQuery(value);
    const resultList = filterMovies(list, searchQuery, shortFilms);
    setFilteredMovies(resultList);
  };

  // обработчик клика по радиокнопке
  function handleShortFilms(e) {
    setShortFilms(e.target.value);
  };

  // ---ЭФФЕКТЫ---
  // по новому запросу фильтруем фильмы
  React.useEffect(() => {
    const arr = filterMovies(list, searchQuery, shortFilms);
    setFilteredMovies(arr);
    if (searchQuery) {
      arr.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
    }
  }, [searchQuery, shortFilms, list]);


  // ---РАЗМЕТКА JSX---
  return (
    <section className='saved-movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={handleShortFilms}
        shortFilms={shortFilms}
        savedMoviesPage={true}
      />
      <MoviesCardList
        list={filteredMovies}
        savedMoviesPage={true}
        onDelete={onDeleteClick}
        isEmptyList={isNothingFound}
        isError={isError}
      />
    </section>
  );
};
  
export default SavedMovies;