import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../images/News-images/news-1.jpg";
import secondImage from "../images/News-images/news-2.jpg";
import thirdImage from "../images/News-images/news-3.jpg";

const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={firstImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={secondImage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={thirdImage} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
