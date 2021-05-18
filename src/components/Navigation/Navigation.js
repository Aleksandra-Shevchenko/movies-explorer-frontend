import { Link, NavLink, Route } from 'react-router-dom';
import './Navigation.css';
import '../App/App.css';


function Navigation(props) {

  //---РАЗМЕТКА JSX---
  return (
    <nav className='menu'>
      <div className='menu__box'>
        <Route exact path={props.endpoints}>
          <NavLink to='/movies' activeClassName='menu__film-link_active' className='menu__film-link app__link'>Фильмы</NavLink>
          <NavLink to='/saved-movies' activeClassName='menu__film-link_active' className='menu__film-link app__link'>Сохраненные фильмы</NavLink>
        </Route>
      </div>
      <div className='menu__box'>
        <Route exact path='/'>
          <Link to='/signup' className='menu__link app__link'>Регистрация</Link>
          <Link to='/signin' className='menu__link menu__link_type_signin app__link'>Войти</Link>
        </Route>
        <Route exact path={props.endpoints}>
          <Link to='/profile' className='menu__link menu__link_type_profile app__link'>Аккаунт</Link>
        </Route>
      </div>
    </nav>
  );
}
  
export default Navigation;