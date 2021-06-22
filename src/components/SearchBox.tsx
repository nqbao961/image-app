import React, { useState } from "react";

type SearchProps = {
  handleSearch: (input: string, page: number) => void;
};

export function SearchBox({ handleSearch }: SearchProps) {
  const [input, setInput] = useState("");
  return (
    <div className="search-container">
      <input value={input} onInput={(e) => setInput(e.currentTarget.value)} />
      <button className="search-button" onClick={() => handleSearch(input, 1)}>
        Search
      </button>
    </div>
  );
}
