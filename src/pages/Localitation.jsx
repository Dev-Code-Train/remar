import React, { useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Localitation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Localitation = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="locations-container">
      <h2>Tiendas</h2>

      <div className="location" data-aos="zoom-in">
        <p>Avenida de la Industria, 43-45 - 41007 Poligono de La Carretera Amarilla (Sevilla)</p>
        <a href="https://wa.me/34680558274" className="phone-link">
          <FaWhatsapp className="whatsapp-icon" />
          680 558 274
        </a>
        <a href="tel:+34954999480" className="phone-link">
          <FaPhoneAlt className="phone-icon" />
          954 999 480
        </a>
        <a href="https://www.google.es/maps/place/Av.+la+Industria,+43,+41007+Sevilla/@37.3888537,-5.955688,17z/data=!3m1!4b1!4m6!3m5!1s0xd126ec496e988cb:0x3bd545f371f6b8b3!8m2!3d37.3888495!4d-5.9531131!16s%2Fg%2F11bw44s34n?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="phone-link">
          <FaMapMarkerAlt className="map-icon" /> Ver en Google Maps
        </a>
      </div>

      <div className="location" data-aos="zoom-in">
        <p>Calle Trafalgar, 1 41016 Torreblanca (Sevilla)</p>
        <a href="https://wa.me/34680558220" className="phone-link">
          <FaWhatsapp className="whatsapp-icon" />
          680 558 220
        </a>
        <a href="https://www.google.es/maps/place/Rastro+Remar+en+torreblanca/@37.3853177,-5.9160371,19z/data=!4m15!1m8!3m7!1s0xd126f41f24ff239:0x2c4cbdd08c955a7a!2sC.+Trafalgar,+1,+41016+Sevilla!3b1!8m2!3d37.3851548!4d-5.91505!16s%2Fg%2F11c5pjbxjk!3m5!1s0xd126f41f14edd05:0x447d4110b492a56e!8m2!3d37.3853894!4d-5.9149289!16s%2Fg%2F11kbbsnfnp?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="phone-link">
          <FaMapMarkerAlt className="map-icon" /> Ver en Google Maps
        </a>
      </div>

      <div className="location" data-aos="zoom-in">
        <p>Calle Tarragona, 78 - 41006 Sevilla</p>
        <a href="https://wa.me/34620532374" className="phone-link">
          <FaWhatsapp className="whatsapp-icon" />
          620 532 374
        </a>
        <a href="tel:+34954999480" className="phone-link">
          <FaPhoneAlt className="phone-icon" />
          954 999 480
        </a>
        <a href="https://www.google.es/maps/place/C.+Tarragona,+80,+41006+Sevilla/@37.374791,-5.956614,19z/data=!4m6!3m5!1s0xd126eec2a302087:0x9146b1f87e0bb0b4!8m2!3d37.3746572!4d-5.9569707!16s%2Fg%2F11c5pzrpgq?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="phone-link">
          <FaMapMarkerAlt className="map-icon" /> Ver en Google Maps
        </a>
      </div>

      <div className="location" data-aos="zoom-in">
        <p>Calle Medina y Galnares 75 (Barrio de San Jeronimo)- 41015 Sevilla</p>
        <a href="https://wa.me/34609292680" className="phone-link">
          <FaWhatsapp className="whatsapp-icon" />
          609 292 680
        </a>
        <a href="https://www.google.es/maps/place/Rastro+Remar/@37.4239101,-5.9828591,20z/data=!4m15!1m8!3m7!1s0xd12696005931d2d:0x14ff427c56bac7bd!2sCalle+Medina+y+Galnares,+75,+Norte,+41015+Sevilla!3b1!8m2!3d37.4239341!4d-5.9827733!16s%2Fg%2F11cs78f2s4!3m5!1s0xd12696005903b79:0xb927bbc326fdbc71!8m2!3d37.4241048!4d-5.9826661!16s%2Fg%2F11sq13nkng?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="phone-link">
          <FaMapMarkerAlt className="map-icon" /> Ver en Google Maps
        </a>
      </div>

      <div className="location" data-aos="zoom-in">
        <p>Calle Ocho de Marzo, 41 - 41006 Sevilla</p>
        <a href="https://wa.me/34680558274" className="phone-link">
          <FaWhatsapp className="whatsapp-icon" />
          680 558 274
        </a>
        <a href="https://maps.app.goo.gl/UESdSQc1EobcnruZ9" target="_blank" rel="noopener noreferrer" className="phone-link">
          <FaMapMarkerAlt className="map-icon" /> Ver en Google Maps
        </a>
      </div>
    </div>
  );
};
