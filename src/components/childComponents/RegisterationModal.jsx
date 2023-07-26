import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";

const ModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay overscroll-contain m-10 ">
      <div className="modal-content w-[460px] bg-gray-100 overflow-auto  h-screen ">
        {children}
        <h2 className='block bg-slate-900 text-white'>COMPLETE RESERVATION</h2>
        <p className='text-black'>This is the content of the modal
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea vel voluptate, eum vero incidunt placeat ducimus, ab fuga similique unde asperiores eius? Aspernatur repudiandae dolor, consequuntur distinctio odio esse?.</p>
        <div  onClick={onClose}>
        <Button text="Close" image={null}/>
        </div>
        
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
export default ModalWindow;