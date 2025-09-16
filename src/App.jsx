import React from 'react';
import Header from './components/Header';
import Apa from './components/apa';
import Hacer from './components/hacer';
import Reader from './components/reader';
import ComoSeUsa from './components/ComoSeUsa';
import Metas from './components/Metas';
import Ayudanos from './components/ayudanos';
import Promo from './components/promo';   // <-- Importamos Promo
import Footer from './components/Footer'; // <-- Importamos Footer

function App() {
  return (
    <>
      <Header />
      <Apa />
      <Hacer />
      <Reader />
      <ComoSeUsa/>
      <Metas />
      <Ayudanos/>
      <Promo />    {/* <-- Agregamos Promo */}
      <Footer />   {/* <-- Agregamos Footer y reemplazamos a ParteAbajo */}
    </>
  );
}

export default App;