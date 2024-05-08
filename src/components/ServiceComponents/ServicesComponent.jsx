import React from 'react';

const ServicesComponent = ({ title, subtitle, imageSrc, services }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="text-center pb-2">
                    <h6 className="text-primary text-uppercase font-weight-bold">{title}</h6>
                    <h1 className="mb-4">{subtitle}</h1>
                </div>
                <div className="row pb-3">
                    <div className="col-lg-6 col-md-6 mb-5">
                        <img src={imageSrc} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}><strong>{service.title}:</strong> {service.description}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Agrega más columnas con contenido similar para otros servicios */}
                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;
