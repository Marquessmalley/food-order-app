import classes from "./CartItem.module.css";

const CartItem = ({ name, price, quanity, onRemove, onAdd }) => {
  const itemPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{itemPrice}</span>
          <span className={classes.amount}>x {quanity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
