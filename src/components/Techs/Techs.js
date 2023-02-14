import Title from "../../UI/Title/Title";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <Title>Технологии</Title>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__row">
        <p className="techs__stek">HTML</p>
        <p className="techs__stek">CSS</p>
        <p className="techs__stek">JS</p>
        <p className="techs__stek">React</p>
        <p className="techs__stek">Git</p>
        <p className="techs__stek">Express.js</p>
        <p className="techs__stek">mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
