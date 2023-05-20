import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './work _experience.css';


const Work_experience = () => {
    return (
        <Container>
            <Row >
                <Col className="margen2">
                    <h1 className="esperiencia">
                        PERFIL:
                    </h1>
                    <ul>Soy un persona con grande habilidades de aprendizaje, con capacidad de liderazgo,
                        con buen comprtamiento laboral. que cuentas con habilidades blandaas como lo son
                        buena amistad, trabajo grupal, con buen liderazgo y autocontrol.
                    </ul>
                    <br/>
                </Col>
                <Col>
                <h6>APTITUDES PERSONALES: </h6>
                    <ul>
                        <li>
                            Facil aprendizaje.
                        </li>
                        <li>
                            Buena aceptacion al cambio.
                        </li>
                        <li>
                            Exelente trabajo en grupo.
                        </li>
                        <li>
                            Buena comunicacion.
                        </li>
                        <li>
                            Persona con buena confiabilidad.
                        </li>
                        <li>
                            Trabajardor, entrega completa
                        </li>
                    </ul>
                </Col>
                <Col>
                <h6>APTITUDES LABORALES: </h6>
                    <ul>
                        <li>
                           
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>

                </Col>
            </Row>
        </Container>
    )
}

export default Work_experience;