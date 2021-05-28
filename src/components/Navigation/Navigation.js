import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function Navigation(props) {

  const [isClicked, setIsClicked] = useState(false);

  //---ОБРАБОТЧИКИ---
  function handleClickMenu() {
    setIsClicked(!isClicked)
  }

  //---РАЗМЕТКА JSX---
  return (
    <nav className={`menu ${isClicked ? 'menu_open' : ''}`}>
      {props.loggedIn ? (
        <>
          <button
            className={`menu__btn ${isClicked ? 'menu__btn_type_close' : 'menu__btn_type_burger'} `} onClick={handleClickMenu}>
          </button>

          <div className={`menu__box ${isClicked ? 'menu__box_open' : ''}`}>
            <NavLink exact to='/' activeClassName='menu__film-link_active' className='menu__film-link app__link'
            onClick={handleClickMenu}>
              Главная
            </NavLink>
            <NavLink to='/movies' activeClassName='menu__film-link_active' className='menu__film-link app__link'
            onClick={handleClickMenu}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' activeClassName='menu__film-link_active' className='menu__film-link app__link'
            onClick={handleClickMenu}>
              Сохраненные фильмы
            </NavLink>
            <Link to='/profile' className='menu__link menu__link_type_profile app__link'
            onClick={handleClickMenu}>
              Аккаунт
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to='/signup' className='menu__link app__link'>Регистрация</Link>
          <Link to='/signin' className='menu__link menu__link_type_signin app__link'>Войти</Link>
        </>
      )}
    </nav>
  );
}
  
export default Navigation;