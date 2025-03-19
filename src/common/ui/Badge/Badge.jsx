import styles from "./Badge.module.scss";

export const Badge = ({ price, discountPrice }) => {
  const precent = ((price - discountPrice) / price) * 100;
  return <div className={styles.badge}>- {precent.toFixed(0)} %</div>;
};
