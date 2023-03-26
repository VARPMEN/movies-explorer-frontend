import FormBlock from "../../UI/FormBlock/FormBlock";
import InputBlock from "../../UI/InputBlock/InputBlock";
import ButtonBlock from "../../UI/ButtonBlock/ButtonBlock";
import { nameReg, emailReg } from "../../utils/constans";
import { useInputValues } from "../../hooks/useInputValues";
import { useEffect, useState } from "react";
import "./Register.css";

function Register({ onSubmitClick }) {
  const { values, valuesValid, handleChange } = useInputValues({});
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function checkValidation() {
      const array = Object.values(valuesValid);
      if (array.length !== 0 && array.length === 3) {
        array.includes(false)
          ? setIsActiveButton(false)
          : setIsActiveButton(true);
      }
    }

    checkValidation();
  }, [valuesValid]);

  function handleSubmitButton(e) {
    e.preventDefault();
    onSubmitClick(values, setIsActiveButton, setErrorMessage);
  }

  return (
    <section className="register" aria-label="Регистрация">
      <FormBlock>
        <InputBlock
          labelText={"Имя"}
          inputName={"name"}
          inputType={"text"}
          inputValue={values.name}
          inputValid={valuesValid.name}
          inputOnChange={handleChange}
          inputPattern={nameReg}
          errorTextLabel={"Введите корректное имя"}
        />
        <InputBlock
          labelText={"E-mail"}
          inputName={"email"}
          inputType={"email"}
          inputValue={values.email}
          inputValid={valuesValid.email}
          inputOnChange={handleChange}
          inputPattern={emailReg}
          errorTextLabel={"Email не соответствует"}
        />
        <InputBlock
          labelText={"Пароль"}
          inputName={"password"}
          inputType={"password"}
          inputValue={values.password}
          inputValid={valuesValid.password}
          inputOnChange={handleChange}
          errorTextLabel={"Ошибка пароля"}
        />
        <ButtonBlock
          buttonText={"Зарегистрироваться"}
          paragraphText={"Уже зарегистрированы?"}
          linkText={"Войти"}
          linkRoute={"/signin"}
          buttonOnClick={handleSubmitButton}
          isButtonActive={isActiveButton}
          errorMessage={errorMessage}
        ></ButtonBlock>
      </FormBlock>
    </section>
  );
}

export default Register;
