import React from "react";
import Carousel from "../components/Carousel.js";
import Home from "../components/Home";
import Accordion from "../components/Accordion";
import Tabs from "../components/HomeTabs";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Home />
      <Accordion />
      <Tabs />
    </>
  );
};

export default HomePage;
