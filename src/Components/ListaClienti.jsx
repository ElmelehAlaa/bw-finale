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
            <Row key={i}>
              <Col xs={2}>{clienti.id}</Col>
              <Col>
                {clienti.nomeContatto} {clienti.cognomeContatto}
              </Col>
              <Col>{clienti.emailContatto}</Col>
              <Col>{clienti.telefonoContatto}</Col>
              <Col>{clienti.fatturatoAnnuale}</Col>
              <Col>
                Via {clienti.indirizzo1.via} {clienti.indirizzo1.civico} {clienti.indirizzo1.comune.nome}
              </Col>
              <Col>
                <Button onClick={() => dispatch(deleteCliente(clienti.id))}>Remove</Button>
              </Col>
              <Col>
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
