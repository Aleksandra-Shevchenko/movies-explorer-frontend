import './Register.css';
import Entrance from '../Entrance/Entrance';


function Register(){

  //---РАЗМЕТКА JSX---
  return (
    <Entrance
      linkTo='signin'
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      subtitle='Уже зарегестрированы?'
      linkName='Войти'
    >
      <label className='entrance__label'>Имя
        <input
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
    </Entrance>
  )
}
  
export default Register;