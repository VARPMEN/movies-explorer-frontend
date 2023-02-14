import FormBlock from "../../UI/FormBlock/FormBlock";
import InputBlock from "../../UI/InputBlock/InputBlock";
import ButtonBlock from "../../UI/ButtonBlock/ButtonBlock";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <FormBlock>
        <InputBlock
          labelText={"Имя"}
          inputName={"user-name"}
          inputType={"text"}
          inputValue={"Антон"}
        />
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
          errorTextLabel={"Ошибка"}
        />
        <ButtonBlock
          buttonText={"Зарегистрироваться"}
          paragraphText={"Уже зарегистрированы?"}
          linkText={"Войти"}
          linkRoute={"/signin"}
        ></ButtonBlock>
      </FormBlock>
    </section>
  );
}

export default Register;
