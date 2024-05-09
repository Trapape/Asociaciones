import React from 'react';
import HeaderComponent from '../components/Layouts/HeaderComponent';
import AboutComponent from '../components/Layouts/AboutComponent/AboutComponent';
import imgAbout from '../assets/img/about.jpg';

const AboutScreen = () => {
  return (
    <div>
        <HeaderComponent
        title="Quienes Somos"
        subtitle1="Pasión por el transporte"
        subtitle2="Excelencia en el servicio"
      />
        <AboutComponent
        imageSrc = {imgAbout}
        title="Proveedor de Servicios Logísticos Confiables y Rápidos"
        subtitle="Sobre Nosotros"
        description="[Nombre de la Asociación] se destaca por más de 25 años de experiencia en el sector logístico. Nuestra misión es ofrecer soluciones de transporte innovadoras y eficientes, comprometiéndonos con la excelencia y la sostenibilidad. La visión de nuestra asociación es ser líderes en logística, ampliando nuestras fronteras y estableciendo estándares de alta calidad en el servicio. Valoramos la seguridad, la confiabilidad y la atención personalizada a cada uno de nuestros clientes."
        // videoSrc="https://www.youtube.com/watch?v=WUXWWTl8fjI" // Si tienes un video, puedes incluir la URL aquí
        />
      
    </div>
  );
};

export default AboutScreen;
