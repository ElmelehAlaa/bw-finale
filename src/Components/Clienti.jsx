import { Col, Container, Row } from "react-bootstrap";
import ListaClienti from "./ListaClienti";

import CreateClienti from "./CreateClienti";
import { useEffect } from "react";
import { getClienti } from "../redux/actions";
import { useDispatch } from "react-redux";

function Clienti() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClienti());
    console.log("getClienti");
  }, []);

  return (
    <Container fluid>
      <Row className="list-group list-group-horizontal mt-5">
        <Col xs={1} className="list-group-item">
          Id
        </Col>
        <Col xs={2} className="list-group-item">
          Nome Cognome Contatto
        </Col>
        <Col xs={2} className="list-group-item">
          Email Contatto
        </Col>
        <Col xs={1} className="list-group-item">
          Telefono Contatto
        </Col>
        <Col xs={1} className="list-group-item">
          Fatturato Annuale
        </Col>
        <Col xs={2} className="list-group-item">
          Via
        </Col>
        <Col xs={1} className="list-group-item"></Col>
        <Col xs={2} className="list-group-item">
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
