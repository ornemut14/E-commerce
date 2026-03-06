import whatsappIcon from "../assets/whatsapp-fill-svgrepo-com.svg";
import instagramIcon from "../assets/instagram-svgrepo-com.svg";
import locationIcon from "../assets/location-pin-alt-1-svgrepo-com.svg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>ZAFIROS</h3>
          <p>Joyería & Accesorios</p>
          <p className="location">
            <img src={locationIcon} alt="Ubicación" width={18} />
            San Juan, Argentina
          </p>
        </div>

        <div className="footer-center">
          <h4>Contacto</h4>

          <a
            className="contact-link"
            href="https://wa.me/542644362739?text=Hola%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt="WhatsApp Orne" width={27} />
            Orne
          </a>

          <a
            className="contact-link"
            href="https://wa.me/542644810270?text=Hola%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt="WhatsApp Mica" width={27} />
            Mica
          </a>
        </div>

        <div className="footer-right">
          <h4>Seguinos</h4>

          <a
            className="contact-link"
            href="https://instagram.com/zafiros_joyass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" width={40} />
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;