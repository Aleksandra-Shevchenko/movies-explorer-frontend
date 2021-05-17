import './Header.css';
import '../App/App.css';

import logo from '../../images/logo.svg';
import { Link, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function Header() {

  const endpoints = ['/movies', '/saved-movies', '/profile'];

  //---РАЗМЕТКА JSX---
  return (
    <Route exact path={endpoints.concat('/')}>
      <header className='header'>
        <Link to='/' className='logo  header__logo'><img className='logo__pic' src={logo} alt='Логотип приложения Movies' /></Link>
        <Navigation endpoints={endpoints}/>
      </header>
    </Route>
  );
}
  
export default Header;