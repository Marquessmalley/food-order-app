import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = ({ showCart }) => {
  const { items } = useContext(CartContext);

  // IF YOU WANT THE QUANITY OF ITEMS AS CART NUMBER
  // REDUCER METHOD RUN CALL BACK ON ALL ITEMS IN A ARRAY RETURNNG A SINGLE VALUE IN THE END
  const numberOfCartItems = items.reduce((prevNumber, item) => {
    return prevNumber + item.quanity;
  }, 0);

  // If YOU WANT THE LENGTH OF ITEMS IN CAR(NOT DEPENDING ON QUANITY)
  // const numberOfCartItems = items.length;
  return (
    <button className={classes.button} onClick={showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
