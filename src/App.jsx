import React from 'react';
import Header from './components/Header';
import Apa from './components/apa';
import Hacer from './components/hacer';
import Reader from './components/reader';
import ParteAbajo from './components/parteabajo';
import ComoSeUsa from './components/ComoSeUsa';
import Metas from './components/Metas';
import Ayudanos from './components/ayudanos';

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
      <ParteAbajo />
    </>
  );
}

export default App;