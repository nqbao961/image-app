import React, { useEffect, useState } from "react";
import { ImageItemType } from "../types/index";
import { ImageItem } from "./ImageItem";
import styles from "../assets/css/ImageList.module.scss";

type ImageListProps = {
  imageList: Array<ImageItemType>;
};

function createObserver(
  inViewCallback = (entries: any, observer: any) => {},
  newOptions = {}
) {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };
  return new IntersectionObserver(
    inViewCallback,
    Object.assign(defaultOptions, newOptions)
  );
}

function onImageInView(entries: any, observer: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const imageElement = element.querySelector("img");
      const imageSrc = imageElement.getAttribute("data-src");

      imageElement.removeAttribute("data-src");
      imageElement.setAttribute("src", imageSrc);

      observer.unobserve(element);
    }
  });
}

export function ImageList({ imageList }: ImageListProps) {
  const [imageObserver, setImageObserver] =
    useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const imageObserver = createObserver(onImageInView);
    setImageObserver(imageObserver);

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  let imageElements = imageList.map((image, index) => (
    <ImageItem key={index} observer={imageObserver} imageItem={image} />
  ));

  return <div className={styles.container}>{imageElements}</div>;
}
