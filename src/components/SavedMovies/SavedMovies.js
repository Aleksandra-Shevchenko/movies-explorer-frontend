import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies({list}) {

  // временное решение фильтрации массива, только для проверки верстки
  const filterList = list.filter((item) => !!item.owner);

  // ---РАЗМЕТКА JSX---
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList list={filterList} savedMoviesPage={true}/>
    </section>
  );
}
  
export default SavedMovies;