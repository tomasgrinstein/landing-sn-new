import './apa.css';

const Apa = () => {
  return (
    <section className="apa-hero">
      <div className="apa-container">
        <h1 className="apa-title">
          Tu traductor de lengua de señas gratuito{" "}
          <span className="apa-highlight">impulsado por IA.</span>
        </h1>
        <p className="apa-subtitle">
          SignAI derriba las barreras de comunicación, traduciendo videos de
          lengua de señas a texto y audio, y ayudando a fomentar el aprendizaje
          del dialecto.
        </p>
        <button className="apa-button">
          Explorar más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="apa-button-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* <button className="apa-button btn-probar-ahora">
        Probar ahora
      </button> */}
    </section>
  );
};

export default Apa;