import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/Contenido.css'
import Fade from 'react-reveal/Fade';


const Contenido = () => {
    return ( 
        <Container fluid>
            <Row className="Contenido">
                <Col md={6} className="Texto">
                    <div>
                        <Fade left>
                            <h1>Te amo mi vida</h1>
                            <p>Hola amor, solo quiero decirte todo lo que amo y te adoro.
                                Nunca pensé que podría existir una niña tan perfecta, lo 
                                eres todo para mí, princesa.</p>
                            <p>Te lo juro, eres el amor de mi vida, te agradezco todo lo que
                                 haces por mí, por aguantarme y apoyarme, Te amo mi amor.</p>
                        </Fade>
                    </div>
                </Col>
                <Col md={6} className="Imagen"></Col>
            </Row>
        </Container>
     );
}
 
export default Contenido;