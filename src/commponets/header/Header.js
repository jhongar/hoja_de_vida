import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Perfil from './imagenes/imagen1.png'
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Row className="margen">
                <Col xs={12} md={6}>
                    <img
                        className="imagen"
                        src={Perfil}
                        alt="fotoperfil"
                    />
                </Col>
                <Col xs={12} md={6}>
                    <h1 className="titulo1">INFORMACION PERSONAL</h1>
                    <br/>
                    <h6>NOMBRE</h6>
                    <p className="nombre">Jhon Jairo Garcia </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Header