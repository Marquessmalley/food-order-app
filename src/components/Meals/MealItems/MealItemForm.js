import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = ({ id, onAddToCart }) => {
  const [quanityIsValid, setQuanityIsValid] = useState(true);
  const quanityInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredQuanity = quanityInputRef.current.value;
    const enteredQuanityToNumber = +enteredQuanity;
    if (
      enteredQuanityToNumber === 0 ||
      enteredQuanityToNumber < 1 ||
      enteredQuanityToNumber > 5
    ) {
      setQuanityIsValid(false);
      return;
    }

    onAddToCart(enteredQuanityToNumber);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={quanityInputRef}
        label="quanity"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!quanityIsValid && <p>Please enter valid quanity(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
