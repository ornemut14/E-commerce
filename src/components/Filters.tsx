import { useState } from "react";

type FiltersProps = {
  category: string;
  material: string;
  setCategory: (value: string) => void;
  setMaterial: (value: string) => void;
};

function Filters({
  category,
  material,
  setCategory,
  setMaterial,
}: FiltersProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`filters ${isOpen ? "active" : ""}`}>
      
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
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
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
                  material === item ? "active" : ""
                }`}
                onClick={() => setMaterial(item)}
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