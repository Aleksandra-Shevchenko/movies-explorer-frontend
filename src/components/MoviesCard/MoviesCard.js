import './MoviesCard.css';


function MoviesCard(props) {

  function getTimeFromMin(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  //обработчик клика по кнопке лайка
  function handleLikeClick() {
    props.onLike(props.card);
  }

  //обработчик клика по кнопке удаления
  function handleDeleteClick() {
    props.onDelete(props.card);
  }

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
          ${props.liked && !props.savedPage ? 'movie__save-btn_active' : ''}`}
          type='button'
          aria-label='Сохранить в избранное'
          onClick={props.savedPage || props.liked ? handleDeleteClick : handleLikeClick}
        />
      </div>
      <a className='movie__link' href={props.card.trailer || props.card.trailerLink} target='_blank' rel='noreferrer'><img className='movie__pic' src={`${props.card.image}`} alt='Фильм'/></a>
    </article>
  );
}
  
export default MoviesCard;