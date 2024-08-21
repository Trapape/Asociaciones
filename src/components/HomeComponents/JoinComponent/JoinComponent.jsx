import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { db } from '../../../../backend/firebaseconfig';
import { collection, getDocs } from "firebase/firestore";

const JoinComponent = () => {
    const [formState, setFormState] = useState({
        nombre: '',
        cargo: '',
        asociacion: '',
        telefono: '',
        email: '',
        ciudad: '',
        motivo: '',
        servicio: ''
    });

    const [asociaciones, setAsociaciones] = useState([]);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const fetchAsociaciones = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Asociaciones"));
                const asociacionesList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAsociaciones(asociacionesList);
            } catch (error) {
                console.error("Error al obtener las asociaciones:", error);
            }
        };

        fetchAsociaciones();
    }, []);

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://44.202.165.45:1701/send-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitStatus('error');
        }

        setFormState({
            nombre: '',
            cargo: '',
            asociacion: '',
            telefono: '',
            email: '',
            ciudad: '',
            motivo: '',
            servicio: ''
        });
    };

    return (
        <div className="container-fluid bg-secondary my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 py-5 py-lg-0">
                        <h6 className="text-primary text-uppercase font-weight-bold">Somos una gran organización</h6>
                        <h1 className="mb-4">Únete</h1>
                        <p className="mb-4">Asociación se destaca por su amplia red de delegados y afiliados a lo largo de México, asegurando representación y apoyo efectivo para los transportistas. La confianza que los clientes depositan en Asociación subraya su compromiso y reputación en el sector del transporte.</p>
                        <div className="row">
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                                <h6 className="font-weight-bold mb-4">Número de delegados</h6>
                            </div>
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                                <h6 className="font-weight-bold mb-4">Clientes Satisfechos</h6>
                            </div>
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                                <h6 className="font-weight-bold mb-4">Número de afiliados</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary py-5 px-4 px-sm-5">
                            <form className="py-5" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="nombre" className="form-control border-0 p-4" placeholder="Nombre del Interesado" value={formState.nombre} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="cargo" className="form-control border-0 p-4" placeholder="Cargo o Puesto de la Persona" value={formState.cargo} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <select name="asociacion" className="form-control border-0 p-4" value={formState.asociacion} onChange={handleInputChange} required style={{ color: formState.asociacion === '' ? '#6c757d' : '#000' }}>
                                        <option value="" disabled style={{ color: '#6c757d' }}>Selecciona una Asociación</option>
                                        {asociaciones.map(asociacion => (
                                            <option key={asociacion.id} value={asociacion.nombre}>{asociacion.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="telefono" className="form-control border-0 p-4" placeholder="Teléfono" value={formState.telefono} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control border-0 p-4" placeholder="Correo Electrónico" value={formState.email} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="ciudad" className="form-control border-0 p-4" placeholder="Ciudad que Desea Localizar" value={formState.ciudad} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <textarea name="motivo" className="form-control border-0 p-4" placeholder="Motivo" value={formState.motivo} onChange={handleInputChange} required></textarea>
                                </div>
                                <div className="form-group">
                                    <select name="servicio" className="custom-select border-0 px-4" style={{ height: '47px', color: formState.servicio === '' ? '#6c757d' : '#000' }} value={formState.servicio} onChange={handleInputChange}>
                                        <option value="" disabled style={{ color: '#6c757d' }}>Selecciona un Servicio</option>
                                        <option value="Delegado">Delegado</option>
                                        <option value="Cliente">Cliente</option>
                                        <option value="Afiliado">Afiliado (Hombre Camión)</option>
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
            <Alert show={submitStatus === 'success'} variant="success" className="floating-alert">
                El formulario se envió exitosamente.
            </Alert>
            <Alert show={submitStatus === 'error'} variant="danger" className="floating-alert">
                Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.
            </Alert>
        </div>
    );
};

export default JoinComponent;
