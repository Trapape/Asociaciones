import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/Layouts/HeaderComponent';
import ModalComponent from '../components/ForumComponents/ModalComponent/ModalComponent.jsx';
import AllPostComponent from '../components/ForumComponents/PostComponents/AllPostComponents.jsx';
import CreatePostScreen from '../screens/CreatePostScreen.jsx'; 
import LoginComponent from '../components/ForumComponents/LoginComponents/LoginComponent.jsx';

const ForumScreen = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleOpenCreatePostModal = () => {
    setCreatePostModalOpen(true);
  };

  const handleCloseCreatePostModal = () => {
    setCreatePostModalOpen(false);
  };

  useEffect(() => {
    // Abre el modal cuando se carga el componente
    setLoginModalOpen(true);
  }, []);

  return (
    <div className="forum-container">
      <HeaderComponent
        title="Buro de clientes"
        subtitle1="Pasión por el transporte"
        subtitle2="Excelencia en el servicio"
      />
      
      <div className={`content ${isLoginModalOpen ? 'blur-background' : ''}`}>
        <AllPostComponent/>
      </div>

      {isLoginModalOpen && (
        <ModalComponent isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}>
          <LoginComponent />
        </ModalComponent>
      )}

      {isCreatePostModalOpen && (
        <ModalComponent isOpen={isCreatePostModalOpen} onClose={handleCloseCreatePostModal}>
          <CreatePostScreen />
        </ModalComponent>
      )}

      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button
          className="btn btn-primary btn-lg rounded-circle"
          type="button"
          style={{ width: '60px', height: '60px' }}>
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
};

export default ForumScreen;
