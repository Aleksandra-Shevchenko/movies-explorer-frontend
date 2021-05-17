import './MoviesCard.css';


function MoviesCard(props) {

  //---РАЗМЕТКА JSX---
  return (
    <article className='movie'>
      <div className='movie__header'>
        <div className='movie__info'>
          <h2 className='movie__title'>{props.card.nameRU}</h2>
          <p className='movie__duration'>{props.card.duration}</p>
        </div>
        <button
          className={`movie__btn
          ${props.savedPage ? 'movie__delete-btn' : 'movie__save-btn'} 
          ${props.card.owner === 1 && !props.savedPage ? 'movie__save-btn_active' : null}`}
          type='button'
          aria-label='Сохранить в избранное'
        />
      </div>
      <img className='movie__pic' src={props.card.image} alt='Фильм'/>
    </article>
  );
}
  
export default MoviesCard;