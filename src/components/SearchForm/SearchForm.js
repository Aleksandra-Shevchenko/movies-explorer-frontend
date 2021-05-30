import './SearchForm.css';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useForm';


function SearchForm(props) {

  const {values, errors, setValues, handleChange} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchClick(values.query);
  }

  //---ЭФФЕКТЫ---
  React.useEffect(() => {
    if(!props.savedMoviesPage){
      const input = localStorage.getItem('searchQuery');
      if(input){
        setValues({
          query: input,
        });
      }
    }
  }, [props.savedMoviesPage, setValues])


  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          name='query'
          value={values.query || ''}
          onChange={handleChange}
          required
        />
        <span id='email-error' className='search-form__error'>
          {errors.query || ''}
        </span>
        <button
          className='search-form__btn'
          type='submit'
        >
          Найти
        </button>
        <div className='search-form__filter-box'>
          <p className='search-form__filter-name'>Короткометражки</p>
          <label className={`search-form__filter
          ${props.shortFilms === 'on' ? 'search-form__filter_active' : null}`}>
            <input className='search-form__radio search-form__radio_off'
              type='radio'
              name='shortFilms'
              value='off'
              checked={props.shortFilms === 'off' ? true : false}
              onChange={props.onCheckbox}
            />
            <input className='search-form__radio search-form__radio_on'
              type='radio'
              name='shortFilms'
              value='on'
              checked={props.shortFilms === 'on' ? true : false}
              onChange={props.onCheckbox}
            />
            <span className='search-form__switch'></span>
          </label>
        </div>
      </form>
    </div>
  );
}
  
export default SearchForm;