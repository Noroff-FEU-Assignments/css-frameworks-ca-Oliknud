import React from "react";
import Pagination from "react-bootstrap/Pagination";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Cards from "../components/Cards";




const News = () => {
  return (
    <div className="container">
      <h1>News</h1>
      <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>

      <div className="container card-container">
        <Cards />
      </div>
      <Pagination className="pagination-bottom">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    </div>
  );
};

export default News;
