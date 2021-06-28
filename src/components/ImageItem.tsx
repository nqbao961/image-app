import React, { useEffect, useRef, useState } from "react";
import { ImageItemType } from "../types/index";
import Link from "next/link";
import styles from "../styles/ImageItem.module.scss";

type ImageItemProps = {
  observer: any;
  imageItem: ImageItemType;
};

export function ImageItem({ observer, imageItem }: ImageItemProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [imageItem]);

  function onLoad() {
    setLoaded(true);
  }
  const imageEl = useRef(null);

  useEffect(() => {
    const { current } = imageEl;

    if (observer !== null) {
      observer.observe(current);
    }

    return () => {
      if (observer !== null) {
        observer.unobserve(current);
      }
    };
  }, [observer]);

  return (
    <Link href={`/image/${imageItem.id}`}>
      <a ref={imageEl} className={styles.imageItem}>
        {!loaded && <div className={styles.shimmer}></div>}
        <img
          style={{ display: loaded ? "block" : "none" }}
          onLoad={onLoad}
          data-src={imageItem.urls.thumb}
          alt={imageItem.alt_description}
        />
      </a>
    </Link>
  );
}
