import { ROUTER_PATHS } from "routes/routesPath";
import styles from "./Welcome.module.scss";
import { Link } from "react-router-dom";

export const Welcome = ({ user }) => {
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
