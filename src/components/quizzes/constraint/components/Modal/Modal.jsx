import React from "react";
import "./style.css";
// eslint-disable-next-line react/prop-types
const Modal = () => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <div className="modal-body">
          <button className="modal-button">Close Modal</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
