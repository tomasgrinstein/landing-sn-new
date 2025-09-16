import React from 'react';
import './Footer.css';
import logoBlanco from './logoblanco.png'; 
import logoAquila from './aquila.png'; // Importamos el logo de Aquila

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col about">
          <img src={logoBlanco} alt="SignAI Logo" className="footer-logo" />
          <p>Derribando barreras de comunicación para las personas sordas.</p>
          <div className="social-links">
            <a href="#">(in)</a>
            <a href="#">(ln)</a>
          </div>
        </div>

        <div className="footer-col links">
          <h4>Producto</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Ser voluntario</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div className="footer-col links">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Miembros</a></li>
            <li><a href="#">Owners</a></li>
            <li><a href="#">Invertir</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025 SignAI. Todos los derechos reservados.</p>
        <div className="powered-by">
          <p>powered by</p>
          <img src={logoAquila} alt="Aquila Logo" className="aquila-logo"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;