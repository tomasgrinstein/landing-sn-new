import React from 'react';
import './Ayudanos.css';

const Ayudanos = () => {
  return (
    <section className="ayudanos-section">
      <div className="ayudanos-content">
        <h2 className="ayudanos-title">¿Nos querés ayudar?</h2>
        <p className="ayudanos-description">
          Hoy en día, nuestra aplicación sigue en desarrollo. Por eso,
          necesitamos ayuda de voluntarios capacitados para completar el
          funcionamiento de la app. 
          <br />
          ¡Esperamos que puedas colaborar! 😉
        </p>
        <button className="ayudanos-button">
          <span role="img" aria-label="corazón" className="heart-icon">♥</span>
          Ser voluntario
        </button>
      </div>

      <div className="ayudanos-image-placeholder">
        <img src="/celular.png" alt="App en celular" />
      </div>
    </section>
  );
};

export default Ayudanos;