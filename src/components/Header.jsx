import React, { useEffect, useState } from 'react';
import Logo from '../assets/LogoRemar.jpeg';
import Slim from '../assets/SlimLogo.jpg';
import '../styles/Header.css';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${isScrolled ? 'shrunk' : ''}`} aria-label="Primary Navigation">
      <img className='logo' src={Logo} alt="Business Logo" />
      <img className={`slim-logo ${isScrolled ? 'hidden' : ''}`} src={Slim} alt="Slim Logo" />
      <h1 className='header-title'>Outlet Remar Sevilla</h1>
      <nav className='selection'>
        <Link to="Home" smooth={true} duration={500} className='header-link'>
          Inicio
        </Link>
        <Link to="Meet" smooth={true} duration={500} className='header-link'>
          Conócenos
        </Link>
        <Link to="Products" smooth={true} duration={500} className='header-link'>
          Productos
        </Link>
        <Link to="Localitation" smooth={true} duration={500} className='header-link'>
          Tiendas
        </Link>
      </nav>
    </header>
  );
};
