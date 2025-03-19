import { useDispatch, useSelector } from "react-redux";
import styles from "./Products.module.scss";
import { useEffect } from "react";
import { getProducts } from "api/action";
import { Card } from "common/components/Card";

export const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  return (
    <div className={styles.products}>
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
