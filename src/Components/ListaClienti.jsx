import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteCliente } from "../redux/actions";
import ModifyClienti from "./ModifyClienti";

const ListaClienti = () => {
  const dispatch = useDispatch();
  const clientiState = useSelector((state) => state.clienti.content);
  console.log(clientiState);
  return (
    <Container>
      {clientiState.lenght !== 0 ? (
        <>
          {clientiState.map((clienti, i) => (
            <Row key={i} className="list-group list-group-horizontal">
              <Col xs={1} className="list-group-item">
                {clienti.id}
              </Col>
              <Col xs={2} className="list-group-item">
                {clienti.nomeContatto} {clienti.cognomeContatto}
              </Col>
              <Col xs={2} className="list-group-item">
                {clienti.emailContatto}
              </Col>
              <Col xs={1} className="list-group-item">
                {clienti.telefonoContatto}
              </Col>
              <Col xs={1} className="list-group-item">
                {clienti.fatturatoAnnuale}
              </Col>
              <Col xs={2} className="list-group-item">
                {clienti.indirizzo1.via} {clienti.indirizzo1.civico} {clienti.indirizzo1.comune.nome}
              </Col>
              <Col xs={1} className="list-group-item">
                <Button variant="danger" onClick={() => dispatch(deleteCliente(clienti.id))}>
                  Remove
                </Button>
              </Col>
              <Col xs={2} className="list-group-item">
                <ModifyClienti idProp={clienti.id} />
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <>NON CI SONO CLIENTI</>
      )}
    </Container>
  );
};

export default ListaClienti;
