import React from "react";
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
          <label className='profile__input-name'>Имя
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
          <label className='profile__input-name'>Email
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
            <button className='profile__btn profile__btn_type_submit' type='submit'>Редактировать</button>
            <button className='profile__btn profile__btn_type_logout' type='button'>Выйти из аккаунта</button>
        </form>

      </div>
      
    </section>
  );
}
  
export default Profile;