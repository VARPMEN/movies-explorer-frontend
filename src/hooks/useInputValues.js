import { useState } from "react";

export function useInputValues(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [valuesValid, setValuesValid] = useState({});

  const handleChange = (e) => {
    const { value, name, validity } = e.target;
    setValues({ ...values, [name]: value });
    setValuesValid({
      ...valuesValid,
      [name]: validity.valid,
    });
  };

  return { values, valuesValid, handleChange, setValues };
}
