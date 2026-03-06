import { useCart } from "../context/CartContext";
import "./CartModal.css";
import trashIcon from "../assets/trash.svg";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, getTotal } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const phone = "5492644362739";

    let message = `¡Hola! Te paso el resumen de mi pedido\n\nMi pedido es\n\n`;

    cart.forEach((item) => {
      message += `*${item.name}*\n`;
      message += `${item.quantity}x ${item.name}: $${item.price * item.quantity}\n\n`;
    });

    message += `*TOTAL:* *$${getTotal()}*`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Carrito de compras</h2>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div>
              <p>{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>

            <div className="price-delete">
              <span>${item.price * item.quantity}</span>

              <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <img src={trashIcon} alt="Eliminar" />
              </button>
            </div>
          </div>
        ))}

        <div className="cart-total">
          Total: ${getTotal()}
        </div>

        <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
          Confirmar pedido por WhatsApp
        </button>
      </div>
    </div>
  );
}

export default CartModal;