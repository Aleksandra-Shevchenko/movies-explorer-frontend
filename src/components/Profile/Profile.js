import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';


function Profile() {

  // значения временные, для проверки верстки
  const userName = 'Виталий';
  const [name, setName] = React.useState(userName);
  const [email, setEmail] = React.useState('pochta@yandex.ru');
	
	function handleChangeName(event) {
		setName(event.target.value);
	}

	function handleChangeEmail(event) {
		setEmail(event.target.value);
	}

  //---РАЗМЕТКА JSX---
  return (
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, ${userName}!`}</h2>
        <form className='profile__form'>
          <label className='profile__label'>Имя
            <input
              value={name || ''}
              onChange={handleChangeName}
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              id='name'
            />
            <span id="name-error" className='profile__error'></span>
          </label>
          <label className='profile__label'>Email
            <input
              value={email || ''}
              onChange={handleChangeEmail}
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              id='email'
            />
            <span id='email-error' className='profile__error'></span>
          </label>
            <button className='profile__btn profile__btn_type_submit app__link' type='submit'>Редактировать</button>
            
            {/* временная реализация кнопки с ссылкой внутри, только для тестирования верстки */}
            <button className='profile__btn profile__btn_type_logout' type='button'><Link className='profile__link app__link' to='/'>Выйти из аккаунта</Link></button>
        </form>

      </div>
      
    </section>
  );
}
  
export default Profile;