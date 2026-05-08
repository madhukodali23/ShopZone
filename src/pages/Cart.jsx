import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.title} x {item.qty}
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
    </div>
  );
};

export default Cart;