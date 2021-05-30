import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';

import './Profile.css';



function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange, setValues, setIsValid} = useFormWithValidation();

  //---ЭФФЕКТЫ---
  //получаем текущие значения для установки в поля формы
  React.useEffect(() => {
    if(currentUser){
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]); 

  //блокируем форму если значения в полях и контексте одинаковые
  React.useEffect(() => {
    if(currentUser.name === values.name && currentUser.email === values.email){
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser])

  //---ОБРАБОТЧИКИ---
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdate(values.name, values.email);
  }

  //---РАЗМЕТКА JSX---
  return (
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>Имя
            <input
              value={values.name || ''}
              onChange={handleChange}
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              id='name'
            />
            <span id="name-error" className='profile__error'>
              {errors.name || ''}
            </span>
          </label>
          <label className='profile__label'>Email
            <input
              value={values.email || ''}
              onChange={handleChange}
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              id='email'
            />
            <span id='email-error' className='profile__error'>
              {errors.email || ''}
            </span>
          </label>
          <button
            className={`profile__btn profile__btn_type_submit app__link
            ${!isValid && 'profile__btn_disabled'}`}
            type='submit'
            disabled={!isValid}
          >
            {isValid ? 'Сохранить' : 'Редактировать'}
          </button>
            
          <button className='profile__btn profile__btn_type_logout' type='button' onClick={props.onSignOut}>
            Выйти из аккаунта
          </button>
        </form>
      </div>
      
    </section>
  );
}
  
export default Profile;