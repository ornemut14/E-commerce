import whatsappIcon from "../assets/whatsapp-fill-svgrepo-com.svg";
import instagramIcon from "../assets/instagram-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>ZAFIROS</h3>
        <p>Joyería & Accesorios</p>
        <p>📍 San Juan, Argentina</p>

        <h4>Contacto</h4>
<a
  className="contact-link"
  href="https://wa.me/542644362739?text=Hola%20quiero%20hacer%20una%20consulta"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={whatsappIcon}
    alt="WhatsApp 1"
    style={{ width: "27px", height: "27px" }}
  /> Orne
</a>

<a
  className="contact-link"
  href="https://wa.me/542644810270?text=Hola%20quiero%20hacer%20una%20consulta"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={whatsappIcon}
    alt="WhatsApp 2"
    style={{ width: "27px", height: "27px" }}
  /> Mica
</a>
      </div>

      <div>
        <h4>Seguinos</h4>

<a
  className="contact-link"
  href="https://instagram.com/zafiros_joyass"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={instagramIcon} alt="Instagram" width={40} />
  <span>Instagram</span>
</a>
      </div>
    </footer>
  );
}

export default Footer;