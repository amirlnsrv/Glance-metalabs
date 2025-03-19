import { AppContainer } from "layouts/AppContainer";

import styles from "./PromotionSection.module.scss";

import { Title } from "common/components/Title";
import { Card } from "common/components/Card";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "api/action";

export const PromotionSection = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  return (
    <section className={styles.promotion}>
      <AppContainer>
        <Title title="Акции" />
        <div className={styles.promotionInner}>
          {products.map((item, idx) => (
            <Card
              key={idx}
              item={item}
              onClick={() => navigate(`/product/${item.id}`)}
            />
          ))}
        </div>
      </AppContainer>
    </section>
  );
};
