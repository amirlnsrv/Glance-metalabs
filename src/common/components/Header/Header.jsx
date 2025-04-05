import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import { AppContainer } from "layouts/AppContainer/AppContainer";
import { ROUTER_PATHS } from "routes/routesPath";
import glanceIcon from "assets/icons/glance.svg";

import { IoIosList } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { Search } from "../Search";

export const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <AppContainer>
        <div className={styles.headerInner}>
          <Link to={ROUTER_PATHS.main}>
            <img src={glanceIcon} alt="glance-icon" />
          </Link>
          <Search />
          <nav className={styles.headerNav}>
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
              to={ROUTER_PATHS.auth}
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.link}`
              }
            >
              <MdOutlineAccountCircle size={20} />
              <span>Профиль</span>
            </NavLink>
          </nav>
        </div>
      </AppContainer>
    </header>
  );
};
