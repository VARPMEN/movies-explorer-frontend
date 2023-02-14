import { useLocation, Link } from "react-router-dom";
import HeaderMain from "../HeaderMain/HeaderMain";
import HeaderLogged from "../HeaderLogged/HeaderLogged";
import logo from "../../images/header-logo.svg";

import "./Header.css";

function Header() {
  let location = useLocation();

  const isMain = location.pathname === "/";
  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  const isAuth = isSignIn || isSignUp;

  return (
    <header
      className={`${isMain && "header"} ${
        !isMain && !isAuth && "header_logged"
      } ${isAuth && "header_sign"}`}
    >
      <Link to="/">
        <img className="header__logo" alt="Логотип" src={logo} />
      </Link>
      {isAuth ? (
        <h2 className="header__sign-title">
          {isSignIn ? "Рады видеть!" : "Добро пожаловать!"}
        </h2>
      ) : !isMain ? (
        <HeaderLogged />
      ) : (
        <HeaderMain />
      )}
    </header>
  );
}

export default Header;
