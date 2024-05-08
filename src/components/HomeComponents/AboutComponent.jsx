import React from 'react';
import imagen from '../../assets/img/about.jpg';

const AboutComponent = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
          <img className="img-fluid w-100" src={imagen} alt="Sobre Asociación" />
            <div className="bg-primary text-dark text-center p-4">
              <h3 className="m-0">Más de 25 Años de Experiencia</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">Sobre Nosotros</h6>
            <h1 className="mb-4">La Asociación de Transportistas A.T.</h1>
            <p className="mb-4">Es una asociación que representa los intereses de los trabajadores del transporte en México. Esta organización desempeña un papel crucial en el ámbito del transporte al abogar por los derechos y el bienestar de los transportistas, así como al tratar de influir en la política y la regulación relacionadas con la industria del transporte en el país.</p>
            <div className="d-flex align-items-center pt-2">
              <button type="button" className="btn-play" data-toggle="modal"
                data-src="https://www.youtube.com/watch?v=WUXWWTl8fjI" data-target="#videoModal">
                <span></span>
              </button>
              <h5 className="font-weight-bold m-0 ml-4">Ver Video</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
