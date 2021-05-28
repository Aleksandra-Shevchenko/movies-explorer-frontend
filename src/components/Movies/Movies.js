import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import { filterMovies, filterShortMovies, changeMovies} from '../../utils/utils';
import moviesApi from '../../utils/MoviesApi';


function Movies() {

  const forCheckbox = localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';

  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState(forCheckbox);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);


  // фильтруем массив и устанавливаем его в хранилище и стейт
  function handleSetFilteredMovies (movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(checkbox === 'on' ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  // обработчик отправки формы
  function handleSearchSubmit(value) {
    setSearchQuery(value);
    localStorage.setItem('searchQuery', value);
    localStorage.setItem('shortFilms', shortFilms);
    
    if(!allMovies.length){
      moviesApi.getMovies()
        .then((data) => {
          changeMovies(data);
          setAllMovies(data);
          handleSetFilteredMovies(data, value, shortFilms);
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      handleSetFilteredMovies(allMovies, value, shortFilms);
    }
  }

  // обработчик клика по радиокнопке
  function handleShortFilms(e) {
    setShortFilms(e.target.value);
    localStorage.setItem('shortFilms', e.target.value);
	}

  //---ЭФФЕКТЫ---
  React.useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('movies'));
    if(arr.length && !searchQuery){
      setShortFilms(localStorage.getItem('shortFilms'));
      setFilteredMovies(shortFilms === 'on' ? filterShortMovies(arr) : arr);
    }
  }, [shortFilms, searchQuery])


  React.useEffect(() => {
    if (searchQuery) {
      const arr = filterMovies(allMovies, searchQuery, shortFilms);
      setFilteredMovies(arr);
    }
  }, [searchQuery, shortFilms, allMovies])


  //---РАЗМЕТКА JSX---
  return (
    <section className='movies'>
      <SearchForm onSearchClick={handleSearchSubmit} onCheckbox={handleShortFilms} shortFilms={shortFilms} />
      <MoviesCardList list={filteredMovies}/>
    </section>
  );
}
  
export default Movies;