import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import necklace from "../assets/necklace.jpg";
import ring from "../assets/ring.jpg";
import earrings from "../assets/earrings.jpg";

function Categories() {
  return (
    <section className="categories">
     <Swiper
      modules={[Navigation]}
      navigation
      loop={true}
      spaceBetween={0}
      slidesPerView={1.4}
      breakpoints={{
        640: {
          slidesPerView: 2.6,
        },
        1024: {
          slidesPerView: 3.8,
        },
      }}
    >
        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${necklace})` }}
          >
            Cadenas
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${earrings})` }}
          >
            Aros
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${ring})` }}
          >
            Anillos
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${ring})` }}
          >
            Pulseras
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${ring})` }}
          >
            Dijes
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Categories;