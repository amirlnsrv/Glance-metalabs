import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";

import removeIcon from "assets/icons/trash.svg";
import { removeFromCart, updateQuantity } from "store/cartSlice";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.title} className={styles.image} />
      <h2 className={styles.title}>
        {item.title} {item.storage}GB
      </h2>
      <div className={styles.counter}>
        <button
          className={`${styles.decrementBtn} ${
            item.quantity === 1 && styles.notAvailable
          }`}
          onClick={() =>
            dispatch(
              updateQuantity({
                id: item.id,
                color: item.color,
                quantity: item.quantity - 1,
              })
            )
          }
        >
          -
        </button>
        <p className={styles.quantity}>{item.quantity}</p>
        <button
          className={styles.incrementBtn}
          onClick={() =>
            dispatch(
              updateQuantity({
                id: item.id,
                color: item.color,
                quantity: item.quantity + 1,
              })
            )
          }
        >
          +
        </button>
      </div>

      <p className={styles.price}>
        {item.quantity ? item.price * item.quantity : item.price} сом
      </p>

      <img
        src={removeIcon}
        alt="remove-icon"
        className={styles.removeBtn}
        onClick={() => dispatch(removeFromCart(item.id))}
      />
    </div>
  );
};
