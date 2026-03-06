import deliveryIcon from "../assets/delivery-svgrepo-com.svg";
function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <img src={deliveryIcon} alt="Envíos" width={40} />
        <h3>Envíos a todo el país</h3>
        <p>Entrega rápida y segura</p>
      </div>
    </section>
  );
}

export default Features;