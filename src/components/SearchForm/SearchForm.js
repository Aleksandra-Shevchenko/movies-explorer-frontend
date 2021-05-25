import './SearchForm.css';
import React from 'react';

function SearchForm() {

  const [shortFilms, setShortFilms] = React.useState('on');
	
	function changeHandler(event) {
		setShortFilms(event.target.value);
	}

  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          required
        />
        <button className='search-form__btn' type='submit'>Найти</button>
        <div className='search-form__filter-box'>
          <p className='search-form__filter-name'>Короткометражки</p>
          <label className={`search-form__filter
          ${shortFilms === 'on' ? 'search-form__filter_active' : null}`}>
            <input className='search-form__radio search-form__radio_off'
              type='radio'
              name='shortFilms'
              value='off'
              checked={shortFilms === 'off' ? true : false}
              onChange={changeHandler}
            />
            <input className='search-form__radio search-form__radio_on'
              type='radio'
              name='shortFilms'
              value='on'
              checked={shortFilms === 'on' ? true : false}
              onChange={changeHandler}
            />
            <span className='search-form__switch'></span>
          </label>
        </div>
      </form>
    </div>
  );
}
  
export default SearchForm;