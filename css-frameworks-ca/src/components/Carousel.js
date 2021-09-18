import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../images/image.png";


const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 first-slide" src={firstImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 second-slide" src={firstImage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 third-slide"  src={firstImage} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
