import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <div className="locations-container">
          <h2>Donde Estamos</h2>
    
          <div className="location">
            <p>Avenida de la Industria, 43-45 - 41007 Poligono de La Carretera Amarilla (Sevilla)</p>
            <a href="https://wa.me/34680558274" className="phone-link">
              <FaWhatsapp className="whatsapp-icon" />
              680 558 274
            </a>
            <a href="tel:+34954999480" className="phone-link">
              954 999 480
            </a>
          </div>
    
          <div className="location">
            <p>Calle Trafalgar, 1 41016 Torreblanca (Sevilla)</p>
            <a href="https://wa.me/34680558220" className="phone-link">
              <FaWhatsapp className="whatsapp-icon" />
              680 558 220
            </a>
          </div>
    
          <div className="location">
            <p>Calle Tarragona, 78 41006 Sevilla</p>
            <a href="https://wa.me/34620532374" className="phone-link">
              <FaWhatsapp className="whatsapp-icon" />
              620 532 374
            </a>
            <a href="tel:+34954999480" className="phone-link">
              954 999 480
            </a>
          </div>
    
          <div className="location">
            <p>Calle Medina y Galnares 75 (Barrio de San Jeronimo)- 41015 Sevilla</p>
            <a href="https://wa.me/34609292680" className="phone-link">
              <FaWhatsapp className="whatsapp-icon" />
              609 292 680
            </a>
          </div>
          
        </div>
      );
    }