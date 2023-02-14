import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import buttomIcon from "../../images/search-form-button-icon.svg";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__input-container">
          <div className="search-form__input-block">
            <img
              className="search-form__search-icon"
              src={searchIcon}
              alt="Поиск"
            />
            <input className="search-form__input" placeholder="Фильм"></input>
          </div>
          <button className="search-form__button">
            <img src={buttomIcon} alt="Найти" />
          </button>
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox />
          <label className="search-form__checkbox-label" for="switch">
            Короткометражки
          </label>
        </div>
      </form>
      <hr className="search-form__line"></hr>
    </section>
  );
}

export default SearchForm;
