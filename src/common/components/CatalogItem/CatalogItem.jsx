import styles from "./CatalogItem.module.scss";

export const CatalogItem = ({ item }) => {
  return (
    <div className={styles.catalogItem}>
      <div className={styles.catalogItemBg}>
        <img src={item.img} alt={item.title} />
      </div>
      <p className={styles.catalogItemTitle}>{item.title}</p>
    </div>
  );
};
