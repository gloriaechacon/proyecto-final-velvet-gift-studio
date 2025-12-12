import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";

import "./Cart.css";

export const Cart = () => {
  const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

  return (
    <section className="item-list-container">
      <h2>Shopping Cart</h2>

      {cart.length ? (
        cart.map((prod) => (
          <Item key={prod.id} {...prod}>
            <span>Quantity: {prod.quantity}</span>
            <button className="btn" onClick={() => deleteItem(prod.id)}>
              Remove
            </button>
          </Item>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      {cart.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>Total to pay: ${total()}</p>
          </div>
          <button className="btn" onClick={checkout}>
            Checkout
          </button>
          <button className="btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      ) : (
        <Link className="btn" to="/">
          Back to Home
        </Link>
      )}
    </section>
  );
};
