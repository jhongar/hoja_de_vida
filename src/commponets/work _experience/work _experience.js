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
                        con buen comprtamiento laboral. que cuentas con habilidades blandas como lo son
                        buena amistad, trabajo grupal, buena comunicacion y trabajo bajo presion.
                    </ul>
                    <br/>
                </Col>
                <Col>
                <h6 className="tipoletra">APTITUDES PERSONALES: </h6>
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
                <h6 className="tipoletra">APTITUDES LABORALES: </h6>
                    <ul>
                        <li>
                            Conocimiento electroco baja tension.
                        </li>
                        <li>
                            Cableado estructurado.
                        </li>
                        <li>
                            Fusion de fibra optica.
                        </li>
                        <li>
                            Buena lideracion de proyecto de instalacion.
                        </li>
                        <li>
                            Implementacion de conductividad.
                        </li>
                        <li>
                            Configuracion de caramar de seguridad.
                        </li>
                    </ul>

                </Col>
            </Row>
        </Container>
    )
}

export default Work_experience;