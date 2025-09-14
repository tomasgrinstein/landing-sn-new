// src/components/reader.jsx
import React from 'react';

// Separamos los datos para mantener el código limpio y fácil de leer.
const problemData = [
  {
    title: 'Barreras de comunicación',
    description: 'La falta de herramientas de traducción dificulta la interacción de las personas con discapacidad auditiva con el mundo exterior.'
  },
  {
    title: 'Falta de fomento',
    description: 'La poca visibilidad de la lengua de señas limita su aprendizaje y uso, perpetuando las barreras existentes.'
  }
];

// Componente para una tarjeta individual.
const ProblemCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Componente principal de la sección.
const Reader = () => {
  return (
    <section id="what-we-solve" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">¿Qué venimos a resolver?</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {problemData.map((problem, index) => (
            <ProblemCard key={index} title={problem.title} description={problem.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reader;