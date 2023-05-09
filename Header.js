import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"; /* bch n9dru nst3mlu <link> */
import logo from "./assets/images/logo.png";
//tre9a bch njibu ntsaawr  f react
// tape rafce udri iktb lik funcion direct
import NavItem, { NavItemDropDown } from "../components/NavItems/NavItems";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark  my-navb">
      <div className="container">
        <a href="#" class="navbar-brand">
          <img src="{logo}" alt="cyborg logo" />
          {/* 7yd guillemets mn logo urtkhdm het kbera bzaf mmsawbch 7ydtha  */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              {" "}
              {/* hdi rj3ta component */}
              <a href="/" class="nav-link">
                Home
              </a>
            </NavItem>

            <NavItem>
              <Link to="/browse" class="nav-link">
                Browse
              </Link>
            </NavItem>

            <NavItemDropDown>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" class="dropdown-item">
                    Learn Bootstrap
                  </a>
                </li>
                <li>
                  <a href="#next" class="dropdown-item">
                    Where to go next
                  </a>
                </li>
              </ul>
            </NavItemDropDown>

            <NavItem>
              <a href="#faq" class="nav-link">
                Streams
              </a>
            </NavItem>

            <NavItem>
              {/* tre9a tnya ha nst3mlu link  */}
              <Link class="nav-link" to="/profile">
                Profile
              </Link>

              {/* hd tre9a kykun switch bin pages pluuus rapide  */}
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
