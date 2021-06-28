import styles from "../../styles/common/Loading.module.scss";
import { useAppSelector } from "../../hooks";

export default function Loading() {
  const requesting = useAppSelector((state) => state.app.requesting);
  return requesting ? (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loader}></div>
      </div>
    </div>
  ) : null;
}
