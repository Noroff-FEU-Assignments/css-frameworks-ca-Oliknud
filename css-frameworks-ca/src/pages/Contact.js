import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main>
      <div className="container">
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

        <h1>Submit your details</h1>
      </div>

      <Form className="contact-form">
        <div className="container">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
        </div>
      </Form>
    </main>
  );
};

export default Contact;
