import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
 
  //---РАЗМЕТКА JSX---
  return (
    <section className='movies-list'>
      <div className='movies-list__box'>
        {props.list.map((item) => (
          <MoviesCard
            key={item.id}
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