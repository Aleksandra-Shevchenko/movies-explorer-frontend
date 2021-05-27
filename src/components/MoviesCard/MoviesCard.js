import './MoviesCard.css';


function MoviesCard(props) {

  function getTimeFromMin(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  //---РАЗМЕТКА JSX---
  return (
    <article className='movie'>
      <div className='movie__header'>
        <div className='movie__info'>
          <h2 className='movie__title'>{props.card.nameRU}</h2>
          <p className='movie__duration'>{getTimeFromMin(props.card.duration)}</p>
        </div>
        <button
          className={`movie__btn
          ${props.savedPage ? 'movie__delete-btn' : 'movie__save-btn'} 
          ${props.card.owner === 1 && !props.savedPage ? 'movie__save-btn_active' : null}`}
          type='button'
          aria-label='Сохранить в избранное'
        />
      </div>
      <img className='movie__pic' src={`${props.card.image}`} alt='Фильм'/>
    </article>
  );
}
  
export default MoviesCard;