import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import { AppContainer } from "layouts/AppContainer/AppContainer";
import { ROUTER_PATHS } from "routes/routesPath";
import glanceIcon from "assets/icons/glance.svg";
import searchIcon from "assets/icons/search.svg";

import { IoIosList } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

export const Header = () => {
  return (
    <header className={styles.header}>
      <AppContainer>
        <div className={styles.headerInner}>
          <Link to={ROUTER_PATHS.main}>
            <img src={glanceIcon} alt="glance-icon" />
          </Link>
          <div className={styles.headerSearchContainer}>
            <img src={searchIcon} alt="search-icon" />
            <input
              type="text"
              className={styles.headerSearchInput}
              placeholder="Поиск"
            />
          </div>
          <nav className={styles.headerNav}>
            <NavLink
              to={ROUTER_PATHS.catalog}
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
              <MdOutlineShoppingCart size={20} />
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
        </div>
      </AppContainer>
    </header>
  );
};
