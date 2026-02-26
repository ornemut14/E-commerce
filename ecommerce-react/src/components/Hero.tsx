import banner from "../assets/banner.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-content">
        <h1>QUALITY</h1>
        <p>The Best Products</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;