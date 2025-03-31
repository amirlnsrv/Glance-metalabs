import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AppContainer } from "layouts/AppContainer";

import styles from "./CarouselWithContent.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../../../../assets/images/slide1.png";

const carouselData = [
  {
    img: slide1,
    title: "Умная колонка",
    discountOffer: "СКИДКА 30%",
    description: "при покупке второго товара",
  },
  {
    img: slide1,
    title: "Умная колонка",
    discountOffer: "СКИДКА 30%",
    description: "при покупке второго товара",
  },
  {
    img: slide1,
    title: "Умная колонка",
    discountOffer: "СКИДКА 30%",
    description: "при покупке второго товара",
  },
];

export const CarouselWithContent = () => {
  return (
    <section className={styles.carousel}>
      <AppContainer>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          {carouselData.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.img} alt={slide.title} />
              <div className={styles.text}>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.desciption}>
                  <span>{slide.discountOffer}</span> <br /> {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AppContainer>
    </section>
  );
};
