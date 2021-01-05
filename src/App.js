import React, {Fragment} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Galeria from './components/Galeria'
import Contenido from './components/Contenido'


function App() {

  return (
      <Fragment>
            <Header/>
            <Contenido/>
            <Galeria/>
            <Footer/>
      </Fragment>
  );
}

export default App;
