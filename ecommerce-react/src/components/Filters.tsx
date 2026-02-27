import { useState } from "react";

type FiltersProps = {
  setCategory: (value: string) => void;
  setMaterial: (value: string) => void;
};

function Filters({ setCategory, setMaterial }: FiltersProps) {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeMaterial, setActiveMaterial] = useState("");
  const [isOpen, setIsOpen] = useState(false); // 👈 acordeón mobile

  const handleCategory = (value: string) => {
    setActiveCategory(value);
    setCategory(value);
  };

  const handleMaterial = (value: string) => {
    setActiveMaterial(value);
    setMaterial(value);
  };

  return (
    <div className={`filters ${isOpen ? "active" : ""}`}>
      {/* Botón visible solo en mobile */}
      <button
        className="filters-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Ocultar filtros" : "Mostrar filtros"}
      </button>

      <div className="filters-content">
        <h3>Categorías</h3>

        <div className="filter-group">
          {["Anillos", "Cadenas", "Pulseras", "Aros"].map((item) => (
            <button
              key={item}
              className={`filter-btn ${
                activeCategory === item ? "active" : ""
              }`}
              onClick={() => handleCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <h3>Material</h3>

        <div className="filter-group">
          {["Plata 925", "Acero Blanco", "Acero Dorado", "Fantasia"].map(
            (item) => (
              <button
                key={item}
                className={`filter-btn ${
                  activeMaterial === item ? "active" : ""
                }`}
                onClick={() => handleMaterial(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Filters;