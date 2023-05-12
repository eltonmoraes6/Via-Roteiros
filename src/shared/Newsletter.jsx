import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/newsletter.css";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col gl="6">
            <div className="newsletter__content">
              <h2>Subiscribe now to get useful traveling infirmation</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                ratione illo vel odio voluptatum aperiam in laborum.
              </p>
            </div>
          </Col>
          <Col gl="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="male-tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
