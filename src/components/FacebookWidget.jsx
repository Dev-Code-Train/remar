import React, { useState } from 'react';
import { FaFacebook, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import '../styles/FacebookWidget.css';

export const FacebookWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const pages = [
    { url: 'https://www.facebook.com/profile.php?id=100063920150562', label: 'Carretera Amarilla' },
    { url: 'https://www.facebook.com/profile.php?id=100076178700176', label: 'San Jeronimo' },
    { url: 'https://www.facebook.com/profile.php?id=61562854503676', label: 'Torreblanca' },
    { url: 'https://www.facebook.com/profile.php?id=100064125575567', label: 'Calle Tarragona' },
    { url: 'https://www.facebook.com/profile.php?id=61566935723514&mibextid=ZbWKwL', label: 'Cerro' },
  ];

  return (
    <div className="facebook-widget">
      <div className="facebook-toggle" onClick={toggleWidget}>
        <FaFacebook className="facebook-icon" />
        {isOpen ? <FaChevronUp className="facebook-row"/> : <FaChevronDown className="facebook-row"/>}
      </div>
      {isOpen && (
        <div className="facebook-pages">
          {pages.map((page, index) => (
            <a
              key={index}
              href={page.url}
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-page"
            >
              {page.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
