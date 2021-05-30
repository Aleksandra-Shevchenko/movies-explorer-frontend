import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { getSavedMovieCard } from '../../utils/utils';


function MoviesCardList(props) {

  function getSavedMoviesPage() {
    return props.list.map((item) => (
      <MoviesCard
        key={item._id}
        card={item}
        savedPage={props.savedMoviesPage}
        onDelete={props.onDelete}
      />
    ))
  }

  function getInitialMoviesPage() {
    return props.list.map((item) => {
      const likedMovie = getSavedMovieCard(props.savedMovies, item.id);
      const likedMovieId = likedMovie ? likedMovie._id : null;
      return (
        <MoviesCard
          key={item.id}
          card={{ ...item, _id: likedMovieId }}
          onLike={props.onLike}
          onDelete={props.onDelete}
          liked={likedMovie ? true : false}
        />)
    })
  }
   
  //---РАЗМЕТКА JSX---
  return (
    <section className='movies-list'>
      {props.isLoading ?  (
        <Preloader />
      ) : (
        props.isEmptyList ? (
          <p className='movies-list__message'>Ничего не найдено</p>
        ) : (
          <>
            <div className='movies-list__box'>
              {props.savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}
            </div>
            <button
              className={`movies-list__more-btn 
                ${(props.savedMoviesPage || props.isEmptyList) && 'movies-list__more-btn_disabled'}`}
              type='button'
              aria-label='Показать еще'
            >
              Ещё
            </button>
          </>
        )
      )}
    </section>
  );
}
  
export default MoviesCardList;