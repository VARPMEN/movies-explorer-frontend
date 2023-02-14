import Title from "../../UI/Title/Title";
import photo from "../../images/photo.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <Title>Студент</Title>
      <div className="about-me__container">
        <div className="about-me__info-column">
          <div className="about-me__info-text-column">
            <h2 className="about-me__name">Антон</h2>
            <h3 className="about-me__profession">
              Фронтенд-разработчик, 28лет
            </h3>
            <p className="about-me__discription">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a
            className="about-me__git-link"
            href="https://github.com/VARPMEN"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" alt="Моя фотография" src={photo} />
      </div>
    </section>
  );
}

export default AboutMe;
