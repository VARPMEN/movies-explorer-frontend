import { useEffect, useState } from "react";
import { useInputValues } from "../../hooks/useInputValues";
import { emailReg } from "../../utils/constans";
import FormBlock from "../../UI/FormBlock/FormBlock";
import InputBlock from "../../UI/InputBlock/InputBlock";
import ButtonBlock from "../../UI/ButtonBlock/ButtonBlock";
import "./Login.css";

function Login({ onSubmitClick }) {
  const { values, valuesValid, handleChange } = useInputValues({});
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function checkValidation() {
      const array = Object.values(valuesValid);
      if (array.length !== 0 && array.length === 2) {
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
    <section className="login" aria-label="Вход">
      <FormBlock>
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
          errorTextLabel={"Ошибка ввода пароля"}
        />
        <ButtonBlock
          buttonText={"Войти"}
          paragraphText={"Ещё не зарегистрированы?"}
          linkText={"Регистрация"}
          linkRoute={"/signup"}
          isButtonActive={isActiveButton}
          buttonOnClick={handleSubmitButton}
          errorMessage={errorMessage}
        ></ButtonBlock>
      </FormBlock>
    </section>
  );
}

export default Login;
