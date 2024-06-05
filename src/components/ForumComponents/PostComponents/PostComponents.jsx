import React from 'react';
import blog from '../../../assets/img/blog.jpg';
import PostMenu from '../PostComponents/PostMenuComponent.jsx';

const Post = () => {
  return (
    <div className="pb-3">
      <div className="position-relative">
        <img className="img-fluid w-100" src={blog} alt="" />
        <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
          style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
          <h4 className="font-weight-bold mb-n1">01</h4>
          <small className="text-white text-uppercase">Jan</small>
        </div>
        <div className="position-absolute" style={{ top: '20px', right: '20px' }}>
       
        </div>
      </div>
      <div className="bg-secondary mb-3" style={{ padding: '30px' }}>
        <div className="d-flex mb-3">
          <div className="d-flex align-items-center ml-3">
            <i className="far fa-bookmark text-primary"></i>
            <a className="text-muted ml-1" href="">Zona Norte</a>
          </div>
        </div>
        <a>  Publicado por un Transportista</a>
        <h4 className="font-weight-bold mb-3">Logistica y Mas</h4>
        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>
      </div>
    </div>
  );
};

export default Post;
