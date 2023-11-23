import { Col, Container, Row } from "react-bootstrap";
import ListaClienti from "./ListaClienti";

import CreateClienti from "./CreateClienti";

function Clienti() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={1}>Id</Col>
        <Col>Nome Cognome Contatto</Col>
        <Col xs={2}>Email Contatto</Col>
        <Col>Telefono Contatto</Col>
        <Col>Fatturato Annuale</Col>
        <Col>Via</Col>
        <Col></Col>
        <Col xs={2}>
          <CreateClienti />
        </Col>
      </Row>
      <Row>
        <ListaClienti />
      </Row>
    </Container>
  );
}

export default Clienti;
