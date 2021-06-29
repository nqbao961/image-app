import styles from "../../styles/common/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
