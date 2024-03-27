import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

const Review = [
  {
    img: "/images/testimonial/1.jpg",
    user: "Mark",
    review:
      "Goldbit is a well-designed and visually appealing website that effectively communicates its message. The layout is intuitive and easy to navigate, making it user-friendly. The content is clear, concise, and engaging, with no noticeable spelling or grammar errors. The website is responsive and loads quickly, offering a smooth user experience. It is optimized for search engines and provides valuable information. In summary, Goldbit's website successfully combines aesthetics and functionality, making it a compelling online presence.",
  },
  {
    img: "/images/testimonial/2.jpg",
    user: "Thomas",
    review:
      "Goldbit is a well-designed and visually appealing website that effectively communicates its message. The layout is intuitive and easy to navigate, making it user-friendly. The content is clear, concise, and engaging, with no noticeable spelling or grammar errors. The website is responsive and loads quickly, offering a smooth user experience. ",
  },
  {
    img: "/images/testimonial/3.jpg",
    user: "Steve",
    review:
      "Goldbit's website offers a sleek and user-friendly design. Content is clear and engaging without errors, and the site is optimized for fast loading and SEO. This results in a seamless and appealing user experience, making Goldbit an effective and visually pleasing online platform.",
  },
];
const Testimonial: NextPage = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true, // Add this for infinite looping
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    arrows: false, // Remove arrows if not needed
  };
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <div className="slide-1 no-arrow">
              <Slider {...settings}>
                {Review.map((data, i) => (
                  <div key={i}>
                    <div className="testimonial-contain">
                      <div className="media">
                        <div className="testimonial-img">
                          <Media
                            src={data.img}
                            className="img-fluid rounded-circle"
                            alt="testimonial"
                          />
                        </div>
                        <div className="media-body">
                          <h5>{data.user}</h5>
                          <p>{data.review}</p>
                        </div>
                      </div>
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

export default Testimonial;
