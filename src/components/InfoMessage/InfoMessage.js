import React from 'react';
import './InfoMessage.css';



function InfoMessage({isShown, message, code, type}) {

  function getMessage(type) {
    if(type === 'profile'){
      return 'При обновлении профиля произошла ошибка'
    } else if(type === 'register'){
      return 'При регистрации пользователя произошла ошибка'
    } else if(type === 'login'){
      return 'Вы ввели неправильный логин или пароль'
    }
  }


  const [textMessage, setTextMessage] = React.useState('');

  React.useEffect(() => {
    switch (code) {
      case 200:
        setTextMessage('Данные успешно обновлены');
        break;
      case 400:
        setTextMessage(getMessage(type));
        break;
      default:
        setTextMessage(message);
    }
  }, [code, message, type]);


  //---РАЗМЕТКА JSX---
  return (
    <div className='message'>
      {isShown && (
        <p className={`message__text ${code === 200 && 'message__text_type_success'}`}>{textMessage}</p>
      )}
    </div>
  );
}
  
export default InfoMessage;