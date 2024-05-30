import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/Layouts/HeaderComponent';
import ModalComponent from '../components/ForumComponents/ModalComponent/ModalComponent.jsx';
import PostComponent from '../components/ForumComponents/PostComponents/PostComponent.jsx';

const ForumScreen = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  useEffect(() => {
    setLoginModalOpen(true); // Abre el modal cuando se carga el componente
  }, []);

  return (
    <div className="forum-container">
      <HeaderComponent
        title="Buro de clientes"
        subtitle1="Pasión por el transporte"
        subtitle2="Excelencia en el servicio"
      />
      
      <div className={`content ${isLoginModalOpen ? 'blur-background' : ''}`}>
        <PostComponent/>
      </div>
      {isLoginModalOpen && (
        <ModalComponent isOpen={isLoginModalOpen} onClose={handleCloseModal} />
      )}

      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button
          className="btn btn-primary btn-lg rounded-circle"
          type="button"
          style={{ width: '60px', height: '60px' }}
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
};

export default ForumScreen;
