import "./FormBlock.css";

function FormBlock({ children }) {
  return (
    <div className="form-block">
      <form className="form-block__form" noValidate>
        {children}
      </form>
    </div>
  );
}

export default FormBlock;
