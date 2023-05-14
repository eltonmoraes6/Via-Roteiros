import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";

import tourData from "../assets/data/tours";
import Booking from "../components/Booking";
import Newsletter from "../shared/Newsletter";

import "../styles/tour-details.css";
import calculateAvgRating from "../utilities/avgRating";
import avatar from "../assets/images/avatar.jpg";

const TourDetails = () => {
  const { id } = useParams();
  const reviewsMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  //this is an static data.
  //Later we will call our API and load our data from database
  const tour = tourData.find((tour) => tour.id == id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`);
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="tourImg" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-s-fill"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        {avgRating == 0 ? null : avgRating}
                      </i>

                      {totalRating == 0 ? (
                        <span>Not rated</span>
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i> {city}
                    </span>

                    <span>
                      <i class="ri-money-dollar-circle-line"></i> $ {price} /per
                      person
                    </span>

                    <span>
                      <i class="ri-map-pin-time-line"></i> {distance} k/m
                    </span>

                    <span>
                      <i class="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i class="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <div className="reviews__input">
                      <input
                        type="text"
                        ref={reviewsMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button className="btn primary__btn text-white">
                        Submit
                      </button>
                    </div>
                  </form>

                  <ListGroup className="user__reviews">
                    {reviews.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="avatar" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Elton</h5>
                              <p>
                                {new Date("05-12-2023").toLocaleDateString(
                                  "pt-BR",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5 <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>Um ótimo passeio</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col gl="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
