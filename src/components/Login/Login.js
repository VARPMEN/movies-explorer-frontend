import FormBlock from "../../UI/FormBlock/FormBlock";
import InputBlock from "../../UI/InputBlock/InputBlock";
import ButtonBlock from "../../UI/ButtonBlock/ButtonBlock";

function Login() {
  return (
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
        linkRoute={"/signup"}
      ></ButtonBlock>
    </FormBlock>
  );
}

export default Login;
