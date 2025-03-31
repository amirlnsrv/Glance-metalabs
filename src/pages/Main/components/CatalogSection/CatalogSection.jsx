import { AppContainer } from "layouts/AppContainer";

import styles from "./CatalogSection.module.scss";

import { CatalogItem } from "common/components/CatalogItem";
import { Title } from "common/components/Title";
import { useSelector } from "react-redux";

export const CatalogSection = () => {
  const { categories } = useSelector((state) => state.products);

  return (
    <section className={styles.catalog}>
      <AppContainer>
        <Title title="Каталог" />
        <div className={styles.catalogInner}>
          {categories.map((item, idx) => (
            <CatalogItem item={item} key={idx} />
          ))}
        </div>
      </AppContainer>
    </section>
  );
};
