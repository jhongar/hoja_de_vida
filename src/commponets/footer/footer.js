import React from "react";
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Footer = () => {
    return (
        <Container>
      <Row>
        <Col className="margen1">
        <h6>REFERENCIAS PERSONALES</h6>
        <ol>
          <li>GLADIS ELENA GARCIA</li>
          <ul> <li>TEL: 123456789090</li>  </ul>
          <li>DORA NELSY GARCIA</li>
          <ul> <li>TEL: 123456789090</li>  </ul>
          <li>MARIA SONIA GIRALDO</li>
          <ul> <li>TEL: 123456789090</li>  </ul>
        </ol>
        </Col>
        <Col className="margen3">
        <h6>REFRENCIAS LABORALES</h6>
        <ol>
          <li>JHON DEIBY MARIN</li>
          <ul><li type="square">TEL: 0978793264897</li></ul> 
          <li>PATRICIA HERNANDEZ</li>
          <ul><li type="square">TEL: 0978793264897</li></ul> 
          <li>JHON JAIRO GARCIA</li>
          <ul><li type="square">TEL: 0978793264897</li></ul> 
        </ol>

        </Col>
        <Col className="margen5">
        <h6>FORMACION ACADEMICA</h6>
          <dl>
            <dt>TECNICO EN SISTEMAS</dt>
            <dd> Colegio fe y alegria el paraiso</dd>
          </dl>
          <dl>
            <dt>TECNOLOGO EN SISTEMAS CON ENFASIS EN CABLEADO ESTRUCTURADO</dt>
            <dd> Sena regional caldas</dd>
          </dl>
          <dl>
            <dt>INGENIERO EN SISTEMAS Y TELECOMUNICACIONES</dt>
            <dd>Actualemeten cursando 9 semestre</dd>
          </dl>
        </Col>
      </Row>
      <Row>
        
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    )
}

export default Footer;