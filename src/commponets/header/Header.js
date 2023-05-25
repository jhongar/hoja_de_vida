import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Perfil from './imagenes/imagen1.png'
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Row className="fondo1">
                <Col className="margen">
                    <img
                        className="imagen"
                        src={Perfil}
                        alt="fotoperfil"
                    />
                </Col>
                <Col >
                    <h1 className="titulo1">INFORMACION PERSONAL</h1>
                    <br/>
                    <h6>NOMBRE : </h6>
                    <p className="nombre">Jhon Jairo Garcia </p>
                    <h6>DIRECCION : </h6>
                    <p className="nombre">Barrio aranjuez </p>
                    <h6>TELEFONO : </h6>
                    <p className="nombre">1234567890 </p>
                </Col>
                <Col>
                    <h6 className="descripcion"></h6>
                        <h6>FECHA DE NACIMIENTO :</h6>   
                        <p >02/06/1994 </p>
                    <h6>CORREO ELECTRONICO : </h6>
                        <p>qwert@qwert.com</p>

                </Col>
            </Row>
        </Container>
    )
}

export default Header