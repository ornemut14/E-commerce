import banner from "../assets/banner.png";
function Hero() {

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
    </section>
  );
}

export default Hero;