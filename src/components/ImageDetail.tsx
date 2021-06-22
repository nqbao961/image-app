import React, { useEffect, useState } from "react";
import { getImagesFromId } from "../api/unsplash";
import { ImageItemType } from "../types/index";

function ImageDetail({ id }: { id: string }) {
  const [imageData, setImageData] = useState<ImageItemType>();
  useEffect(() => {
    (async () => {
      const res = await getImagesFromId(id);
      if (res) {
        setImageData(res.data);
      }
    })();
  });
  if (imageData) {
    return <img src={imageData.urls.thumb} alt="" />;
  }
  return <div>Getting data...</div>;
}

export default ImageDetail;
