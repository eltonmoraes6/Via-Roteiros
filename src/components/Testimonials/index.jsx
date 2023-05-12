import React from "react";
import ReactSlick from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const data = [
  {
    id: "lkaslck5454545sdsa",
    avatar: ava01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque namofficia aliquam amet quisquam sed odio, hic dolore. Assumenda doloresatque unde harum magnam saepe maiores eaque nesciunt exercitationem nulla!",
    name: "John Doe",
    title: "Customer",
  },
  {
    id: "l5554lck5454545sdsa",
    avatar: ava02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque namofficia aliquam amet quisquam sed odio, hic dolore. Assumenda doloresatque unde harum magnam saepe maiores eaque nesciunt exercitationem nulla!",
    name: "Lia Franklin",
    title: "Customer",
  },
  {
    id: "54654ck5454545sdsa",
    avatar: ava03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque namofficia aliquam amet quisquam sed odio, hic dolore. Assumenda doloresatque unde harum magnam saepe maiores eaque nesciunt exercitationem nulla!",
    name: "John Doe",
    title: "Customer",
  },
  {
    id: "lkaslck5454545sdsa",
    avatar: ava01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque namofficia aliquam amet quisquam sed odio, hic dolore. Assumenda doloresatque unde harum magnam saepe maiores eaque nesciunt exercitationem nulla!",
    name: "John Doe",
    title: "Customer",
  },
  {
    id: "l5554lck5454545sdsa",
    avatar: ava02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque namofficia aliquam amet quisquam sed odio, hic dolore. Assumenda doloresatque unde harum magnam saepe maiores eaque nesciunt exercitationem nulla!",
    name: "Lia Franklin",
    title: "Customer",
  },
  {
    id: "54654ck5454545sdsa",
    avatar: ava03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque namofficia aliquam amet quisquam sed odio, hic dolore. Assumenda doloresatque unde harum magnam saepe maiores eaque nesciunt exercitationem nulla!",
    name: "John Doe",
    title: "Customer",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          ifinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ReactSlick {...settings}>
      {data.map((item) => (
        <div className="testimonial py-4 px-3" key={item.id}>
          <p>{item.desc}</p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              className="w-25 h-25 rounded-2"
              src={item.avatar}
              alt="Slide-01"
            />
            <div>
              <h6 className="mb-0 mt-3">{item.name}</h6>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </ReactSlick>
  );
};

export default Testimonials;
