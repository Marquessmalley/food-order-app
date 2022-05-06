import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const itemPrice = `$${price.toFixed(2)}`;

  const { addItem } = useContext(CartContext);

  const addToCartHandle = (quanity) => {
    addItem({ id: id, name: name, quanity: quanity, price: price });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{itemPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandle} />
      </div>
    </li>
  );
};

export default MealItem;
