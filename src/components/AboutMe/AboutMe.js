import './AboutMe.css';
import '../Main/Main.css';
import '../App/App.css';
import photo from '../../images/my-photo.png';


function AboutMe() {

  //---РАЗМЕТКА JSX---
  return (
    <section className='student content__section' id='student'>
      <h2 className='content__title'>Студент</h2>
      <article className='about-me'>
        <div className='about-me__text-box'>
          <div className='about-me__main-info'>
            <h3 className='about-me__title'>Александра</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 31 год</p>
            <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <ul className='about-me__contacts'>
            <li className='about-me__contact'><a className='about-me__link app__link-outside' href='https://www.facebook.com/dorosh.ag' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
            <li className='about-me__contact'><a className='about-me__link app__link-outside' href='https://github.com/Aleksandra-Shevchenko' target='_blank' rel='noopener noreferrer'>Github</a></li>
          </ul>
        </div>
        <div className='about-me__photo-box'>
          <img className='about-me__photo' src={photo} alt='Фото студента' />
        </div>
      </article>
    </section>
  );
}
  
export default AboutMe;