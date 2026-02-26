import banner from "../assets/banner.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-content">
        <h1>🔥 20% OFF EN TODA LA TIENDA</h1>
        <p>Solo por hoy</p>
        <button>COMPRAR AHORA</button>
      </div>
    </section>
  );
}

export default Hero;