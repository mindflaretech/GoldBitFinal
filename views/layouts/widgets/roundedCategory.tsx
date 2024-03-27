import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const CategoryList = [
  { img: "/images/layout-1/rounded-cat/1.png", category: "Silver" },
  { img: "/images/layout-1/rounded-cat/2.png", category: "Gold" },
  { img: "/images/layout-1/rounded-cat/3.png", category: "Platinum" },
  // { img: "/images/layout-1/rounded-cat/4.png", category: "Copper" },
  // { img: "/images/layout-1/rounded-cat/5.png", category: "Grocery" },
  // { img: "/images/layout-1/rounded-cat/6.png", category: "Camera" },
  // { img: "/images/layout-1/rounded-cat/7.png", category: "cardigans" },
];
const Category: NextPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="slide-6 no-arrow">
              <Slider {...settings}>
                {CategoryList.map((data, i) => (
                  <div key={i}>
                    <div className="category-contain">
                      <a href="#">
                        <div className="img-wrapper">
                          <Media src={data.img} alt="category" className="img-fluid" />
                        </div>
                        <div>
                          <div className="btn-rounded">{data.category}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Category;
