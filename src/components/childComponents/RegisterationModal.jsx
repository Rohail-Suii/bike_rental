import React from 'react';
import ReactDOM from 'react-dom';

const ModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body // Render the modal as a direct child of the document's body
  );
};

export default ModalWindow;
