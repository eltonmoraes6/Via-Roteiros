import React, { useState } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "../../styles/booking.css";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "545lskm545skmd5",
    userEmail: "eltonmoraes6@gmail.com",
    fullName: "Elton Moraes",
    phone: "+55 82 90000-0000",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
    console.log("credentials: ", credentials);
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          $ {price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-s-fill"></i>
          {avgRating == 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />

            <FormGroup>
              <input
                type="number"
                placeholder="Phone"
                id="phone"
                required
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup className="d-flex align-items-center gap-3">
              <input type="date" id="bookAt" required onChange={handleChange} />
              <input
                type="number"
                placeholder="Guest"
                id="guestSize"
                required
                onChange={handleChange}
              />
            </FormGroup>
          </FormGroup>
        </Form>

        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0">
              <h5 className="d-flex align-items-center gap-1">
                ${price} <i class="ri-close-line"></i> 1 person
              </h5>
              <span> ${price}</span>
            </ListGroupItem>

            <ListGroupItem className="border-0 px-0">
              <h5>Service Charger</h5>
              <span> ${serviceFee}</span>
            </ListGroupItem>

            <ListGroupItem className="border-0 px-0 total">
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
