import { useNavigate } from "react-router-dom";
import styles from "./CatalogItem.module.scss";

export const CatalogItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.catalogItem}
      onClick={() => navigate(`/catalog/${item.categoryId}`)}
    >
      <div className={styles.catalogItemBg}>
        <img src={item.img} alt={item.title} />
      </div>
      <p className={styles.catalogItemTitle}>{item.title}</p>
    </div>
  );
};
