import './Header.css';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header() {

  const endpoints = ['/movies', '/saved-movies', '/profile'];

  //---РАЗМЕТКА JSX---
  return (
    <Route exact path={endpoints.concat('/')}>
      <header className='header'>
        <Logo />
        <Navigation endpoints={endpoints}/>
      </header>
    </Route>
  );
}
  
export default Header;