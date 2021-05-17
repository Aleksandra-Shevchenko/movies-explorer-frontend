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


function App() {
  //---РАЗМЕТКА JSX---

  return (
    <div className='app'>

      <Header />

      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies list={testArr}/>
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
