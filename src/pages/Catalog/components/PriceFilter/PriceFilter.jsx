import { useState } from "react";

import styles from "./PriceFilter.module.scss";
import "./Slider.scss";

import ReactSlider from "react-slider";

const MIN = 4500;
const MAX = 300500;

export const PriceFilter = () => {
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className={styles.catalogPriceFilter}>
      <p className={styles.catalogPriceTitle}>Цена, с.</p>
      <div className={styles.catalogPriceRange}>
        {values[0]} с. - {values[1]} с.
      </div>
      <p className={styles.catalogPriceCurrent}>
        Выбранная цена: {values[1] - values[0]} с.
      </p>

      <ReactSlider
        className="slider"
        onChange={setValues}
        value={values}
        min={MIN}
        max={MAX}
      />
    </div>
  );
};
