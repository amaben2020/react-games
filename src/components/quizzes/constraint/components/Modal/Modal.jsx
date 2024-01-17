import React from "react";
import "./style.css";
// eslint-disable-next-line react/prop-types
const Modal = ({ handleModalClose }) => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <div className="modal-body">
          <button className="modal-button" onClick={handleModalClose}>
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
