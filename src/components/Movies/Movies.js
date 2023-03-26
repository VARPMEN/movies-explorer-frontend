import { useEffect, useState } from "react";
import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({
  movies,
  onSavedClick,
  onRemoveClick,
  isLoading,
  savedMovies,
}) {
  const localInputValue = localStorage.getItem("searchInputValue");
  const localCheckBoxStatus = localStorage.getItem("searchCheckboxStatus");
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isChecked, setIsChecked] = useState(
    localCheckBoxStatus !== null
      ? localCheckBoxStatus === "true"
        ? true
        : false
      : false
  );
  const [isFirstEntry, setIsFirstEntry] = useState(false);
  const [isUnfindFilms, setIsUnfindFilms] = useState(false);
  const [inputValue, setInputValue] = useState(
    localInputValue !== null ? localInputValue : ""
  );

  function handleFilterButtonClick(inputValue) {
    setInputValue(inputValue);
    localStorage.setItem("searchInputValue", inputValue);
  }

  function handleCheckboxClick(e) {
    setIsChecked(e.target.checked);
    localStorage.setItem("searchCheckboxStatus", e.target.checked);
  }

  useEffect(() => {
    if (filteredMoviesList.length === 0 && inputValue === "") {
      setIsFirstEntry(true);
      setIsUnfindFilms(false);
    } else if (filteredMoviesList.length === 0) {
      setIsUnfindFilms(true);
      setIsFirstEntry(false);
    } else {
      setIsFirstEntry(false);
      setIsUnfindFilms(false);
    }
  }, [filteredMoviesList, inputValue]);

  useEffect(() => {
    let array = movies.filter((movie) => {
      if (inputValue === "") {
        setIsUnfindFilms(true);
      } else if (isChecked) {
        return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
      } else {
        return (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          movie.duration > 40
        );
      }
    });
    setFilteredMoviesList(array);
  }, [inputValue, isChecked, movies]);

  return (
    <>
      <SearchForm
        onClickFilterButton={handleFilterButtonClick}
        onClickCheckBox={handleCheckboxClick}
        searchValue={inputValue}
        isChecked={isChecked}
      />
      {isLoading ? (
        <div className="info">
          <div className="preloader">
            <div className="preloader__cover"></div>
          </div>
        </div>
      ) : isFirstEntry ? (
        <div className="info">
          <p className="info__title">Начните поиск</p>
        </div>
      ) : isUnfindFilms ? (
        <div className="info">
          <p className="info__title">Ничего не нашли, попробуйте снова.</p>
        </div>
      ) : (
        <MoviesCardList
          filteredMovies={filteredMoviesList}
          onSavedClick={onSavedClick}
          onRemoveClick={onRemoveClick}
          savedMovies={savedMovies}
          isSaveMovies={false}
        />
      )}
    </>
  );
}

export default Movies;
