import React, { useState } from "react";
import styles from "../assets/css/SearchBox.module.scss";

type SearchProps = {
  handleSearch: (input: string, page: number) => void;
};

export function SearchBox({ handleSearch }: SearchProps) {
  const [input, setInput] = useState("");
  return (
    <div className={styles.container}>
      <input value={input} onInput={(e) => setInput(e.currentTarget.value)} />
      <button onClick={() => handleSearch(input, 1)}>Search</button>
    </div>
  );
}
