import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import { filterMovies, filterShortMovies, changeMovies} from '../../utils/utils';
import moviesApi from '../../utils/MoviesApi';


// сделал поиск -> сохранил строку по которой производился поиск и массив найденных фильмов в localStorage -> при монтировании компонента проверяешь есть ли в localStorage данные, если есть, то берешь оттуда и отображаешь на странице

//  в localStorage следует сохранять  результаты фильтрации ,а не все данные api
// сохранение выполняется localStorage.setItem('movies', data)

function Movies(props) {

  const forCheckbox = localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';


  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState(forCheckbox);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);



  function handleSetFilteredMovies (movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(checkbox === 'on' ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }


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

  function handleCheckbox(e) {
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
      <SearchForm onSearchClick={handleSearchSubmit} onCheckbox={handleCheckbox} shortFilms={shortFilms} />
      <MoviesCardList list={filteredMovies}/>
    </section>
  );
}
  
export default Movies;