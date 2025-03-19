import styles from "./BrandsFilter.module.scss";

export const BrandsFilter = () => {
  return (
    <div className={styles.brandsFilter}>
      <p>Бренд</p>
      <label>
        <input type="checkbox" name="brand" value="Apple" /> Apple
      </label>
      <label>
        <input type="checkbox" name="brand" value="Honor" /> Honor
      </label>
      <label>
        <input type="checkbox" name="brand" value="Samsung" /> Samsung
      </label>
    </div>
  );
};
