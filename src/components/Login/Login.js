import './Login.css';
import Entrance from "../Entrance/Entrance";

function Login(){

  //---РАЗМЕТКА JSX---
  return (
    <Entrance
      linkTo='signup'
      title='Рады видеть!'
      btnName='Войти'
      subtitle='Ещё не зарегистрированы?'
      linkName='Регистрация'
    />
  )
}
 
export default Login;