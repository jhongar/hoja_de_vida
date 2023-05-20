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
                        EXPERIENCIA LABORAL
                    </h1>
                    <br/>
                    <p>
                        descripcion de lo que hago en el trabajo
                    </p>
                    <br/>
                    <h6>CONOCIMIENTOS</h6>
                    <ul>
                        <li>
                            cableado estructurado
                        </li>
                        <li>
                            Fusion de fibra optica
                        </li>
                    </ul>

                </Col>
                <Col>2 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    )
}

export default Work_experience;