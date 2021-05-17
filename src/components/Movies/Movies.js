import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
// import Preloader from '../Preloader/Preloader';


function Movies({list}) {

  //---РАЗМЕТКА JSX---
  return (
    <section className='movies'>
      <SearchForm />
      {/* <Preloader />  */}
      <MoviesCardList list={list}/>
    </section>
  );
}
  
export default Movies;