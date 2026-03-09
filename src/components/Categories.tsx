import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import aros from "../assets/aros.png";
import ring from "../assets/ring.png";
import cadenita from "../assets/cadenita.png";
import pulsera from "../assets/pulsera.png";
import dijes from "../assets/dije.png";

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
            style={{ backgroundImage: `url(${dijes})` }}
            onClick={() => goToCategory("dijes")}
          >
            Dijes
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${cadenita})` }}
            onClick={() => goToCategory("cadenas")}
          >
            Cadenas
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${aros})` }}
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
            style={{ backgroundImage: `url(${pulsera})` }}
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