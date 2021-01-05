import React, {Fragment} from 'react';
import Masonry from "react-responsive-masonry";
import Imagenes from './imagenes';
import '../styles/Galeria.css'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const Galeria = () => {

    return ( 
        <Fragment>
            <div  className="ContenedorGaleria" id="Fotos">
                <Zoom>
                    <h1>Momentos felices</h1> 
                </Zoom>
                
                <Masonry columnsCount={6} gutter="10px" >
                    {Imagenes.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            className="Img"
                        />
                    ))}
                </Masonry>
            </div>

        </Fragment>
     );
}
 
export default Galeria;