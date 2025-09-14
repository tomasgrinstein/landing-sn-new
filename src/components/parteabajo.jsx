// src/components/parteabajo.jsx

import React from 'react';

// Aquí renombramos el componente de 'Footer' a 'ParteAbajo'
const ParteAbajo = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Contenido del footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo y nombre de la empresa */}
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-orange-500">SignAI</span>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-lg mb-2">Secciones</h4>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">¿Qué hacemos?</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre nosotros</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Ayúdanos</a>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-lg mb-2">Contacto</h4>
              <a href="mailto:info@signai.com" className="text-gray-400 hover:text-white transition-colors duration-300">info@signai.com</a>
              <p className="text-gray-400">© 2024 SignAI. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Y aquí lo exportamos con el nuevo nombre
export default ParteAbajo;