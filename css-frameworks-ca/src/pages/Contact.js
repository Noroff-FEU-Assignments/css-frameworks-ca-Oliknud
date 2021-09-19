import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main className="container">
      <div className="container info-container">
        <div className="row info">
          <div className="col icons">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <div className="col">
            <p>hello@yay.com</p>
          </div>
        </div>
        <div className="row info">
          <div className="col icons">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </div>
          <div className="col">
            <p>123 456 7890</p>
          </div>
        </div>
        <div className="row info">
          <div className="col icons">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </div>
          <div className="col">
            <div>
              <p>123 Some Street</p>
              <p>Somewhere</p>
              <p>Some city</p>
              <p>10000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container form-container">
        <h1>Submit your details</h1>
        <Form className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control type="website" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Allow us to sell your personal details to whomever we want"
              />
            </Form.Group>
            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
        </Form>
      </div>
    </main>
  );
};

export default Contact;
