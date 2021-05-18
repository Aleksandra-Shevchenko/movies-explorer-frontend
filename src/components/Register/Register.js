import './Register.css';
import '../App/App.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';



function Register() {

  //---РАЗМЕТКА JSX---
  return (
    <section className='entrance'>
      <Link to='/' className='logo'><img className='logo__pic' src={logo} alt='Логотип приложения Movies' /></Link>
      <h2 className='entrance__title'>Добро пожаловать!</h2>
      <form className='entrance__form'>
        <label className='entrance__label'>Имя
          <input
            // value={name || ''}
            // onChange={handleChangeName}
            id='name'
            type='text'
            className='entrance__input'
            name='name'
            minLength='2'
            maxLength='30'
            required
          />
          <span id='name-error' className='entrance__error'></span>
        </label>
        <label className='entrance__label'>E-mail
          <input
            // value={email || ''}
            // onChange={handleChangeEmail}
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
            // value={password}
            // onChange={handleChangePassword}
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

        <button className='entrance__submit-btn app__link' type='submit'>Зарегистрироваться</button>
        <p className='entrance__subtitle'>Уже зарегестрированы?<Link to='signin' className='entrance__link app__link'>Войти</Link></p>

      </form>
    </section>
  );
}
  
export default Register;