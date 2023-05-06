import React from "react";
import { Col } from "reactstrap";

import ServiceCard from "./ServiceCard";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    id: "fqpep394i3d456852",
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "fqpep394i3dpwi586",
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "fqpep394i354846dj",
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item) => (
        <Col lg="3" key={item.id}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
