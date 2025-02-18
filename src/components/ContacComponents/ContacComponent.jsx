import React, { useState } from 'react';
import axios from 'axios';

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ success: false, error: false, message: '' });

        try {
            const response = await axios.post('http://44.202.165.45:1701/email-contact', formData);
            setFormStatus({ success: true, error: false, message: '¡Mensaje enviado exitosamente!' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setFormStatus({ success: false, error: true, message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.' });
        }
    };

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pb-4 pb-lg-0">
                        <div className="bg-primary text-dark text-center p-4">
                            <h4 className="m-0">
                                <i className="fa fa-map-marker-alt text-white mr-2"></i>
                                Av. Ricardo, Col. Zaragoza, 91910 Veracruz, Ver.
                            </h4>
                        </div>
                        <iframe
                            style={{ width: '100%', height: '470px', border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4388356537515!2d-96.1245506240622!3d19.17602604882335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3413966b7c705%3A0x92452f3538f71cf7!2sTrapape%20S.A.P.I%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1703202316170!5m2!1ses-419!2smx"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                    <div className="col-lg-7">
                        <h6 className="text-primary text-uppercase font-weight-bold">Contáctanos</h6>
                        <h1 className="mb-4">Contacto para Cualquier Consulta</h1>
                        <div className="contact-form bg-secondary" style={{ padding: '30px' }}>
                            {formStatus.message && (
                                <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'}`}>
                                    {formStatus.message}
                                </div>
                            )}
                            <form id="contactForm" onSubmit={handleSubmit} noValidate>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control border-0 p-4"
                                        id="name"
                                        placeholder="Tu Nombre"
                                        required="required"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="email"
                                        className="form-control border-0 p-4"
                                        id="email"
                                        placeholder="Tu Correo Electrónico"
                                        required="required"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control border-0 p-4"
                                        id="subject"
                                        placeholder="Asunto"
                                        required="required"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea
                                        className="form-control border-0 py-3 px-4"
                                        rows="3"
                                        id="message"
                                        placeholder="Mensaje"
                                        required="required"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-3 px-4" type="submit">
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
