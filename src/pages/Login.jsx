import React, { useEffect, useRef, useState } from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
  const inputRef = useRef(null);

  const [credentials, setCredentials] = useState({
    email: "eltonmoraes6@gmail.com",
    password: "123456",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // navigate("/home");
    console.log("credentials: ", credentials);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="login image" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user icon" />
                </div>
                <h2>Fazer Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="E-mail"
                      required
                      id="email"
                      value={credentials.email}
                      ref={inputRef}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <div className="input__field">
                      <input
                        type={passwordShown ? "text" : "password"}
                        placeholder="Senha"
                        required
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                      />

                      <span onClick={() => togglePassword()}>
                        {passwordShown ? (
                          <i class="ri-eye-line"></i>
                        ) : (
                          <i class="ri-eye-off-line"></i>
                        )}
                      </span>
                    </div>
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Não tem uma conta ? <Link to="/register">Criar</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
