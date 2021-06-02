import './App.css';
import React from 'react';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import { SUCCESSFUL_CODE } from '../../utils/constants';


function App() {
  const history = useHistory();
  
  // состояния авторизации пользователя и его данных
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoaging, setIsLoaging] = React.useState(true);
  // состояния фильмов пользователя
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  // состояния уведомлений пользователя 
  const [infoMessage, setInfoMessage] = React.useState({
    isShown: false,
    message: '',
    code: SUCCESSFUL_CODE,
  });


  // ---ЭФФЕКТЫ---
  // при логине, если получаем пользователя то обновляем стейты
  React.useEffect(() => {
    setIsLoaging(true);
    mainApi.getUserData()
      .then(data => {
        handleLoggedIn();
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoaging(false))
  }, [loggedIn]);

  // при загрузке страницы получаем данные избранных пользователем фильмов
  React.useEffect(() => {
    if(loggedIn){
      mainApi.getUsersMovies()
      .then((data) => {
        setSavedMovies(data);
        setIsError(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
    }
  }, [loggedIn]);


  // ---ОБРАБОТЧИКИ---
  // обработчик установки стейта входа/логина пользователя
  function handleLoggedIn() {
    setLoggedIn(true);
  };

  // обработчик регистрации пользователя
  function handleRegister(name, email, password){
    mainApi.register(name, email, password)
      .then(data => {
        if(data){
          console.log(data);
          handleLogin(data.email, password);
        } 
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'register',
        });
      })
  };

  // обработчик авторизации пользователя
  function handleLogin(email, password) {
    setIsLoaging(true);
    mainApi.login(email, password)
      .then(res => {
        handleLoggedIn();
        history.push('/movies');
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'login',
        });
      })
      .finally(() => setIsLoaging(false))
  };

  // обработчик выхода пользователя
  function handleSignOut() {
    mainApi.signout()
      .then(res => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  };

  // обработчик изменения данных пользователя
  function handleUpdateUser(name, email) {
    mainApi.updateUserProfile(name, email)
      .then(data => {
        setCurrentUser(data);
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          type: 'profile',
        });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'profile',
        });
      })
  };

  // обработчик добавления фильма в избранное
  function handleSaveMovie(movie){
    mainApi.saveNewMovie(movie)
      .then(newCard => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch(err => console.log(err))
  };

  // обработчик удаления фильма из избранного
  function handleDeleteMovie(movie){
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) => m._id === movie._id ? false : true);
        setSavedMovies(newMoviesList);
      })
      .catch(err => console.log(err))
  };

  // обработчик сброса вывода сообщения с сервера
  function handleClickResetInfoMessage() {
    if (infoMessage.isShown){
      setInfoMessage({
        ...infoMessage,
        isShown: false,
        message: '',
        type: '',
        code: SUCCESSFUL_CODE,
      });
    }
  };

  // ---РАЗМЕТКА JSX---
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className='app' onClick={infoMessage.isShown ? handleClickResetInfoMessage : null}>
        {isLoaging ? (
          <Preloader />
        ) : (
          <>
            <Header loggedIn={loggedIn} /> 

            <Switch>
              <ProtectedRoute
                exact path='/movies'
                loggedIn={loggedIn}
                component={Movies}
                savedMoviesList={savedMovies}
                onLikeClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
              />

              <ProtectedRoute
                exact path='/saved-movies'
                loggedIn={loggedIn}
                component={SavedMovies}
                list={savedMovies}
                onDeleteClick={handleDeleteMovie}
                isError={isError}
              />

              <ProtectedRoute
                exact path='/profile'
                loggedIn={loggedIn}
                component={Profile}
                onSignOut={handleSignOut}
                onUpdate={handleUpdateUser}
                infoMessage={infoMessage}
              />

              <Route path='/' exact>
                <Main />
              </Route>

              <Route path='/signup'>
                {loggedIn ? <Redirect to='/movies' /> : <Register onRegister={handleRegister} infoMessage={infoMessage} />}
              </Route>

              <Route path='/signin'>
                {loggedIn ? <Redirect to='/movies' /> : <Login onLogin={handleLogin} infoMessage={infoMessage} />}
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>

            </Switch>

            <Footer />
          </>
        )}
      </div>

    </CurrentUserContext.Provider>
  );
};

export default App;
