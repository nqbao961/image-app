import { SearchBox } from "../components/SearchBox";
import { Pagination } from "../components/Pagination";
import { ImageList } from "../components/ImageList";
import { useEffect, useState } from "react";
import { getImagesFromQuery } from "../api/unsplash";
import styles from "../styles/Home.module.scss";

function Home() {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [input, setInput] = useState("");
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (input: string, page: number) => {
    setIsLoading(true);
    setImageList([]);
    const res = await getImagesFromQuery(input, page);
    setIsLoading(false);
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
    <div className={styles.container}>
      <SearchBox handleSearch={handleSearch} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        input={input}
        handleSearch={handleSearch}
      />
      {isLoading && <div className={styles.loader}></div>}
      <ImageList imageList={imageList} />
    </div>
  );
}

export default Home;
