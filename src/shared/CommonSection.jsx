import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section>
      <Container className="common__section">
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
