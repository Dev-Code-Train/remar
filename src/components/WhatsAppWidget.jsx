import React, { useState } from 'react';
import { FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import '../styles/WhatsAppWidget.css';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const contacts = [
    { number: '34680558274', label: 'Carretera Amarilla' },
    { number: '34609292680', label: 'San Jeronimo' },
    { number: '34680558220', label: 'Torreblanca' },
    { number: '34620532374', label: 'Calle Tarragona' },
  ];

  return (
    <div className="whatsapp-widget">
      <div className="whatsapp-toggle" onClick={toggleWidget}>
        <FaWhatsapp className="whatsapp-icon" />
        {isOpen ? <FaChevronUp className="whatsapp-row"/> : <FaChevronDown className="whatsapp-row"/>}
      </div>
      {isOpen && (
        <div className="whatsapp-contacts">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={`https://wa.me/${contact.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-contact"
            >
              {contact.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

