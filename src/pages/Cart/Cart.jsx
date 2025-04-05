import { BreadCrumbs } from "common/ui/BreadCrumbs";
import styles from "./Cart.module.scss";

import backIcon from "assets/icons/back.svg";
import cartIsEmpty from "assets/images/empty.png";

import { Title } from "common/components/Title";
import { AppContainer } from "layouts/AppContainer";
import { CartItem } from "./components/CartItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "common/ui/Button";
import { useNavigate } from "react-router-dom";
import { submitOrder } from "api/action";
import { Flip, toast, ToastContainer } from "react-toastify";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const notifySuccessOrder = () => toast("Заказ успешно оформлен!");

  const handleOrder = () => {
    dispatch(submitOrder());
    notifySuccessOrder();
  };

  return (
    <main className={styles.cart}>
      <ToastContainer transition={Flip} />
      <AppContainer>
        <div className={styles.cartHeader}>
          <BreadCrumbs
            crumbs={[
              { name: "Главная", path: "/" },
              { name: "Корзина", path: "/cart" },
            ]}
          />
          <div className={styles.cartHeaderTitle}>
            <img src={backIcon} alt="back-icon" />
            <Title title="Оформление заказа" />
          </div>
        </div>
        {!cartItems.length ? (
          <section className={styles.cartIsEmpty}>
            <h2>Ваша корзина пуста</h2>
            <img src={cartIsEmpty} alt="cart-is-empty" />
            <p>Добавьте товары из каталога</p>
            <Button
              title="Перейти в каталог"
              onClick={() => navigate("/catalog/1")}
            />
          </section>
        ) : (
          <section className={styles.cartContent}>
            <div className={styles.cartInner}>
              {cartItems.map((cartItem) => (
                <CartItem item={cartItem} key={cartItem.id} />
              ))}
            </div>
            <div className={styles.cartOrder}>
              <div className={styles.orderTotal}>
                <h2 className={styles.orderTitle}>Итого:</h2>
                <p className={styles.orderTotalCost}>{totalAmount} сом</p>
              </div>
              <Button title="Оформить заказ" onClick={handleOrder} />
            </div>
          </section>
        )}
      </AppContainer>
    </main>
  );
};
