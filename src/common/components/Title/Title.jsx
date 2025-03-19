import styles from "./Title.module.scss";

export const Title = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
