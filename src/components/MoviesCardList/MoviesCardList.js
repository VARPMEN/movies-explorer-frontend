import { useEffect, useState } from "react";
import { useWindowResizeHook } from "../../hooks/useWindowResizeHook";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  filteredMovies,
  onSavedClick,
  onRemoveClick,
  savedMovies,
  isSaveMovies,
}) {
  const isMobileWidth = useWindowResizeHook();
  const [renderCount, setRenderCount] = useState(isMobileWidth ? 5 : 7);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(false);
  const [filmCards, setFilmCards] = useState();

  useEffect(() => {
    function renderMovies() {
      const moviesList = filteredMovies.map((movie, index) => {
        const isLiked = savedMovies.some((savedMovie) => {
          return movie.id === savedMovie.movieId;
        });

        if (index < renderCount) {
          return (
            <MoviesCard
              film={movie}
              key={movie.id}
              onSavedClick={onSavedClick}
              onRemoveClick={onRemoveClick}
              isLiked={isLiked}
            />
          );
        }
      });

      return moviesList;
    }

    function renderSaveMovies() {
      const movieList = filteredMovies.map((movie) => {
        return (
          <MoviesCard
            film={movie}
            key={movie.movieId}
            onRemoveClick={onRemoveClick}
          />
        );
      });
      return movieList;
    }

    if (isSaveMovies) {
      setFilmCards(renderSaveMovies());
    } else {
      setFilmCards(renderMovies());
    }
  }, [
    filteredMovies,
    isMobileWidth,
    isSaveMovies,
    onRemoveClick,
    onSavedClick,
    renderCount,
    savedMovies,
  ]);

  function handleMoreButton() {
    setRenderCount((data) => data + (isMobileWidth ? 1 : 7));
  }

  useEffect(() => {
    setIsMoreButtonVisible(filteredMovies.length > renderCount);
  }, [renderCount, filteredMovies]);

  return (
    <section className="movies-list" aria-label="Список фильмов">
      <div className="movies-list__cards">{filmCards}</div>
      <div className="movies-list__more-button-container">
        {!isSaveMovies && isMoreButtonVisible && (
          <button
            className="movies-list__more-button"
            type="button"
            onClick={handleMoreButton}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
