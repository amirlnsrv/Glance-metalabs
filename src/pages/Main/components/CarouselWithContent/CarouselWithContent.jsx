import { Carousel } from "react-bootstrap";

import { AppContainer } from "layouts/AppContainer";

import styles from "./CarouselWithContent.module.scss";

import slide1 from "../../../../assets/images/slide1.png";

export const CarouselWithContent = () => {
  return (
    <section className={styles.carousel}>
      <AppContainer>
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="slide-1" />
            <Carousel.Caption>
              <div className={styles.carouselCaption}>
                <h3 className={styles.carouselTitle}>Умная колонка</h3>
                <p className={styles.carouselText}>
                  <span>СКИДКА 30%</span>
                  <br />
                  при покупке второго товара
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="slide-1" />
            <Carousel.Caption>
              <div className={styles.carouselCaption}>
                <h3 className={styles.carouselTitle}>Умная колонка</h3>
                <p className={styles.carouselText}>
                  <span>СКИДКА 30%</span>
                  <br />
                  при покупке второго товара
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="slide-1" />
            <Carousel.Caption>
              <div className={styles.carouselCaption}>
                <h3 className={styles.carouselTitle}>Умная колонка</h3>
                <p className={styles.carouselText}>
                  <span>СКИДКА 30%</span>
                  <br />
                  при покупке второго товара
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </AppContainer>
    </section>
  );
};
