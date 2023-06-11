import React, { useEffect, useRef, useState, useContext } from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/Auth";
import { BASE_URL } from "../utilities/config";

import "../styles/login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../context/constants";

const Login = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [credentials, setCredentials] = useState({
    email: "eltonmoraes6@gmail.com",
    password: "123456",
  });

  const { dispatch } = useContext(AuthContext);

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

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: USER_LOGIN_REQUEST });

    console.log("credentials: ", credentials);
    const { email, password } = credentials;

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }

      dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
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
                          <i className="ri-eye-line"></i>
                        ) : (
                          <i className="ri-eye-off-line"></i>
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
