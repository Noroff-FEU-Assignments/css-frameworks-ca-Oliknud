import React from "react";
import Accordion from "react-bootstrap/Accordion";
import firstTab from "../images/Tab-images/tab-1.jpg";
import secondTab from "../images/Tab-images/tab-2.jpg";
import thirdTab from "../images/Tab-images/tab-3.jpg";

const homeAccordion = () => {
  return (
    <div className="container container-accordion">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
            <img src={firstTab} className="tab-images" alt="tab 1"></img>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <img src={secondTab} className="tab-images" alt="tab 2"></img>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <img src={thirdTab} className="tab-images" alt="tab 3"></img>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default homeAccordion;
