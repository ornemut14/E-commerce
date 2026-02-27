
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./catalog.css";

function Catalog() {
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");

  const filteredProducts = products.filter((p) =>
    (category ? p.category === category : true) &&
    (material ? p.material === material : true)
  );

  return (<>
      <Header />
      <div className="catalog-page">
        <Filters
          setCategory={setCategory}
          setMaterial={setMaterial}
        />

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Catalog;