import { ROUTER_PATHS } from "routes/routesPath";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <main className={styles.greeting}>
      <h1>
        Здравствуйте {user.name} {user.lastName}🖐️!
      </h1>
      <p>Готовы совершить покупку в нашем магазине?</p>
      <Link to={ROUTER_PATHS.main}>Перейти на страницу товаров</Link>
    </main>
  );
};
