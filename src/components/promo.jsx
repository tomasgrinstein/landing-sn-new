import React from 'react';
import './Promo.css';
import promoImage from './mujersena.png'; 

const Promo = () => {
  return (
    <section className="promo-seccion">
      <div className="promo-container">
        <div className="promo-col-imagen">
          <img src={promoImage} alt="Mujer sonriendo haciendo una seña" />
        </div>
        <div className="promo-col-logo">
          <h2 className="promo-logo-grande">SignAI</h2>
        </div>
      </div>
    </section>
  );
};

export default Promo;