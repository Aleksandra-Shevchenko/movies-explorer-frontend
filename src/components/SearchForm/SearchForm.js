import './SearchForm.css';
import React from 'react';

function SearchForm(props) {

  const [value, setValue] = React.useState('');
  // const [shortFilms, setShortFilms] = React.useState('off');
	

  //---ОБРАБОТЧИКИ---
  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchClick(value);
  } 


  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          value={value}
          onChange={handleChangeValue}
          required
        />
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