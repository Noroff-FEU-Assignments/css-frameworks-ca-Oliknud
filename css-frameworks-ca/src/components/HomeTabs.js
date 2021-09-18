import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import firstImg from "../images/Tab-images/tab-1.jpg";
import secondImg from "../images/Tab-images/tab-2.jpg";
import thirdImg from "../images/Tab-images/tab-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const HomeTabs = () => {
  return (
    <div className="container tab-container d-none d-md-block">
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="first" title="first">
          <div className="row">
            <div className="col image-col">
              <img className="tab-images" alt="first tab" src={firstImg} />
            </div>

            <div className="col">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div className="share">
                <h5>SHARE</h5>
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="second">
          <div className="row">
            <div className="col image-col">
              <img className="tab-images" alt="second tab" src={secondImg} />
            </div>

            <div className="col">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div className="share">
                <h5>SHARE</h5>
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="third" title="third">
          <div className="row">
            <div className="col image-col">
              <img className="tab-images" alt="third tab" src={thirdImg} />
            </div>

            <div className="col">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
              </p>
              <div className="share">
                <h5>SHARE</h5>
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default HomeTabs;
