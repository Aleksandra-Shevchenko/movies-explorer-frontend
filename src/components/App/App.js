import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as auth from '../../utils/auth';

import './App.css';

// тестовый массив карточек для проверки верстки
import { testArr } from '../../utils/testData';
import React from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
// import moviesApi from '../../utils/MoviesApi';


function App() {
  const history = useHistory();
  
  //состояния авторизации пользователя и его данных
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  // const [email, setEmail] = React.useState('');
  // const [name, setName] = React.useState('');

  //при загрузке если получаем пользователя то перенаправляем его
  React.useEffect(() => {
    mainApi.getUserData()
      .then(data => {
        handleLoggedIn();
        // setEmail(data.email);
        setCurrentUser(data);
        // history.push('/movies');
      })
      .catch(err => {
        console.log(err);
      })
  }, [history, loggedIn]);





  //---ОБРАБОТЧИКИ---
  function handleLoggedIn() {
    setLoggedIn(true);
  }

  //обработчик регистрации пользователя
  function handleRegister(name, email, password){
    auth.register(name, email, password)
      .then(data => {
        if(data){
          // handleInfoTooltip(true);
          console.log(data)
          handleLogin(data.email, password);
        } 
      })
      .catch(err => {
        console.log(err);
        // handleInfoTooltip(false);
      })
  }

  //обработчик авторизации пользователя
  function handleLogin(email, password) {
    auth.login(email, password)
      .then(res => {
        // setEmail(email);
        handleLoggedIn();
        history.push('/movies');
      })
      .catch(err => {
        // handleInfoTooltip(false);
        console.log(err);
      })
  }

  //обработчик выхода пользователя
  function handleSignOut() {
    auth.signout()
      .then(res => {
        setLoggedIn(false);
        // setEmail('');
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  //изменение данных пользователя
  function handleUpdateUser(name, email) {
    // setRenderSaving(true);
    mainApi.updateUserProfile(name, email)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err))
      // .finally(() => setRenderSaving(false));
  }

  //---РАЗМЕТКА JSX---
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className='app'>

        <Header loggedIn={loggedIn}/>

        <Switch>
          <ProtectedRoute
            exact path='/movies'
            loggedIn={loggedIn}
            component={Movies}
          />

          <ProtectedRoute
            exact path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            list={testArr}
          />

          <ProtectedRoute
            exact path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={handleSignOut}
            onUpdate={handleUpdateUser}
          />

          <Route path='/' exact>
            <Main />
          </Route>

          <Route path='/signup'>
            <Register onRegister={handleRegister}/>
          </Route>

          <Route path='/signin'>
            <Login onLogin={handleLogin}/>
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

          {/* <Route>
            {loggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Redirect to='/' />
            )}
          </Route> */}

        </Switch>

        <Footer />

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
