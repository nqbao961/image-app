import { ImageItemType } from "../types/index";
import styles from "../styles/ImageDetail.module.scss";

function ImageDetail({ imageData }: { imageData: ImageItemType }) {
  return (
    <div className={styles.container}>
      {imageData ? (
        <img src={imageData.urls.thumb} alt={imageData.alt_description} />
      ) : (
        <div>Getting data...</div>
      )}
    </div>
  );
}

export default ImageDetail;
