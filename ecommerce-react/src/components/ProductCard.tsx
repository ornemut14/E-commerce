import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">
        ${product.price.toLocaleString("es-AR")}
      </p>

      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;