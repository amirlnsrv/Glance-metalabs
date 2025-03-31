import { Badge } from "common/ui/Badge";
import styles from "./CatalogCard.module.scss";
import { Button } from "common/ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cartSlice";
import { Flip, toast, ToastContainer } from "react-toastify";

export const CatalogCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notifyNotInStock = () => toast("Данного товара нет в наличии");
  const notifySuccessAddedInCart = () => toast("Товар добавлен в корзину!");

  return (
    <>
      <ToastContainer transition={Flip} />
      <div className={styles.catalogCard}>
        <div
          className={styles.wrapper}
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className={styles.img}>
            <img src={item.img} alt={item.title} />
            {item.discountPrice && (
              <Badge price={item.price} discountPrice={item.discountPrice} />
            )}
          </div>
          <div className={styles.body}>
            <h2 className={styles.title}>
              {item.title} {item.storage}GB
            </h2>
            <ul className={styles.desc}>
              <li>Экран: 6.1"/2532x1170</li>
              <li>Количество ядер: 6</li>
              <li>Мощность блока питания: 20 Вт</li>
            </ul>
            {item.inStock ? (
              <p className={styles.instock}>В наличии</p>
            ) : (
              <p className={styles.notinstock}>Нет в наличии</p>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.prices}>
            <p className={styles.discountPrice}>
              {item.discountPrice ?? item.price} с
            </p>
            {item.discountPrice && (
              <p className={styles.commonPrice}>{item.price} с</p>
            )}
          </div>

          <Button
            title="В корзину"
            className={`${styles.catalogBtn} ${
              !item.inStock ? styles.notavailable : ""
            }`}
            onClick={() =>
              item.inStock
                ? dispatch(addToCart(item)) && notifySuccessAddedInCart()
                : notifyNotInStock()
            }
          />
        </div>
      </div>
    </>
  );
};
