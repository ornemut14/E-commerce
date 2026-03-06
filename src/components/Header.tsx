import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

import cartIcon from "../assets/cart-svgrepo-com.svg";
import personIcon from "../assets/person-circle-svgrepo-com.svg";
import shopIcon from "../assets/shopping-bag-svgrepo-com.svg";
import homeIcon from "../assets/home-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";

function Header() {
  const [search, setSearch] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { getTotalItems } = useCart();

  const navigate = useNavigate(); // 👈 navegación

  // Maneja la búsqueda
  const handleSearch = (value: string) => {
    setSearch(value);

    if (value.trim() !== "") {
      navigate(`/catalogo?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/catalogo");
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <h2 className="logo">ZAFIRO'S</h2>

          {/* 🔍 Buscador */}
          <div className="search-bar">
            <img src={searchIcon} alt="Buscar" className="search-icon" />

            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-btn"
                onClick={() => handleSearch("")}
              >
                ✕
              </button>
            )}
          </div>

          {/* 🧭 Navegación */}
          <nav className="nav">
            <Link to="/home">
              <img src={homeIcon} alt="Inicio" />
            </Link>

            <Link to="/catalogo">
              <img src={shopIcon} alt="Tienda" />
            </Link>

            {/* 🛒 Carrito */}
            <button
              className="cart-button"
              onClick={() => setIsCartOpen(true)}
            >
              <img src={cartIcon} alt="Carrito" />

              {getTotalItems() > 0 && (
                <span className="cart-badge">
                  {getTotalItems()}
                </span>
              )}
            </button>

            
          </nav>
        </div>
      </header>

      {/* 🪟 Modal carrito */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default Header;
