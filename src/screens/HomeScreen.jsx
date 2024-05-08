import React from 'react';
import Header from '../components/Layouts/HeaderComponent.jsx';
import Services from '../components/ServiceComponents/ServicesComponent.jsx';
import imgService from '../assets/img/imgServiceTrucks.jpg';

const HomeScreen = () => {
    const serviciosData = {
        title: "Nuestros Servicios",
        subtitle: "Los Mejores Servicios Logísticos",
        imageSrc: imgService,
        services: [
            { title: "Carga General", description: "Transporte versátil para una amplia gama de mercancías." },
            { title: "Refrigerado", description: "Soluciones especializadas para productos perecederos." },
            { title: "Carga Pesada", description: "Capacidad para manejar artículos de gran tamaño y peso." },
            { title: "Materiales Peligrosos", description: "Transporte seguro y regulado para cargas delicadas." },
            { title: "Express", description: "Servicios rápidos para entregas urgentes." }
        ]
    };

    return (
        <div>
            <Header
                title="Bienvenidos a Asociación"
                subtitle1="Pasión por el transporte"
                subtitle2="Excelencia en el servicio"
            />
            <Services {...serviciosData} />
        </div>
    );
}

export default HomeScreen;
