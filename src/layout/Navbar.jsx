import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo-main-12195cd9d9.svg";
import search from "../assets/imgs/loupe.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link className="navbar__container__logo" to="/">
          <img src={logo} alt="AlloCiné" />
        </Link>
        <div className="navbar__container__search">
          <input></input>
          <button>
            <img src={search} alt="rechercher" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
