import { CarouselWithContent } from "./components/CarouselWithContent";
import { CatalogSection } from "./components/CatalogSection";
import { PromotionSection } from "./components/PromotionSection";

import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.page}>
      <CarouselWithContent />
      <CatalogSection />
      <PromotionSection />
    </main>
  );
};
