import { AppContainer } from "layouts/AppContainer";
import styles from "./FooterNav.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTER_PATHS } from "routes/routesPath";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";

export const FooterNav = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <footer className={styles.footer}>
      <AppContainer>
        <nav className={styles.footerNav}>
          <NavLink
            to={ROUTER_PATHS.main}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.link}`
            }
          >
            <IoHomeOutline size={20} />
            <span>Главная</span>
          </NavLink>
          <NavLink
            to="/catalog/1"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.link}`
            }
          >
            <IoIosList size={20} />
            <span>Каталог</span>
          </NavLink>
          <NavLink
            to={ROUTER_PATHS.cart}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.link}`
            }
          >
            <div className={styles.cartIcon}>
              <MdOutlineShoppingCart size={20} />
              {cartItems.length ? (
                <div className={styles.cartIconCount}>{cartItems.length}</div>
              ) : (
                ""
              )}
            </div>
            <span>Корзина</span>
          </NavLink>
          <NavLink
            to={ROUTER_PATHS.profile}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.link}`
            }
          >
            <MdOutlineAccountCircle size={20} />
            <span>Профиль</span>
          </NavLink>
        </nav>
      </AppContainer>
    </footer>
  );
};
