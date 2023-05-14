import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/thank-you.css";
import Newsletter from "../shared/Newsletter";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="pt-5 text-center">
              <h3 className="mb-4">About</h3>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default About;
