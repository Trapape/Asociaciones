import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB_jK3ZxRH6P76UyccvJUmEpG7lQS7g5uI",
  authDomain: "trunck-54a71.firebaseapp.com",
  projectId: "trunck-54a71",
  storageBucket: "trunck-54a71.appspot.com",
  messagingSenderId: "359961932438",
  appId: "1:359961932438:web:49babad0b9935d776d88b7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const AddPostScreen = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir la imagen a Firebase Storage
    let imageUrl = null;
    if (image) {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${image.name}`);
      await imageRef.put(image);
      imageUrl = await imageRef.getDownloadURL();
    }

    // Crear un nuevo documento en la colección "publicaciones"
    await firebase.firestore().collection('publicaciones').add({
      title,
      body,
      imageUrl, // Agrega la URL de la imagen al documento
      // Otros campos aquí
    });

    onClose();
  };

  return (
    <div className="modal-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', position: 'relative', display: 'flex', flexDirection: 'column', maxWidth: '500px', width: '100%' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
        <h2 style={{ color: '#333333', marginBottom: '20px' }}>Agregar Publicación</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ color: '#333333' }}>Título:</label>
            <input type="text" value={title} onChange={handleTitleChange} required />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ color: '#333333' }}>Cuerpo:</label>
            <textarea value={body} onChange={handleBodyChange} required></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ color: '#333333' }}>Imagen:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <button type="submit" style={{ backgroundColor: '#347AB6', borderRadius: '5px', padding: '10px 20px', color: '#ffffff', border: 'none', cursor: 'pointer' }}>Publicar</button>
        </form>
      </div>
    </div>
  );
};

export default AddPostScreen;
