import { SearchBox } from "../components/SearchBox";
import { Pagination } from "../components/Pagination";
import { ImageList } from "../components/ImageList";
import { useEffect, useState } from "react";
import { getImagesFromQuery } from "../api/unsplash";

function Home() {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [input, setInput] = useState("");
  const [imageList, setImageList] = useState([]);

  const handleSearch = async (input: string, page: number) => {
    const res = await getImagesFromQuery(input, page);
    if (res) {
      setTotalPages(res.data.total_pages);
      setCurrentPage(page);
      setInput(input);
      setImageList(res.data.results);
    }
  };

  useEffect(() => {
    return function cleanup() {
      setImageList([]);
    };
  }, [currentPage]);

  return (
    <div className="Home">
      <SearchBox handleSearch={handleSearch} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        input={input}
        handleSearch={handleSearch}
      />
      <ImageList imageList={imageList} />
    </div>
  );
}

export default Home;
