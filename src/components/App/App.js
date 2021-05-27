import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

import './App.css';

// тестовый массив карточек для проверки верстки
import { testArr } from '../../utils/testData';
import React from 'react';
// import moviesApi from '../../utils/MoviesApi';


function App() {

  // все фильмы
  // const [allMovies, setAllMovies] = React.useState([]);


  // function changeMovies(movies) {
  //   movies.forEach(movie => {
  //     if(!movie.image){
  //       movie.image = "https://g2.dcdn.lt/images/pix/kinas-76443525.jpg"
  //     } else {
  //       movie.image = `https://api.nomoreparties.co${movie.image.url}`
  //     }
  //   });
  // }

  // function handleGetInitialMovies () {
  //   moviesApi.getMovies()
  //     .then((data) => {
  //       changeMovies(data);
  //       setAllMovies(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }


  //---РАЗМЕТКА JSX---
  return (
    <div className='app'>

      <Header />

      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies  />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies list={testArr}/>
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
