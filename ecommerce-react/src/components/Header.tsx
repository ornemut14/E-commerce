import { useState } from "react";
import cartIcon from "../assets/cart-svgrepo-com.svg";
import personIcon from "../assets/person-circle-svgrepo-com.svg";
import shopIcon from "../assets/shopping-bag-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg"; 

function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">ZAFIRO'S</h2>

        {/* 🔍 BUSCADOR */}
        <div className="search-bar">
          <img src={searchIcon} alt="Buscar" className="search-icon" />

          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-btn"
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}
        </div>

        <nav className="nav">
          <a href="#">
            <img src={shopIcon} alt="Tienda" />
          </a>
          <a href="#">
            <img src={cartIcon} alt="Carrito" />
          </a>
          <a href="#">
            <img src={personIcon} alt="Login" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;