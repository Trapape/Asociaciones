import React from 'react';

const JoinComponent = () => {
    return (
        <div className="container-fluid bg-secondary my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 py-5 py-lg-0">
                        <h6 className="text-primary text-uppercase font-weight-bold">Somos una gran organización</h6>
                        <h1 className="mb-4">Unete</h1>
                        <p className="mb-4">Asociación se destaca por su amplia red de delegados y afiliados a lo largo de México, asegurando representación y apoyo efectivo para los transportistas. La confianza que los clientes depositan en Asociación subraya su compromiso y reputación en el sector del transporte.</p>
                        <div className="row">
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                                <h6 className="font-weight-bold mb-4">Numero de delegados</h6>
                            </div>
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                                <h6 className="font-weight-bold mb-4">Clientes Satisfechos</h6>
                            </div>
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                                <h6 className="font-weight-bold mb-4">Numero de afiliados</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary py-5 px-4 px-sm-5">
                            <form className="py-5">
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Nombre del Interesado" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Cargo o Puesto de la Persona" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Compañía" required />
                                </div>

                                <div className="form-group">
                                    <input type="tel" className="form-control border-0 p-4" placeholder="Teléfono" required />
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control border-0 p-4" placeholder="Correo Electrónico" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Ciudad que Desea Localizar" required />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control border-0 p-4" placeholder="Motivo" required></textarea>
                                </div>

                                <div className="form-group">
                                    <select className="custom-select border-0 px-4" style={{height: '47px'}}>
                                        <option selected>Selecciona un Servicio</option>
                                        <option value="1">Delegado</option>
                                        <option value="2">Cliente</option>
                                        <option value="3">Afiliado</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Enviar mi información</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinComponent;
