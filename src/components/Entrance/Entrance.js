import './Entrance.css';

import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import React from 'react';


function Entrance(props) {
  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  //---ОБРАБОТЧИКИ---
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  //---ОБРАБОТЧИКИ---
  function handleSubmit(e) {
    e.preventDefault();
    props.type === 'signup'
      ? props.onSubmit(name, email, password)
      : props.onSubmit(email, password);
  }

  //---РАЗМЕТКА JSX---
  return (
    <section className='entrance'>
      <Logo />
      <h2 className='entrance__title'>{props.title}</h2>
      <form className='entrance__form' onSubmit={handleSubmit}>
        {props.type === 'signup' && (
          <label className='entrance__label'>Имя
            <input
              id='name'
              type='text'
              className='entrance__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              value={name}
              onChange={handleChangeName}
            />
             <span id='name-error' className='entrance__error'></span>
            </label>
        )}
        <label className='entrance__label'>E-mail
          <input
            id='email'
            type='email'
            className='entrance__input'
            name='email'
            minLength='2'
            maxLength='30'
            required
            value={email}
            onChange={handleChangeEmail}
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
            value={password}
            onChange={handleChangePassword}
          />
          <span id='password-error' className='entrance__error'>Что-то пошло не так...</span>
        </label>

        <button
          className={`entrance__submit-btn app__link ${props.type === 'signup' && 'entrance__login-btn'}`}
          type='submit'>{props.btnName}
        </button>
        <p className='entrance__subtitle'>{props.subtitle}<Link to={props.linkTo} className='entrance__link app__link'>{props.linkName}</Link></p>
      </form>
    </section>
  );
}
  
export default Entrance;