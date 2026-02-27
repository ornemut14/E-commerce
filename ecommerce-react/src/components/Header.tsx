import cartIcon from "../assets/cart-svgrepo-com.svg";
import personIcon from "../assets/person-circle-svgrepo-com.svg";
import shopIcon from "../assets/shopping-bag-svgrepo-com.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">ZAFIRO'S</h2>

        <nav className="nav">
          <a href="#">
            <img 
              src={shopIcon} 
              alt="Tienda" 
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </a>

          <a href="#">
            <img 
              src={cartIcon} 
              alt="Carrito" 
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </a>
          <a href="#">
            <img
              src={personIcon}
              alt="Login"
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;