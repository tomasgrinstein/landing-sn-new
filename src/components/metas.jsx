import React from 'react';
import './Metas.css';

const Metas = () => {
  return (
    <section className="metas-seccion">
      <h1 className="metas-titulo">
        <span className="titulo-azul">¿Hacia dónde</span>
        <span className="titulo-rosa"> apuntamos?</span>
      </h1>

      <div className="modelo-caja">
        <h2 className="modelo-subtitulo">
          Modelo de traducción en tiempo real.
        </h2>
        <div className="pildoras-grid">
          <div className="pildora">Reuniones</div>
          <div className="pildora">Conferencias</div>
          <div className="pildora">Atención al cliente</div>
          <div className="pildora">Educación</div>
          <div className="pildora">Trabajo</div>
          <div className="pildora">Relaciones</div>
        </div>
      </div>
    </section>
  );
};

export default Metas;