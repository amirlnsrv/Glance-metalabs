import styles from "./Button.module.scss";

export const Button = ({ children, onClick, className, title }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children} {title}
    </button>
  );
};
