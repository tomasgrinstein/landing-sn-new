import React from 'react';
import Header from './components/Header';
import Apa from './components/apa';
import Hacer from './components/hacer';
import Reader from './components/reader';
import ParteAbajo from './components/parteabajo';
import ComoSeUsa from './components/ComoSeUsa';
import Metas from './components/Metas'; // <-- 1. Importar el componente Metas

function App() {
  return (
    <>
      <Header />
      <Apa />
      <Hacer />
      <Reader />
      <ComoSeUsa/>
      <Metas /> {/* <-- 2. Agregar el componente aquí */}
      <ParteAbajo />
    </>
  );
}

export default App;