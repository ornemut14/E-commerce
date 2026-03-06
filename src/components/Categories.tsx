import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import necklace from "../assets/necklace.jpg";
import ring from "../assets/ring.jpg";
import earrings from "../assets/earrings.jpg";

function Categories() {
  const navigate = useNavigate();

  const goToCategory = (categoria: string) => {
    navigate(`/catalogo?categoria=${categoria}`);
  };

  return (
    <section className="categories">
<Swiper
  modules={[Navigation]}
  navigation
  loop={true}
  spaceBetween={12}
  slidesPerView={1.2}
  speed={600}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.5 },
    1400: { slidesPerView: 3 },
  }}
>
        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${necklace})` }}
            onClick={() => goToCategory("cadenas")}
          >
            Cadenas
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${earrings})` }}
            onClick={() => goToCategory("aros")}
          >
            Aros
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${ring})` }}
            onClick={() => goToCategory("anillos")}
          >
            Anillos
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${earrings})` }}
            onClick={() => goToCategory("pulseras")}
          >
            Pulseras
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Categories;