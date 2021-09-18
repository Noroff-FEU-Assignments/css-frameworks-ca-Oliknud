import React from "react";
import Pagination from "react-bootstrap/Pagination"

const News= () => {
  return (
    <div className="container">
      <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    </div>
  );
};

export default News;
