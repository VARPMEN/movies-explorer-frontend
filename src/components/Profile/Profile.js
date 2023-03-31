import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useInputValues } from "../../hooks/useInputValues";
import { nameReg, emailReg } from "../../utils/constans";
import "./Profile.css";

function Profile({ onChangeInfoClick, onLogOutClick, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, valuesValid, handleChange, setValues } = useInputValues(
    {},
    {
      name: true,
      email: true,
    }
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    function checkValidation() {
      const array = Object.values(valuesValid);
      if (
        array.length !== 0 &&
        array.length === 2 &&
        (values.name !== currentUser.name || values.email !== currentUser.email)
      ) {
        array.includes(false)
          ? setIsActiveButton(false)
          : setIsActiveButton(true);
      } else {
        setIsActiveButton(false);
      }
    }

    checkValidation();
  }, [
    currentUser.email,
    currentUser.name,
    values.email,
    values.name,
    valuesValid,
  ]);

  function handleClickChangeInfoButton(e) {
    e.preventDefault();
    onChangeInfoClick(
      values,
      setIsActiveButton,
      setErrorMessage,
      setIsInputDisabled,
      setIsSuccessMessage
    );
  }

  return (
    <section className="profile">
      {isLoading ? (
        <div className="info">
          <div className="preloader">
            <div className="preloader__cover"></div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form">
            <div className="profile__input-container">
              <input
                className={`profile__input ${
                  valuesValid.name ? "" : "profile__input_invalid"
                }`}
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                pattern={nameReg}
                disabled={isInputDisabled}
                required
              ></input>
              <label className="profile__input-label">Имя</label>
            </div>
            <div className="profile__input-container">
              <input
                className={`profile__input ${
                  valuesValid.email ? "" : "profile__input_invalid"
                }`}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                pattern={emailReg}
                disabled={isInputDisabled}
                required
              ></input>
              <label className="profile__input-label">E-mail</label>
            </div>
            <div className="profile__buttons ">
              {errorMessage !== "" && (
                <p
                  className={`profile__error-message ${
                    isSuccessMessage ? "profile__error-message_success" : ""
                  }`}
                >
                  {errorMessage}
                </p>
              )}
              <button
                onClick={handleClickChangeInfoButton}
                className="profile__button"
                disabled={isActiveButton ? "" : true}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__button profile__button_red"
                onClick={onLogOutClick}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}

export default Profile;
