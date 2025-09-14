import React from 'react';
import './Header.css';
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="SignAI Logo" />
        </div>

        {/* Navegación */}
        <nav className="nav">
          <a href="#">¿Qué hacemos?</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Ayúdanos</a>
        </nav>

        {/* Botón */}
        <button className="btn-unete">Ayudanos</button>
      </div>
    </header>
  );
};

export default Header;
