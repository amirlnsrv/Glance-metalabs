import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProduct } from "api/action";
import { AppContainer } from "layouts/AppContainer";
import { Title } from "common/components/Title";
import backIcon from "assets/icons/back.svg";
import { BreadCrumbs } from "common/ui/BreadCrumbs";
import { Button } from "common/ui/Button";
import { Review } from "./components/Review";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";
import { productColors } from "constants/productColors";
import { addToCart } from "store/cartSlice";
import { categoryTitles } from "constants/categories";

export const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const notifyError = () =>
    toast.error("Произошла ошибка: " + currentProductError);
  const notifyNotInStock = () => toast.error("Данного товара нет в наличии");
  const notifySuccessAddedInCart = () =>
    toast.success("Товар добавлен в корзину!");
  const notifyLogin = () =>
    toast.warn("Войдите в аккаунт, чтобы добавить товар");

  const { isCurrentProductLoading, currentProduct, currentProductError } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCurrentProduct(id));
  }, [id]);

  useEffect(() => {
    if (currentProductError) {
      notifyError();
    }
  }, [currentProductError]);

  const currentProductColors = productColors?.filter((item) =>
    currentProduct?.colors?.find((i) => i === item.id)
  );

  const handleAddToCart = () => {
    if (user === null) {
      notifyLogin();
      return;
    }

    if (currentProduct.inStock) {
      dispatch(addToCart({ ...currentProduct, selectedColor }));
      notifySuccessAddedInCart();
    } else {
      notifyNotInStock();
    }
  };

  if (isCurrentProductLoading) {
    return (
      <div className={styles.loader}>
        <Spin size="large" />
      </div>
    );
  }

  console.log(categoryTitles);

  return (
    <main className={styles.productDetails}>
      <ToastContainer transition={Flip} />
      <AppContainer>
        <div className={styles.productDetailsHeader}>
          <BreadCrumbs
            crumbs={[
              { name: "Главная", path: "/" },
              {
                name: categoryTitles[currentProduct.categoryId],
                path: `/catalog/${currentProduct.categoryId}`,
              },
              { name: currentProduct.title, path: `/catalog/${id}` },
            ]}
          />
          <div className={styles.productDetailsTitle}>
            <img src={backIcon} alt="back-icon" />
            <Title title={currentProduct.title} />
          </div>
        </div>
        <section className={styles.productDetailsContent}>
          <img src={currentProduct.img} alt={currentProduct.title} />
          <div className={styles.productDetailsInner}>
            <div className={styles.productDetailsInfo}>
              <div className={styles.productDetailsInfoHeader}>
                <h2 className={styles.productDetailsInfoHeaderTitle}>
                  {currentProduct.title} {currentProduct.storage} GB
                </h2>
                <div className={styles.productDetailsInfoHeaderSelect}>
                  <p className={styles.productDetailsInfoHeaderSelectTitle}>
                    Цвет:
                  </p>
                  <div className={styles.productDetailsInfoHeaderSelectColors}>
                    {currentProductColors?.map(({ color, id }) => (
                      <button
                        key={id}
                        className={`${
                          styles.productDetailsInfoHeaderSelectColorBtn
                        } ${selectedColor === color ? styles.active : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
                {currentProduct.inStock ? (
                  <p className={styles.instock}>В наличии</p>
                ) : (
                  <p className={styles.notinstock}>Нет в наличии</p>
                )}
              </div>
              <div className={styles.productDetailsInfoDesc}>
                <h2>Характеристики:</h2>
                <div className={styles.specs}>
                  <div className={styles.spec}>
                    <span>Экран:</span>
                    <span className={styles.value}>6.1"/2532x1170</span>
                  </div>
                  <div className={styles.spec}>
                    <span>Количество ядер:</span>
                    <span className={styles.value}>6</span>
                  </div>
                  <div className={styles.spec}>
                    <span>Мощность блока питания:</span>
                    <span className={styles.value}>20 Вт</span>
                  </div>
                  <div className={styles.spec}>
                    <span>Оперативная память (RAM):</span>
                    <span className={styles.value}>6 ГБ</span>
                  </div>
                  <div className={styles.spec}>
                    <span>Встроенная память (ROM):</span>
                    <span className={styles.value}>128 ГБ</span>
                  </div>
                  <div className={styles.spec}>
                    <span>Основная камера (МПикс):</span>
                    <span className={styles.value}>64/2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.addToCart}>
              <p>{currentProduct.discountPrice ?? currentProduct.price} сом</p>
              <Button
                title="В корзину"
                className={`${styles.addToCartBtn} ${
                  !currentProduct.inStock ? styles.notavailable : ""
                }`}
                onClick={() => handleAddToCart()}
              />
            </div>
          </div>
        </section>

        <section className={styles.reviews}>
          <Title title="Отзывы" />
          <div className={styles.reviewsInner}>
            {currentProduct.reviews?.map((item, index) => (
              <Review item={item} key={index} />
            ))}
          </div>
        </section>
      </AppContainer>
    </main>
  );
};
