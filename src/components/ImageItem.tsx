import React, { useEffect, useRef, useState } from "react";
import { ImageItemType } from "../types/index";
import { Link } from "react-router-dom";
import "../assets/css/ImageItem.css";

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
      observer.unobserve(current);
    };
  }, [observer]);

  return (
    <Link ref={imageEl} to={`/${imageItem.id}`} className="image-item">
      {!loaded && <div className="shimmer"></div>}
      <img
        style={{ display: loaded ? "block" : "none" }}
        onLoad={onLoad}
        data-src={imageItem.urls.thumb}
        alt={imageItem.alt_description}
      />
    </Link>
  );
}
