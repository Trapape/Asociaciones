import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../backend/firebaseconfig';
import DeletePostModal from './DeletePostModal/DeletePostModal';
import EditPostModal from './EditPostModal/EditPostModal';
import { Dropdown } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


const Post = ({ id, title, body, imageUrl, createdAt, author, zone, currentUser, onDelete, onEdit }) => {
  const [showFullBody, setShowFullBody] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);
  const [commentToEdit, setCommentToEdit] = useState(null);
  const [showEditCommentModal, setShowEditCommentModal] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(collection(db, 'posts', id, 'comments'));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    };

    fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    if (comment.trim()) {
      await addDoc(collection(db, 'posts', id, 'comments'), {
        text: comment,
        author: currentUser.email,
        createdAt: new Date(),
      });
      setComment('');
      setComments([...comments, { text: comment, author: currentUser.email, createdAt: new Date() }]);
    }
  };

  const handleEditComment = async () => {
    if (newCommentText.trim() && commentToEdit) {
      const commentRef = doc(db, 'posts', id, 'comments', commentToEdit.id);
      await updateDoc(commentRef, { text: newCommentText });
      setComments(comments.map(c => (c.id === commentToEdit.id ? { ...c, text: newCommentText } : c)));
      setNewCommentText('');
      setCommentToEdit(null);
      setShowEditCommentModal(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    await deleteDoc(doc(db, 'posts', id, 'comments', commentId));
    setComments(comments.filter(c => c.id !== commentId));
  };

  const date = new Date(createdAt.seconds * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  const isAuthor = currentUser && currentUser.email === author;

  const handleDownloadImage = async () => {
    if (imageUrl) {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = title || 'imagen'; // Usa un nombre por defecto si el título no está disponible
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url); // Limpia el objeto URL
      } catch (error) {
        console.error('Error al descargar la imagen:', error);
      }
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.href}/post/${id}`);
    alert('Enlace copiado al portapapeles');
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleEdit = () => {
    setPostToEdit({ id, title, body, imageUrl });
    setShowEditModal(true);
  };

  const toggleShowFullBody = () => {
    setShowFullBody(!showFullBody);
  };

  const maxBodyLength = 100;

  return (
    <div className="pb-3">
      {imageUrl && (
        <div className="position-relative">
          <img className="img-fluid w-100" src={imageUrl} alt={title} />
          <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
            style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
            <h4 className="font-weight-bold mb-n1">{day}</h4>
            <small className="text-white text-uppercase">{month}</small>
          </div>
        </div>
      )}
      <div className="bg-secondary mb-3" style={{ padding: '30px' }}>
        <div className="d-flex mb-3">
          {zone && (
            <div className="d-flex align-items-center ml-3">
              <i className="far fa-bookmark text-primary"></i>
              <a className="text-muted ml-2" href="#">{zone}</a>
            </div>
          )}
          <div className="ml-auto">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="menuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Opciones
              </button>
              <CSSTransition
                in={true}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <ul className="dropdown-menu dropdown-menu-up" aria-labelledby="menuButton">
                  {imageUrl && <li><button className="dropdown-item" onClick={handleDownloadImage}>Descargar Imagen</button></li>}
                  <li><button className="dropdown-item" onClick={handleShare}>Compartir</button></li>
                  {isAuthor && (
                    <>
                      <li><button className="dropdown-item" onClick={handleEdit}>Editar</button></li>
                      <li><button className="dropdown-item" onClick={handleDelete}>Eliminar</button></li>
                    </>
                  )}
                </ul>
              </CSSTransition>
            </div>
          </div>
        </div>
        <a>Publicado Anonimamente</a>
        <h4 className="font-weight-bold mb-3">{title}</h4>
        <p>
          {showFullBody ? body : `${body.substring(0, maxBodyLength)}...`}
          {body.length > maxBodyLength && (
            <button onClick={toggleShowFullBody} className="btn btn-link p-0 ml-2">
              {showFullBody ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
        <div className="mt-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="btn btn-primary mb-3"
            style={{ borderRadius: '20px', padding: '0.25rem 1rem' }}
          >
            {showComments ? 'Ocultar comentarios' : `Comentarios (${comments.length})`}
          </button>
          {showComments && (
            <div className="mb-3">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-light p-2 mb-2 rounded position-relative">
                  <p className="mb-0"><strong>{comment.author}</strong>: {comment.text}</p>
                  {currentUser.email === comment.author && (
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                      <Dropdown>
                        <Dropdown.Toggle variant="link" id={`dropdown-basic-${comment.id}`} className="text-dark">
                          <i className="fas fa-ellipsis-v"></i>
                        </Dropdown.Toggle>
                        <CSSTransition
                          in={true}
                          timeout={300}
                          classNames="fade"
                          unmountOnExit
                        >
                          <Dropdown.Menu className="dropdown-menu-up" style={{ zIndex: 1050 }}>
                            <Dropdown.Item onClick={() => {
                              setCommentToEdit(comment);
                              setNewCommentText(comment.text);
                              setShowEditCommentModal(true);
                            }}>
                              Editar
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteComment(comment.id)}>
                              Eliminar
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </CSSTransition>
                      </Dropdown>
                    </div>
                  )}
                </div>
              ))}
              {currentUser && (
                <>
                  <button
                    onClick={() => setShowCommentInput(!showCommentInput)}
                    className="btn btn-primary mb-3"
                    style={{ borderRadius: '20px', padding: '0.35rem 1rem', position: 'relative', float: 'right' }}
                  >
                    {showCommentInput ? 'Cancelar' : 'Agregar comentario'}
                  </button>
                  {showCommentInput && (
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control mr-2"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Escribe un comentario..."
                      />
                      <button
                        onClick={handleAddComment}
                        className="btn btn-primary"
                        style={{ borderRadius: '20px', padding: '0.20rem 1rem' }}
                      >
                        Comentar
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {showDeleteModal && (
        <DeletePostModal
          onClose={() => setShowDeleteModal(false)}
          onDelete={() => {
            onDelete(id);
            setShowDeleteModal(false);
          }}
        />
      )}
      {showEditModal && (
        <EditPostModal
          onClose={() => setShowEditModal(false)}
          post={postToEdit}
          onSave={(updatedPost) => {
            onEdit(id, updatedPost);
            setShowEditModal(false);
          }}
        />
      )}
      {showEditCommentModal && (
        <div className="modal show fade" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Comentario</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditCommentModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditCommentModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={handleEditComment}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
