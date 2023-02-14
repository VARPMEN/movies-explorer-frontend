import "./FormBlock.css";

function FormBlock({ children }) {
  return (
    <section className="form-block">
      <form className="form-block__form">{children}</form>
    </section>
  );
}

export default FormBlock;
