import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/images/logo.svg";

/**the header with logo and menu*/
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>
            <Link to="/"> Accueil</Link>
          </li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
