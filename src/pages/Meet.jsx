import React, { useEffect } from 'react';
import '../styles/Meet.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


export const Meet = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="meet-section">
      <h1 className="meet-title" data-aos="fade-up">Conoce Nuestra Tienda</h1>
      <div className="meet-content">
        <div className="meet-text" data-aos="fade-right">
          <p>Descubre la mejor selección de muebles nuevos y de segunda mano. ¡Visítanos en nuestras tiendas y encuentra el mueble perfecto para tu hogar!</p>
        </div>
        <div className="meet-text" data-aos="fade-left">
          <p>Muebles para todos los gustos y bolsillos. Desde piezas únicas de segunda mano hasta diseños modernos. ¡Ven a nuestras tiendas y déjate inspirar!</p>
        </div>
        <div className="meet-text" data-aos="fade-right">
          <p>Una experiencia de compra única te espera. Asesórate con nuestros expertos y encuentra los muebles ideales para ti. Disfruta de un ambiente acogedor en nuestras tiendas.</p>
        </div>
        <div className="meet-text" data-aos="fade-left">
          <p>¡Renueva tu hogar con nosotros! Muebles nuevos y de segunda mano a precios increíbles. ¡Te esperamos para hacer realidad tus ideas de decoración!</p>
        </div>
        <div className="meet-text" data-aos="fade-right">
          <p>¡Vive la experiencia de comprar muebles en persona! Descubre texturas, acabados y tamaños reales. Recibe asesoramiento personalizado y elige lo mejor para tu hogar.</p>
        </div>
        <div className="meet-text" data-aos="fade-left">
          <p>Además, disfruta de ofertas exclusivas en nuestra tienda. ¡Visítanos y llévate los mejores muebles para transformar tu hogar!</p>
        </div>
      </div>
    </section>
  );
};
