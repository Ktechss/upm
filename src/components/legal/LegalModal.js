import React from "react";
import "./LegalModal.css"; // Ensure you create this CSS file

const LegalModal = ({ title, content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default LegalModal;
