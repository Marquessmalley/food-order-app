import { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import Modal from "../UI/Modal";
const Cart = ({ onHideCart }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const cartTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, quanity: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quanity={item.quanity}
          onRemove={() => {
            cartItemRemoveHandler(item.id);
          }}
          onAdd={() => {
            cartItemAddHandler(item);
          }}
        />
      ))}
    </ul>
  );

  // const itemTotalAmount = items.map((item) => item.price);
  return (
    <Modal hideCart={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount: </span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
