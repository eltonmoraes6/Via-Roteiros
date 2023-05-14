import React, { useEffect, useRef } from "react";

import { Button, Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo-via-roteiros.png";
import "../../styles/header.css";

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
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > -70
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <header
      className={"header header-section d-none d-xl-block"}
      ref={headerRef}
    >
      <Container>
        <Row>
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
        </Row>
      </Container>
    </header>
  );
};

export default Header;
