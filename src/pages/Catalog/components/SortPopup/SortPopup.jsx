import styles from "./SortPopup.module.scss";
import sortIcon from "assets/icons/sort.svg";

export const SortPopup = () => {
  return (
    <div className={styles.sort}>
      <img src={sortIcon} alt="sort-icon" />
      <p>По популярности</p>
    </div>
  );
};
