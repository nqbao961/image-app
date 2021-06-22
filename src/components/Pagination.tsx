import React from "react";
import "../assets/css/Pagination.css";

type PaginationType = {
  totalPages: number;
  currentPage: number;
  input: string;
  handleSearch: (input: string, page: number) => void;
};

export function Pagination({
  totalPages,
  currentPage,
  input,
  handleSearch,
}: PaginationType) {
  let pageItems = [];
  for (let index = 1; index <= totalPages; index++) {
    pageItems.push(
      <p
        className={`page-button ${currentPage === index ? "active" : ""}`}
        key={index}
        onClick={() => handleSearch(input, index)}
      >
        {index}
      </p>
    );
  }
  return (
    <div className="pagination">
      {totalPages !== 0 && (
        <>
          <p className="page-button">{"<"}</p>
          <div className="page-list">{pageItems}</div>
          <p className="page-button">{">"}</p>
        </>
      )}
    </div>
  );
}
