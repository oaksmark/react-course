import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

export default function CartItem() {
  const cartCtx = useContext(CartContext);
  return cartCtx.items.map((item) => {
    return (
      <li className="cart-item" key={item.id} id={item.id}>
        <p>
          {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
        </p>
        <p className="cart-item-actions">
          <button onClick={() => cartCtx.removeItem(item)}>-</button>
          <button>{item.quantity}</button>
          <button onClick={() => cartCtx.addItem(item)}>+</button>
        </p>
      </li>
    );
  });
}
