import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';


function Movies({list}) {

  //---РАЗМЕТКА JSX---
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList list={list}/>
    </section>
  );
}
  
export default Movies;