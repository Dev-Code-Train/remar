import React from 'react';
import Logo from '../assets/LogoRemar.jpeg';
import '../styles/Header.css';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <>
      <header className='Header'>
        <img className='logo' src={Logo} alt="Business Logo" />
        <div className='selection'>
          <Link to="Home" smooth={true} duration={500} className='header-link'>
            Inicio
          </Link>
          <Link to="Meet" smooth={true} duration={500} className='header-link'>
            Conócenos
          </Link>
          <Link to="Products" smooth={true} duration={500} className='header-link'>
            Productos y Servicios
          </Link>
          <Link to="Localitation" smooth={true} duration={500} className='header-link'>
            Donde estamos
          </Link>
        </div>
      </header>
    </>
  );
};
