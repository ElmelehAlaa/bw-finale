import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import ListaClienti from "./ListaClienti";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClienti } from "../redux/actions";
import CreateClienti from "./CreateClienti";

function Clienti() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <div class="card">
            <img
              style={{ height: "214px" }}
              src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170504970/77829658-immagine-a-colori-cartoon-met%C3%A0-corpo-donna-senza-volto-servizio-clienti-con-le-cuffie-illustrazione.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Clienti</h5>
              <>
                <CreateClienti />
              </>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <ListaClienti />
      </Row>
    </Container>
  );
}

export default Clienti;
