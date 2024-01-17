import React from "react";
import "./style.css";
const Modal = () => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <div className="modal-body">
          <button>Close Modal</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
