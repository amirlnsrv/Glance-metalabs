import { ROUTER_PATHS } from "routes/routesPath";
import styles from "./Profile.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "common/ui/Button";
import { setUserState } from "store/authSlice";
import { useEffect } from "react";
import { AppContainer } from "layouts/AppContainer";

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(setUserState(null));
    localStorage.removeItem("user-data");
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    if (!user) {
      navigate(ROUTER_PATHS.auth);
    }
  }, [user]);

  return (
    <AppContainer>
      <main className={styles.greeting}>
        <div className={styles.greetingHeader}>
          <Button>Мои заказы</Button>
          <Button onClick={logout}>Выйти из аккаунта</Button>
        </div>

        <section className={styles.greetingContent}>
          <h1>
            Здравствуйте {user?.name} {user?.lastName}🖐️!
          </h1>
          <p>Готовы совершить покупку в нашем магазине?</p>
          <Link to={ROUTER_PATHS.main}>Перейти на страницу товаров</Link>
        </section>
      </main>
    </AppContainer>
  );
};
