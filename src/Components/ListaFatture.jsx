import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchFatture, handleDeleteFattura } from "../redux/actions";
import ModifyFatture from "./ModifyFatture";

const ListaFatture = () => {
  const fattureFetched = useSelector((state) => state.fatture.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFatture());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(fattureFetched);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <h2>Lista Fatture</h2>
          {fattureFetched ? (
            fattureFetched.content && fattureFetched.content.length !== 0 ? (
              fattureFetched.content.map((singleFattura) => (
                <ListGroup className="mt-5" key={singleFattura.id}>
                  <ListGroup.Item>
                    <strong>ID:</strong> {singleFattura.id}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Numero Fattura:</strong> {singleFattura.numeroFattura}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Importo:</strong> {singleFattura.importo}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Data:</strong> {singleFattura.data}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Stato Fattura:</strong> {singleFattura.statoFattura.stato}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant="danger" onClick={() => dispatch(handleDeleteFattura(singleFattura.id))}>
                      Elimina
                    </Button>{" "}
                    <ModifyFatture idProp={singleFattura.id} />
                  </ListGroup.Item>
                </ListGroup>
              ))
            ) : (
              <p>Nessuna fattura disponibile.</p>
            )
          ) : (
            <p>Caricamento...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListaFatture;
