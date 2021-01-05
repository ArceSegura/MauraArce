import React from 'react'
import '../styles/Header.css'
import Jump from 'react-reveal/Jump';

const Header = () => {
    return ( 
        <header className="Header">
            <div className="ContenedorHeader">
                <div className="ContenedorLogo">
                    <Jump>
                    <a className="Logo" href="/">M<span>&</span>A</a>
                    </Jump>
                </div>
                <div className="ContenedorLogin">
                    <Jump>
                        <a href="#Fotos" className="button">Fotos</a>
                        <a href="#Tiempo" className="button">Tiempo</a>
                    </Jump>
                </div>
            </div>
        </header>
     );
}
 
export default Header;