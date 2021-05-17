import './Header.css';
import '../App/App.css';

import logo from '../../images/logo.svg';
import { Link, NavLink, Route } from 'react-router-dom';


function Header() {

  const endpoints = ['/movies', '/saved-movies', '/profile'];

  //---РАЗМЕТКА JSX---
  return (
    <Route exact path={endpoints.concat('/')}>
      <header className='header'>
        <Link to='/'><img className='header__logo' src={logo} alt='Логотип приложения Movies' /></Link>
        <nav className='header__menu'>
          <div className='header__menu-box'>
            <Route exact path={endpoints}>
              <NavLink exact to='/movies' activeClassName='header__film-link_active' className='header__film-link app__link'>Фильмы</NavLink>
              <NavLink to='/saved-movies' activeClassName='header__film-link_active' className='header__film-link app__link'>Сохраненные фильмы</NavLink>
            </Route>
          </div>
          <div className='header__menu-box'>
            <Route exact path='/'>
              <Link exact to='/signup' className='header__link app__link'>Регистрация</Link>
              <Link exact to='/signin' className='header__link header__link_type_signin app__link'>Войти</Link>
            </Route>
            <Route exact path={endpoints}>
              <Link exact to='/profile' className='header__link header__link_type_profile app__link'>Аккаунт</Link>
            </Route>
          </div>
        </nav>
      </header>
    </Route>
    
  );
}
  
export default Header;