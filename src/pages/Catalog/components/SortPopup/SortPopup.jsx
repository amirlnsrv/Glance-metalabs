import { useState } from "react";
import styles from "./SortPopup.module.scss";
import sortIcon from "assets/icons/sort.svg";

export const SortPopup = ({ options, selectedOption, onSelect }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.sort}>
      <div
        className={styles.sortHeader}
        onClick={() => setIsPopupOpen((prev) => !prev)}
      >
        <img src={sortIcon} alt="sort-icon" />
        {selectedOption.label}
      </div>
      {isPopupOpen && (
        <ul className={styles.sortList}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
