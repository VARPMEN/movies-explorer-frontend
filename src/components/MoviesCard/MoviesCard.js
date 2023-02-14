import { useState } from "react";
import { useLocation } from "react-router-dom";
import unlikeLogo from "../../images/movies-unlike.svg";
import likeLogo from "../../images/movies-like.svg";
import removeIcon from "../../images/card-remove-icon.svg";
import filmImage from "../../images/film-image.png";
import "./MoviesCard.css";

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);

  let location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__film-name">33 слова о дизайне</h2>
          <p className="movies-card__film-duration">1ч 42м</p>
        </div>
        {isMoviesLocation ? (
          <button className="movies-card__button">
            <img
              type="button"
              src={isLiked ? likeLogo : unlikeLogo}
              alt="Понравилось"
              onClick={handleLikeClick}
            />
          </button>
        ) : (
          <button className="movies-card__button">
            <img src={removeIcon} alt="Удалить" />
          </button>
        )}
      </div>
      <img
        className="movies-card__cover"
        src={filmImage}
        alt="Обложка фильма"
      />
    </article>
  );
}

export default MoviesCard;
