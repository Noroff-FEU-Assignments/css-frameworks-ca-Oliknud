import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardData from "./CardsData";

const Cards = () => {
  return (
    <>
      {CardData.map(({ img, alt}) => (
        <Card>
          <Card.Img variant="top" src={img} alt={alt}/>
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button variant="primary">MORE</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Cards;
