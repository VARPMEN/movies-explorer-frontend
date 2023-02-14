import Title from "../../UI/Title/Title";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <Title>О проекте</Title>
      <div className="about-project__text-container">
        <div className="about-project__text-column">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-column">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__schema-container">
        <div className="about-project__schema-column about-project__schema-column_green">
          <p className="about-project__schema-text about-project__schema-text_green">
            1 неделя
          </p>
          <p className="about-project__schema-subtext">Back-end</p>
        </div>
        <div className="about-project__schema-column about-project__schema-column_dark">
          <p className="about-project__schema-text about-project__schema-text_dark">
            4 недели
          </p>
          <p className="about-project__schema-subtext">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
