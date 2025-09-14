

import React from 'react';

const featuresData = [
  {
    title: 'Traducción',
    description: 'Traduce la lengua de señas a voz y texto para una comunicación bidireccional, rompiendo barreras en la comunicación diaria.'
  },
  {
    title: 'Aprendizaje',
    description: 'Explora y aprende lengua de señas de una manera interactiva y divertida con ejemplos prácticos y lecciones personalizadas.'
  }
];

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


const Info = () => {
  return (
    <section id="what-we-do" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">¿Qué hacemos?</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Info;