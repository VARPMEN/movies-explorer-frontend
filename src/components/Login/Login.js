import FormBlock from "../../UI/FormBlock/FormBlock";
import InputBlock from "../../UI/InputBlock/InputBlock";
import ButtonBlock from "../../UI/ButtonBlock/ButtonBlock";
import "./Login.css";

function Login() {
  return (
    <section className="login" aria-label="Вход">
      <FormBlock>
        <InputBlock
          labelText={"E-mail"}
          inputName={"email"}
          inputType={"email"}
          inputValue={"kuku@mail.ru"}
        />
        <InputBlock
          labelText={"Пароль"}
          inputName={"password"}
          inputType={"password"}
          inputValue={"1234141"}
        />
        <ButtonBlock
          buttonText={"Войти"}
          paragraphText={"Ещё не зарегистрированы?"}
          linkText={"Регистрация"}
          linkRoute={"/signin"}
        ></ButtonBlock>
      </FormBlock>
    </section>
  );
}

export default Login;
