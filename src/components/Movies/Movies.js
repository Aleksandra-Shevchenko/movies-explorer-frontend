import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


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