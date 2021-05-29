import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';


function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
	

  //---ЭФФЕКТЫ---
  //получаем текущие значения для установки в поля попапа
  React.useEffect(() => {
    if(currentUser){
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]); 


  //---ОБРАБОТЧИКИ---
	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdate(name, email);
  }
  //---РАЗМЕТКА JSX---
  return (
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>Имя
            <input
              value={name}
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
              value={email}
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
            
            <button className='profile__btn profile__btn_type_logout' type='button' onClick={props.onSignOut}>
              Выйти из аккаунта
            </button>
        </form>
      </div>
      
    </section>
  );
}
  
export default Profile;