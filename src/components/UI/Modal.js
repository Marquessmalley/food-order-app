import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = ({ hideCart }) => {
  return <div className={classes.backdrop} onClick={hideCart}></div>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = ({ children, hideCart }) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop hideCart={hideCart} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
