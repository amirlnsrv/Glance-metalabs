import styles from "./Button.module.scss";

export const Button = ({ title, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};
