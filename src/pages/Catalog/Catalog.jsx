import { AppContainer } from "layouts/AppContainer";
import { Title } from "common/components/Title";

import backIcon from "assets/icons/back.svg";

import styles from "./Catalog.module.scss";
import { SortPopup } from "./components/SortPopup";
import { BreadCrumbs } from "common/ui/BreadCrumbs";
import { CatalogView } from "./components/CatalogView";
import { PriceFilter } from "./components/PriceFilter";
import { BrandsFilter } from "./components/BrandsFilter";
import { Products } from "./components/Products";

export const Catalog = () => {
  return (
    <main className={styles.catalog}>
      <AppContainer>
        <div className={styles.catalogHeader}>
          <BreadCrumbs
            crumbs={[
              { name: "Главная", path: "/" },
              { name: "Смартфоны", path: "/smartphones" },
            ]}
          />
          <div className={styles.catalogHeaderCategory}>
            <img src={backIcon} alt="back-icon" />
            <Title title="Смартфоны" />
          </div>
          <div className={styles.catalogHeaderView}>
            <SortPopup />
            <CatalogView />
          </div>
        </div>
        <section className={styles.catalogContent}>
          <aside className={styles.catalogFilters}>
            <PriceFilter />
            <BrandsFilter />
          </aside>
          <Products />
        </section>
      </AppContainer>
    </main>
  );
};
