import { useNavigate } from "react-router-dom";
import "./ErrorRoute.css";

function ErrorRoute({ errorData }) {
  const navigate = useNavigate();

  function handleClickBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <main>
      <section className="error-route">
        <h1 className="error-route__code">{errorData.errorCode}</h1>
        <p className="error-route__message">{errorData.errorMessage}</p>
        <button
          type="button"
          className="error-route__back-button"
          onClick={handleClickBack}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default ErrorRoute;
