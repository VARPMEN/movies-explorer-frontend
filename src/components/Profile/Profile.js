import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Антон!</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <label className="profile__input-label">Имя</label>
          <input className="profile__input" value="Антон" required></input>
        </div>
        <div className="profile__input-container">
          <label className="profile__input-label">E-mail</label>
          <input
            className="profile__input"
            value="kuku@mail.ru"
            required
          ></input>
        </div>
        <div className="profile__links">
          <p className="profile__link">Редактировать</p>
          <p className="profile__link profile__link_red">Выйти из аккаунта</p>
        </div>
      </form>
    </section>
  );
}

export default Profile;
