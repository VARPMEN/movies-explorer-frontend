import "./InputBlock.css";

function InputBlock({
  labelText,
  inputName,
  inputType,
  inputValue,
  errorTextLabel,
}) {
  const isValid = true;

  return (
    <div className="input-block">
      <label className="input-block__label">{labelText}</label>
      <input
        name={`${inputName}`}
        type={`${inputType}`}
        className="input-block__input"
        value={`${inputValue}`}
        required
      ></input>
      <label
        className={`input-block__label input-block__label_error ${
          isValid ? "input-block__label_error_validation" : ""
        }`}
      >
        {errorTextLabel}
      </label>
    </div>
  );
}

export default InputBlock;
