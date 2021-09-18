import React from "react";
import Nav from "../components/Nav.js";
import Carousel from "../components/Carousel.js";
import Home from "../components/Home";
import Accordion from "../components/Accordion";
import Tabs from "../components/HomeTabs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Home />
      <Accordion />
      <Tabs />
      <Footer />
    </>
  );
};

export default HomePage;
