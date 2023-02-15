import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="movies-list" aria-label="Список фильмов">
      <div className="movies-list__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="movies-list__more-button-container">
        <button className="movies-list__more-button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
