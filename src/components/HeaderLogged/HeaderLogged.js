import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderLogged.css";

function HeaderLogged() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  function handleClickBurgerMenu() {
    setIsOpenBurgerMenu(true);
  }

  function handleClickCloseButton() {
    setIsOpenBurgerMenu(false);
  }

  return (
    <>
      <button
        className="header__burger-menu"
        onClick={handleClickBurgerMenu}
      ></button>
      <div
        className={`header_overlay ${
          isOpenBurgerMenu && "header_overlay_active"
        }`}
      ></div>
      <div
        className={`header__logged-container ${
          isOpenBurgerMenu && "header__logged-container_active"
        }`}
      >
        <button
          className={`header__burger-menu-close-button ${
            isOpenBurgerMenu && "header__burger-menu-close-button_active"
          }`}
          onClick={handleClickCloseButton}
        ></button>
        <div className="header__logged-links">
          <Link
            to="/"
            className={`header__logged-link ${
              !isOpenBurgerMenu && "header__logged-link_main"
            }`}
            onClick={handleClickCloseButton}
          >
            Главная
          </Link>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__logged-link ${isActive && "header__logged-link_active"}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header__logged-link ${isActive && "header__logged-link_active"}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `header__logged-profile ${
              isActive && "header__logged-profile_active"
            }`
          }
        >
          Аккаунт
        </NavLink>
      </div>
    </>
  );
}

export default HeaderLogged;
