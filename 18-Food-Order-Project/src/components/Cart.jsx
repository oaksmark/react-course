import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting.js";
import Modal from "./Modal.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
      //A lógica onClose acima permite reabrir o modal após sair com a tecla ESC.
    >
      <div className="modal-dialog">
        <h2>Your Cart</h2>
        <ul>
          <CartItem></CartItem>
        </ul>
        {cartCtx.items.length === 0 ? (
          <h2>Is Empty!</h2>
        ) : (
          <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        )}
      </div>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textonly="true">
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
  I;
}
