import { AppContainer } from "layouts/AppContainer";
import { Title } from "common/components/Title";
import { BreadCrumbs } from "common/ui/BreadCrumbs";
import { SortPopup } from "./components/SortPopup";
import { PriceFilter } from "./components/PriceFilter";
import { BrandsFilter } from "./components/BrandsFilter";

import backIcon from "assets/icons/back.svg";

import styles from "./Catalog.module.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "api/action";

import { Flip, toast, ToastContainer } from "react-toastify";
import { Skeleton } from "common/ui/Skeleton";
import { CatalogCard } from "./components/CatalogCard";
import { sortOptions } from "constants/sortOptions";
import { categoryTitles } from "constants/categories";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notifyError = () => toast("Произошла ошибка: " + error);

  const { responseForProducts, loading, error } = useSelector(
    (state) => state.products
  );
  const { data, pages } = responseForProducts;

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  function renderPagination() {
    const btns = [];
    for (let i = 1; i <= pages; i++) {
      btns.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`${styles.paginationBtn} ${
            i === currentPage ? styles.active : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return btns;
  }

  useEffect(() => {
    dispatch(
      getProducts({
        categoryId: id,
        page: currentPage,
        sortBy: selectedOption.sortBy,
        limit: 6,
      })
    );
    window.scrollTo(0, 0);
  }, [id, dispatch, currentPage, selectedOption]);

  useEffect(() => {
    if (error) {
      notifyError();
    }
  }, [error]);

  return (
    <main className={styles.catalog}>
      <ToastContainer transition={Flip} />
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
          <SortPopup
            options={sortOptions}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />
        </div>
        <section className={styles.catalogContent}>
          <aside className={styles.catalogFilters}>
            <PriceFilter />
            <BrandsFilter />
          </aside>
          <div className={styles.products}>
            <div className={styles.productsInner}>
              {loading
                ? new Array(1, 2, 3, 4, 5, 6, 7, 8).map((_, index) => (
                    <Skeleton key={index} />
                  ))
                : data?.map((item) => (
                    <CatalogCard item={item} key={item.id} />
                  ))}
              {!data?.length && (
                <h2 className={styles.empty}>Товаров пока нет в наличии...</h2>
              )}
            </div>

            <div className={styles.pagination}>
              {currentPage > 1 && (
                <button
                  className={styles.paginationPrev}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  {"<"}
                </button>
              )}
              {renderPagination()}
              {currentPage < pages && (
                <button
                  className={styles.paginationNext}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  {">"}
                </button>
              )}
            </div>
          </div>
        </section>
      </AppContainer>
    </main>
  );
};
