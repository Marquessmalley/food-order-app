import React from "react";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MyMeals</h1>
        <HeaderCartButton showCart={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table with food" />
      </div>
    </>
  );
};

export default Header;
