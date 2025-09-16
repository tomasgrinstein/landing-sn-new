import React from 'react';
import './ComoSeUsa.css';

// --- Iconos SVG ---
const CameraIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const UploadCloudIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 16l-4-4-4 4M12 12v9" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <path d="M16 16l-4-4-4 4" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Step = ({ icon, text }) => {
  return (
    <div className="step-container">
      <div className="circle">
        {icon}
      </div>
      <p className="step-text">{text}</p>
    </div>
  );
};

export default function ComoSeUsa() {
  const stepsData = [
    { icon: <CameraIcon />, text: 'Grabar el video con la cámara de tu celular.' },
    { icon: <UploadCloudIcon />, text: 'Subir el video a la aplicación.' },
    { icon: <CheckIcon />, text: 'Una vez obtenida la respuesta, ¡leerla o escucharla!' },
  ];

  return (
    <section className="como-se-usa-container">
      <h2 className="como-se-usa-title">¿Cómo se usa?</h2>
      <div className="steps-wrapper">
        {stepsData.map((step, index) => (
          <Step key={index} icon={step.icon} text={step.text} />
        ))}
      </div>
    </section>
  );
}

