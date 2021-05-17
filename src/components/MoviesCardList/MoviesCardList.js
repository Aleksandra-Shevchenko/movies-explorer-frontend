import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

//временные импорты картинок фильмов
// import film1 from '../../images/film1.jpg';
// import film2 from '../../images/film2.jpg';
// import film3 from '../../images/film3.jpg';
// import film4 from '../../images/film4.jpg';
// import film5 from '../../images/film5.jpg';
// import film6 from '../../images/film6.jpg';
// import film7 from '../../images/film7.jpg';
// import film8 from '../../images/film8.jpg';
// import film9 from '../../images/film9.jpg';
// import film10 from '../../images/film10.jpg';
// import film11 from '../../images/film11.jpg';
// import film12 from '../../images/film12.jpg';

// временный массив карточек для тестирования верстки
// const testArr = [
//   {
//     duration: 560,
//     image: film1,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1001,
//   },
//   {
//     duration: 560,
//     image: film2,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1002,
//   },
//   {
//     duration: 560,
//     image: film3,
//     nameRU: '33 слова о дизайне',
//     owner: 1,
//     movieId: 1003,
//   },
//   {
//     duration: 560,
//     image: film4,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1004,
//   },
//   {
//     duration: 560,
//     image: film5,
//     nameRU: '33 слова о дизайне',
//     owner: 1,
//     movieId: 1005,
//   },
//   {
//     duration: 560,
//     image: film6,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1006,
//   },
//   {
//     duration: 560,
//     image: film7,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1007,
//   },
//   {
//     duration: 560,
//     image: film8,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1008,
//   },
//   {
//     duration: 560,
//     image: film9,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1009,
//   },
//   {
//     duration: 560,
//     image: film10,
//     nameRU: '33 слова о дизайне',
//     owner: 1,
//     movieId: 1010,
//   },
//   {
//     duration: 560,
//     image: film11,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1011,
//   },
//   {
//     duration: 560,
//     image: film12,
//     nameRU: '33 слова о дизайне',
//     owner: 0,
//     movieId: 1012,
//   },
// ];



function MoviesCardList(props) {
  //---РАЗМЕТКА JSX---

  console.log(props);
  return (
    <section className='movies-list'>
      <div className='movies-list__box'>
        {props.list.map((item) => (
          <MoviesCard
            key={item.movieId}
            card={item}
            savedPage={props.savedMoviesPage}
          />)
        )}
      </div>
      <button className='movies-list__more-btn' type='button' aria-label='Показать еще'>Ещё</button>
    </section>
  );
}
  
export default MoviesCardList;