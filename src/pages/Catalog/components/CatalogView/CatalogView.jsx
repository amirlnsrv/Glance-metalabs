import styles from "./CatalogView.module.scss";

import { IoGrid } from "react-icons/io5";
import { IoIosList } from "react-icons/io";

export const CatalogView = () => {
  return (
    <div className={styles.catalogView}>
      <IoGrid size={24} />
      <IoIosList size={33} color="gray" />
    </div>
  );
};
