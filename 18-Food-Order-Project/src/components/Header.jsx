import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const userProgerssCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  console.log(totalCartItems);

  function handleShowCart() {
    userProgerssCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} className="text-button" textonly="true">
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
