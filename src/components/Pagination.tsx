import React from "react";
import styles from "../styles/Pagination.module.scss";

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
        className={`${styles.pageButton} ${
          currentPage === index ? styles.active : ""
        }`}
        key={index}
        onClick={() => handleSearch(input, index)}
      >
        {index}
      </p>
    );
  }
  return (
    <div className={styles.pagination}>
      {totalPages !== 0 && (
        <>
          <p className={styles.pageButton}>{"<"}</p>
          <div className={styles.pageList}>{pageItems}</div>
          <p className={styles.pageButton}>{">"}</p>
        </>
      )}
    </div>
  );
}
