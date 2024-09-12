import React from 'react';
import '../styles/Home.css';
import Logo from '../assets/LogoRemar.jpeg';
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
});

export const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-content">
        <img src={Logo} alt="Logo de Oulet Remar Sevilla" className="home-logo" data-aos="fade-down" />
        <h1 className="home-title" data-aos="fade-up" data-aos-duration="1200">
          Oulet Remar Sevilla
        </h1>
        <p className="home-description" data-aos="fade-up" data-aos-delay="300">
          Descubre la mejor selección de muebles nuevos y de segunda mano. ¡Visítanos en nuestras tiendas y encuentra el mueble perfecto para tu hogar!
        </p>
      </div>
    </section>
  );
}
