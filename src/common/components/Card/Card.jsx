import { Button } from "common/ui/Button";
import styles from "./Card.module.scss";
import { Badge } from "common/ui/Badge";

export const Card = ({ item, onClick }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={item.img} alt={item.title} />
      {item.discountPrice && (
        <Badge price={item.price} discountPrice={item.discountPrice} />
      )}
      <p className={styles.cardTitle}>{item.title}</p>
      <div className={styles.cardPrices}>
        <p className={styles.cardDiscount}>
          {item.discountPrice ?? item.price} с
        </p>
        {item.discountPrice && (
          <p className={styles.cardPrice}>{item.price} с</p>
        )}
      </div>
      <div className={styles.cardFooter}>
        {item.inStock ? (
          <p className={styles.cardInstock}>В наличии</p>
        ) : (
          <p className={styles.cardNotinstock}>Нет в наличии</p>
        )}
        <Button title="Подробнее" onClick={onClick} />
      </div>
    </div>
  );
};
