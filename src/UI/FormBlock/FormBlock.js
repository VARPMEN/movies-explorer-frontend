import "./FormBlock.css";

function FormBlock({ children }) {
  return (
    <div className="form-block">
      <form className="form-block__form">{children}</form>
    </div>
  );
}

export default FormBlock;
