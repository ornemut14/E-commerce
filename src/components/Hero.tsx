import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-content">
        <h1>🔥 20% OFF EN TODA LA TIENDA</h1>
        <p>Solo por hoy</p>
        <button onClick={() => navigate("/catalogo")}>
          COMPRAR AHORA
        </button>
      </div>
    </section>
  );
}

export default Hero;