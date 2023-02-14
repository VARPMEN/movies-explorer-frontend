import "./ButtonBlock.css";
import { Link } from "react-router-dom";

function ButtonBlock({ buttonText, paragraphText, linkText, linkRoute }) {
  return (
    <div className="button-block">
      <button className="button-block__button">{buttonText}</button>
      <p className="button-block__text">
        {paragraphText}
        <Link className="button-block__link" to={`${linkRoute}`}>
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default ButtonBlock;
