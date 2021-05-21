import './Entrance.css';

import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';


function Entrance(props) {

  //---РАЗМЕТКА JSX---
  return (
    <section className='entrance'>
      <Logo />
      <h2 className='entrance__title'>{props.title}</h2>
      <form className='entrance__form'>
        <>{props.children}</>
        <label className='entrance__label'>E-mail
          <input
            id='email'
            type='email'
            className='entrance__input'
            name='email'
            minLength='2'
            maxLength='30'
            required
          />
          <span id='email-error' className='entrance__error'></span>
        </label>
        <label className='entrance__label'>Пароль
          <input
            id='password'
            type='password'
            className='entrance__input'
            name='password'
            minLength='4'
            maxLength='20'
            required
          />
          <span id='password-error' className='entrance__error'>Что-то пошло не так...</span>
        </label>

        <button
          className={`entrance__submit-btn app__link ${props.linkTo === 'signup' && 'entrance__login-btn'}`}
          type='submit'>{props.btnName}
        </button>
        <p className='entrance__subtitle'>{props.subtitle}<Link to={props.linkTo} className='entrance__link app__link'>{props.linkName}</Link></p>
      </form>
    </section>
  );
}
  
export default Entrance;