import { AppContainer } from "layouts/AppContainer";
import { Title } from "common/components/Title";

import backIcon from "assets/icons/back.svg";

import styles from "./Catalog.module.scss";
import { SortPopup } from "./components/SortPopup";
import { BreadCrumbs } from "common/ui/BreadCrumbs";
import { PriceFilter } from "./components/PriceFilter";
import { BrandsFilter } from "./components/BrandsFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "api/action";
import { useEffect } from "react";
import { Card } from "common/components/Card";
import { useParams } from "react-router-dom";

const categoryTitles = {
  1: "Смартфоны",
  2: "Ноутбуки",
  3: "Компьютеры",
  4: "Телевизоры",
  5: "Планшеты",
  6: "Колонки",
};

export const Catalog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, loading } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getProducts(id));
  }, [id, dispatch]);

  return (
    <main className={styles.catalog}>
      <AppContainer>
        <div className={styles.catalogHeader}>
          <BreadCrumbs
            crumbs={[
              { name: "Главная", path: "/" },
              { name: categoryTitles[id], path: `/catalog/${id}` },
            ]}
          />
          <div className={styles.catalogHeaderCategory}>
            <img src={backIcon} alt="back-icon" />
            <Title title={categoryTitles[id]} />
          </div>
          <SortPopup />
        </div>
        <section className={styles.catalogContent}>
          <aside className={styles.catalogFilters}>
            <PriceFilter />
            <BrandsFilter />
          </aside>
          <div className={styles.products}>
            {loading ? (
              <h2>Загрузка...</h2>
            ) : (
              products.map((item) => <Card item={item} key={item.id} />)
            )}
            {!products.length && <h2>Товаров пока нет в наличии...</h2>}
          </div>
        </section>
      </AppContainer>
    </main>
  );
};
