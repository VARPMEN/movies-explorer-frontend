import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, onRemoveClick }) {
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleFilterButtonClick(inputValue) {
    setInputValue(inputValue);
  }

  function handleCheckboxClick(e) {
    setIsChecked(e.target.checked);
  }

  useEffect(() => {
    let array = savedMovies.filter((movie) => {
      if (isChecked) {
        return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
      } else {
        return (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          movie.duration > 40
        );
      }
    });
    setFilteredMoviesList(array);
  }, [inputValue, isChecked, savedMovies]);

  return (
    <section className="saved-movies" aria-label="Сохранненые фильмы">
      <SearchForm
        onClickFilterButton={handleFilterButtonClick}
        onClickCheckBox={handleCheckboxClick}
        isChecked={isChecked}
      />
      <MoviesCardList
        filteredMovies={filteredMoviesList}
        onRemoveClick={onRemoveClick}
        isSaveMovies={true}
      />
    </section>
  );
}

export default SavedMovies;
