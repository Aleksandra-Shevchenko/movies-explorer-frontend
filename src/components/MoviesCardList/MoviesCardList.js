import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { getSavedMovieCard } from '../../utils/utils';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import React from 'react';



function MoviesCardList(props) {

  const width = useWindowWidth();
  const [showList, setShowList] = React.useState([]);
  const [cardsShowParams, setCardsShowParams] = React.useState({sum: 0, more: 0});

  // ---ЭФФЕКТЫ---
  // задаем значения для отображения карточек при изменении ширины экрана
  React.useEffect(() => {
    if (width > 1331){
      setCardsShowParams({sum: 8, more: 4});
    } else if(width <= 1331 && width > 1027){
      setCardsShowParams({ sum: 12, more: 3});
    } else if (width <=1027 && width > 629){
      setCardsShowParams({sum: 8, more: 2});
    } else if (width <= 629 && width >= 320){
      setCardsShowParams({sum: 5, more: 2});
    }
  }, [width]);

  React.useEffect(() => {
    if(props.list.length && !props.savedMoviesPage){
      const res = props.list.filter((item, index) => {
        return index < cardsShowParams.sum;
      })
      setShowList(res);
    }
  }, [props.list, props.savedMoviesPage, cardsShowParams.sum]);


  // ---ОБРАБОТЧИКИ---
  function handleClickMoreMovies () {
    const a = props.list.length - showList.length;
    const start = showList.length;
    const end = showList.length + cardsShowParams.more;
    if(a > 0){
      const newCards = props.list.slice(start, end);
      setShowList([...showList, ...newCards]);
    }
  }
  
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
    return showList.map((item) => {
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
        props.isEmptyList || props.isError ? (
          <p className={`movies-list__message ${props.isError && 'movies-list__message_type_err'}`}>
            {props.isError ? 
            `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.` : 'Ничего не найдено'}
          </p>
        ) : (
          <>
            <div className='movies-list__box'>
              {props.savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}
            </div>
            <button
              className={`movies-list__more-btn 
                ${(props.savedMoviesPage || props.isEmptyList || showList.length === props.list.length) && 'movies-list__more-btn_disabled'}`}
              type='button'
              aria-label='Показать еще'
              onClick={handleClickMoreMovies}
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