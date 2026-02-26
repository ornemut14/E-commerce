function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>MAKAO</h3>
        <p>Miami, FL</p>
        <p>+54 264 555 1234</p>
      </div>

      <div>
        <h4>Help</h4>
        <p>FAQ</p>
        <p>Shipping</p>
        <p>Tracking</p>
      </div>

      <div>
        <h4>About</h4>
        <p>About us</p>
        <p>Privacy</p>
        <p>Contact</p>
      </div>

      <div>
        <h4>Newsletter</h4>
        <input type="email" placeholder="Email" />
        <button>Send</button>
      </div>
    </footer>
  );
}

export default Footer;