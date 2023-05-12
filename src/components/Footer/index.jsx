import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/footer.css";

import logo from "../../assets/images/logo.png";

const quick_links = [
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

const quick_links2 = [
  {
    path: "/gallery",
    display: "Galeria",
  },

  {
    path: "/login",
    display: "Fazer Login",
  },
  {
    path: "/register",
    display: "Criar conta",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col gl="3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                veniam totam amet blanditiis illum ad, animi voluptas aspernatur
                maxime quod et reprehenderit.
              </p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="">
                    <i class="ri-youtube-line" />
                  </Link>
                </span>

                <span>
                  <Link to="">
                    <i class="ri-github-fill" />
                  </Link>
                </span>

                <span>
                  <Link to="">
                    <i class="ri-facebook-circle-line" />
                  </Link>
                </span>

                <span>
                  <Link to="">
                    <i class="ri-instagram-line" />
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col gl="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col gl="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col gl="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line" /> Address:
                  </span>
                </h6>
                <p className="mb-0">Propriá, SE</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line" /> E-mail:
                  </span>
                </h6>
                <p className="mb-0">eltonmoraes6@gmail.com</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-fill" /> Telefone:
                  </span>
                </h6>
                <p className="mb-0">+55 (79) 90000-0000 </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <div className="copyright">
              Copyright {year} design and developed by Elton Moraes. All rights
              reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
