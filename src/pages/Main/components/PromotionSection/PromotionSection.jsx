import { AppContainer } from "layouts/AppContainer";

import styles from "./PromotionSection.module.scss";

import { Title } from "common/components/Title";
import { Card } from "common/components/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "api/action";
import { Skeleton } from "common/ui/Skeleton";

export const PromotionSection = () => {
  const dispatch = useDispatch();

  const { responseForProducts, loading } = useSelector(
    (state) => state.products
  );

  const { data } = responseForProducts;

  useEffect(() => {
    dispatch(getProducts({ limit: 6, page: 1 }));
  }, []);

  const loader = [1, 2, 3, 4, 5];

  return (
    <section className={styles.promotion}>
      <AppContainer>
        <Title title="Акции" />
        <div className={styles.promotionInner}>
          {loading
            ? loader.map((_, idx) => <Skeleton key={idx} />)
            : data?.map((item, idx) =>
                item.discountPrice ? <Card key={idx} item={item} /> : ""
              )}
        </div>
      </AppContainer>
    </section>
  );
};
