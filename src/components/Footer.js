import React from 'react'
import '../styles/Footer.css'
import Contador from './Contador'


const Footer = () => {
    return ( 
        <footer className="Footer" id="Tiempo">
            <Contador/>
                <div className="Dedicatoria">
                    
                        <h6>De David Arce con amor para Maura Estela</h6>
                        <h1>
                            I<strong>♥U</strong>
                        </h1>
                    
                </div>
                <h5 className="Mensaje">
                    Esta pagina web está hecha con todo el amor del mundo para mi princesa Maura,
                    es la persona que me motiva a seguir adelante todos los dias, y a la que adoro con todo mi corazón.
                </h5>
        </footer>

     );
}
 
export default Footer;