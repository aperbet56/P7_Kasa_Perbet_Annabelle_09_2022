import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img src="./logo.png" alt="Logo de Kasa" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
