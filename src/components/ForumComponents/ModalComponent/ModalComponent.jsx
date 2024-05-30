// src/components/LoginComponents/LoginModal.jsx
import React from 'react';
import './ModalComponent.css'; // Puedes añadir estilos CSS para el modal
import LoginComponent from '../LoginComponents/LoginComponent.jsx'

const ModalComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    onClose(); // Cierra el modal después de iniciar sesión
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <LoginComponent/>
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
