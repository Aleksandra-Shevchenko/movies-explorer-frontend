import './Header.css';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


function Header(props) {

  const endpoints = ['/movies', '/saved-movies', '/profile', '/'];

  //---РАЗМЕТКА JSX---
  return (
    <Route exact path={endpoints}>
      <header className='header'>
        <Logo />
        <Navigation loggedIn={props.loggedIn}/>
      </header>
    </Route>
  );
}
  
export default Header;