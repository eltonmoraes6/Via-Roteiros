import React from "react";

import { Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./index.css";
import Navbar from "./Navbar";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/about",
    display: "Sobre",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className={"header header-section d-none d-xl-block"}>
      <Navbar>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>

          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "active__link" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4 m-4">
              <Button className="btn secondary__btn">
                <Link to="/login">Fazer Login</Link>
              </Button>
              <Button className="btn primary__btn">
                <Link to="/register">Criar Conta</Link>
              </Button>
            </div>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
