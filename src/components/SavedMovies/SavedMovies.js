import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';


function SavedMovies({list}) {

  // временное решение фильтрации массива, только для проверки верстки
  const filterList= list.filter((item) => {
    return !!item.owner
  })

  // ---РАЗМЕТКА JSX---
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList list={filterList} savedMoviesPage={true}/>
    </section>
  );
}
  
export default SavedMovies;