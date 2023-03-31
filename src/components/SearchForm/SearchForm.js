import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import buttomIcon from "../../images/search-form-button-icon.svg";

function SearchForm({
  onClickFilterButton,
  onClickCheckBox,
  searchValue,
  isChecked,
}) {
  const [filmFilter, setFilmFilter] = useState(searchValue ? searchValue : "");

  function handleFilmFilter(e) {
    e.preventDefault();
    setFilmFilter(e.target.value);
  }

  function handleFilterButton(e) {
    e.preventDefault();
    onClickFilterButton(filmFilter);
  }

  return (
    <section className="search-form" aria-label="Поиск">
      <form className="search-form__form">
        <div className="search-form__input-container">
          <div className="search-form__input-block">
            <img
              className="search-form__search-icon"
              src={searchIcon}
              alt="Поиск"
            />
            <input
              className="search-form__input"
              placeholder="Фильм"
              value={filmFilter}
              onChange={handleFilmFilter}
              required
            ></input>
          </div>
          <button
            className="search-form__button"
            type="submit"
            onClick={handleFilterButton}
          >
            <img src={buttomIcon} alt="Найти" />
          </button>
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox onClick={onClickCheckBox} isChecked={isChecked} />
          <label
            className="search-form__checkbox-label"
            htmlFor="switch"
            onClick={onClickCheckBox}
          >
            Короткометражки
          </label>
        </div>
      </form>
      <hr className="search-form__line"></hr>
    </section>
  );
}

export default SearchForm;
