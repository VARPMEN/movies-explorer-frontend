import { Link, useLocation } from "react-router-dom";
import unlikeLogo from "../../images/movies-unlike.svg";
import likeLogo from "../../images/movies-like.svg";
import removeIcon from "../../images/card-remove-icon.svg";
import "./MoviesCard.css";

function MoviesCard({ film, onSavedClick, onRemoveClick, isLiked }) {
  let location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  function handleLikeClick(e) {
    e.preventDefault();
    if (isLiked) {
      onRemoveClick(film);
    } else {
      onSavedClick(film);
    }
  }

  function handleRevomeClick(e) {
    e.preventDefault();
    onRemoveClick(film);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__film-name">{film.nameRU}</h2>
          <p className="movies-card__film-duration">{film.duration}</p>
        </div>
        {isMoviesLocation ? (
          <button
            className="movies-card__button"
            type="button"
            onClick={handleLikeClick}
          >
            <img src={isLiked ? likeLogo : unlikeLogo} alt="Понравилось" />
          </button>
        ) : (
          <button
            className="movies-card__button"
            type="button"
            onClick={handleRevomeClick}
          >
            <img src={removeIcon} alt="Удалить" />
          </button>
        )}
      </div>
      <Link
        className="movies-card__trailer-link"
        to={film.trailerLink}
        target="_blank"
      >
        <img
          className="movies-card__cover"
          src={
            isMoviesLocation
              ? `https://api.nomoreparties.co${film.image.url}`
              : film.image
          }
          alt="Обложка фильма"
        />
      </Link>
    </article>
  );
}

export default MoviesCard;
