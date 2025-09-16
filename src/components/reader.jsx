// src/components/reader.jsx
import React from 'react';
import './reader.css'

const problemData = [
  {
    title: 'Barreras de comunicación',
    description: 'Buscamos derribar las barreras de comunicación que sufren las personas sordas en su día a día.'
  },
  {
    title: 'Falta de fomento',
    description: 'Fomentamos el aprendizaje de LSA, para que la población mundial se vuelva más inclusiva.'
  }
];

// Componente para una tarjeta individual.
const ProblemCard = ({ title, description }) => {
  return (
    <div className="problem-card">
      <div className="problem-card__circle"></div>
      <h3 className="problem-card__title">{title}</h3>
      <p className="problem-card__description">{description}</p>
    </div>
  );
};

// Componente principal de la sección.
const Reader = () => {
  return (
    <section id="what-we-solve" className="reader">
      <div className="container">
        <h2 className="reader__title">¿Qué venimos a resolver?</h2>
        <div className="reader__cards-container">
          {problemData.map((problem, index) => (
            <ProblemCard key={index} title={problem.title} description={problem.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reader;