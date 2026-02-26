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
        >
          📱 WhatsApp 1
        </a>

        <a
          className="contact-link"
          href="https://wa.me/542644810270?text=Hola%20quiero%20hacer%20una%20consulta"
          target="_blank"
        >
          📱 WhatsApp 2
        </a>
      </div>

      <div>
        <h4>Seguinos</h4>

        <a
          className="contact-link"
          href="https://instagram.com/zafiros_joyass"
          target="_blank"
        >
          📸 Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;