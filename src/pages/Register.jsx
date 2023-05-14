import React, { useState } from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/login.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "Elton",
    familyName: "Moraes",
    email: "eltonmoraes6@gmail.com",
    password: "123456",
    confirmPassword: "123456",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    // navigate("/home");
    console.log("credentials: ", credentials);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="register image" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user icon" />
                </div>
                <h2>Criar Conta</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Nome"
                      required
                      id="name"
                      value={credentials.name}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Sobrenome"
                      required
                      id="familyName"
                      value={credentials.familyName}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      placeholder="E-mail"
                      required
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Senha"
                      required
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Confirmar Senha"
                      required
                      id="confirmPassword"
                      value={credentials.confirmPassword}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Criar conta
                  </Button>
                </Form>
                <p>
                  Já tem uma conta ? <Link to="/login">Fazer Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
