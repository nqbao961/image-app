import { SearchBox } from "../components/SearchBox";
import { Pagination } from "../components/Pagination";
import { ImageList } from "../components/ImageList";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getImages } from "../@redux/actions/image";
import styles from "../styles/Home.module.scss";
import { useLoading } from "../hooks/loading";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [input, setInput] = useState("");
  const { show, hide } = useLoading();

  const handleSearch = (input: string, page: number) => {
    setCurrentPage(page);
    setInput(input);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (input) {
      dispatch(getImages(input, currentPage));
    }
  }, [input, currentPage]);

  const data = useAppSelector((state) => state.images.data);
  const requesting = useAppSelector((state) => state.images.requesting);

  if (requesting) {
    show();
  } else {
    hide();
  }

  return (
    <div className={styles.container}>
      <SearchBox handleSearch={handleSearch} />
      {data && data.results.length > 0 && (
        <>
          <Pagination
            totalPages={data.total_pages}
            currentPage={currentPage}
            input={input}
            handleSearch={handleSearch}
          />
          <ImageList imageList={data.results} />
        </>
      )}
    </div>
  );
}

export default Home;
