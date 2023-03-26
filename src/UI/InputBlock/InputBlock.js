import "./InputBlock.css";

function InputBlock({
  labelText,
  inputName,
  inputType,
  errorTextLabel,
  inputValue,
  inputValid,
  inputOnChange,
  inputPattern,
}) {
  return (
    <div className="input-block">
      <label className="input-block__label">{labelText}</label>
      {inputPattern ? (
        <input
          name={`${inputName}`}
          type={`${inputType}`}
          className={`input-block__input ${
            inputValid ? "" : "input-block__input_invalid "
          }`}
          value={inputValue ? inputValue : ""}
          onChange={inputOnChange}
          pattern={inputPattern}
          required
        ></input>
      ) : (
        <input
          name={`${inputName}`}
          type={`${inputType}`}
          className={`input-block__input ${
            inputValid ? "" : "input-block__input_invalid "
          }`}
          value={inputValue ? inputValue : ""}
          onChange={inputOnChange}
          required
        ></input>
      )}
      <label
        className={`input-block__label input-block__label_error ${
          inputValid !== undefined
            ? inputValid
              ? ""
              : "input-block__label_error_validation"
            : ""
        }`}
      >
        {errorTextLabel}
      </label>
    </div>
  );
}

export default InputBlock;
