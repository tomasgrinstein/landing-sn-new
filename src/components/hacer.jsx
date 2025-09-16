import React from 'react';
import './hacer.css'; // Importamos el archivo CSS

// Icono de "Play" para las tarjetas
const PlayIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w.org/2000/svg"
  >
    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
  </svg>
);

// Datos actualizados para que coincidan con la imagen
const problemData = [
  {
    title: 'Traducción',
    description: 'SignAI traduce videos de lengua de señas de manera asincrónica, para que las personas que no sepan LSA puedan entender.'
  },
  {
    title: 'Aprendizaje',
    description: 'SignAI cuenta con juegos para el aprendizaje de lengua de señas.'
  }
];

// Componente para una tarjeta individual, ahora con icono.
const ProblemCard = ({ title, description }) => {
  return (
    <div className="hacemos-card">
      <div className="card-header">
        <div className="card-icon-container">
          <PlayIcon />
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
};

// Componente principal de la sección.
const Hacer = () => {
  return (
    <section id="que-hacemos" className="que-hacemos-section">
      <div className="container">
        <h2 className="section-title">¿Qué hacemos?</h2>
        <div className="cards-container">
          {problemData.map((problem, index) => (
            <ProblemCard key={index} title={problem.title} description={problem.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hacer;
