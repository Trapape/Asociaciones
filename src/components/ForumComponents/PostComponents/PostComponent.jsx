import React from 'react';

import img from '../../../assets/img/user.jpg'
import blog from '../../../assets/img/blog.jpg'
import { FaAngleUp } from 'react-icons/fa';

const PostMenu = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-link dropdown-toggle" type="button" id="postMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="postMenuButton">
        <a className="dropdown-item" href="#">Editar</a>
        <a className="dropdown-item" href="#">Eliminar</a>
        <a className="dropdown-item" href="#">Descargar Imagen</a>
      </div>
    </div>
  );
};

const PostComponent = () => {
  return (
    <div className="container py-5">
    <div className="row">
      <div className="col-lg-8">
      <h2 className="font-weight-bold mb-3">
                <div style={{ color: '#FF4600' }}>
                  Destacados 
                </div>
              </h2>
        <div className="pb-3">
          <div className="position-relative">
            <img className="img-fluid w-100" src={blog} alt="" />
            <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
              style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
            <div className="position-absolute" style={{ top: '20px', right: '20px' }}>
                <PostMenu />
              </div>
          </div>
          <div className="bg-secondary mb-3" style={{ padding: '30px' }}>
            <div className="d-flex mb-3">
            <div className="d-flex align-items-center ml-1">
                        <i className="far fa-bookmark text-primary"></i>
                        <a className="text-muted ml-2" href="">Zona Norte</a>
                    </div>
            </div>
            <h4 className="font-weight-bold mb-3">Logistica y Mas</h4>
            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4 mt-5 mt-lg-0">
        <div className="mb-5">
          <div className="bg-secondary" style={{ padding: '30px' }}>
            <div className="input-group">
              <input type="text" className="form-control border-0 p-4" placeholder="" />
              <div className="input-group-append">
                <span className="input-group-text bg-primary border-primary text-white">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h3 className="mb-4">Categorias</h3>
          <div className="bg-secondary" style={{ padding: '30px' }}>
            <ul className="list-inline m-0">
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Quejas
                </a>
                <span className="badge badge-secondary badge-pill">150</span>
              </li>
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Clientes
                </a>
                <span className="badge badge-secondary badge-pill">131</span>
              </li>
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Transportistas
                </a>
                <span className="badge badge-secondary badge-pill">78</span>
              </li>
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Quejas
                </a>
                <span className="badge badge-secondary badge-pill">56</span>
              </li>
              <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Zonas 
                </a>
                <span className="badge badge-secondary badge-pill">98</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Category End */}

        {/* Recent Post Start */}
        <div className="mb-5">
          <h3 className="mb-4">Post Recientes</h3>
          <div className="d-flex mb-3">
            <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
            <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
              Lorem ipsum dolor sit amet consec adipis elit
            </a>
          </div>
          <div className="d-flex mb-3">
            <img className="img-fluid" src="img/blog-2.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
            <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
              Lorem ipsum dolor sit amet consec adipis elit
            </a>
          </div>
          <div className="d-flex mb-3">
            <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
            <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
              Lorem ipsum dolor sit amet consec adipis elit
            </a>
          </div>
          <div className="d-flex mb-3">
            <img className="img-fluid" src="img/blog-2.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
            <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
              Lorem ipsum dolor sit amet consec adipis elit
            </a>
          </div>
          <div className="d-flex mb-3">
            <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
            <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
              Lorem ipsum dolor sit amet consec adipis elit
            </a>
          </div>
        </div>
        {/* Recent Post End */}
        
        {/* Tag Cloud Start */}
        <div className="mb-5">
          <h3 className="mb-4">Etiquetas </h3>
          <div className="d-flex flex-wrap m-n1">
            <a href="" className="btn btn-secondary m-1">Zona Norte</a>
            <a href="" className="btn btn-secondary m-1">Zona Sur</a>
            <a href="" className="btn btn-secondary m-1">Zona Sureste</a>
            <a href="" className="btn btn-secondary m-1">Zona Bajio</a>
            <a href="" className="btn btn-secondary m-1">Zona Centro</a>
            <a href="" className="btn btn-secondary m-1">Zona Occidental</a>
          </div>
        </div>
        {/* Tag Cloud End */}
      </div>
    </div>
  </div>
);
};
export default PostComponent;
