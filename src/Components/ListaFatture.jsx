import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFatture } from "../redux/actions";
import ModifyFatture from "./ModifyFatture";
import "react-datepicker/dist/react-datepicker.css";

const ListaFatture = () => {
  const fattureFetched = useSelector((state) => state.fatture.content);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useState({
    statoFattura: "",
    data: "",
    importoMin: "",
    importoMax: "",
    anno: "",
    clientId: "",
  });
  const [firstSearch, setFirstSearch] = useState(false);

  useEffect(() => {
    if (firstSearch) {
      dispatch(fetchFatture(searchParams));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstSearch]);

  const handleSearch = () => {
    setFirstSearch(true);
    dispatch(fetchFatture(searchParams));
  };
  const handleDeleteFattura = (fatturaId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/fatture/${fatturaId}`, {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzAwNzI5NDUzLCJleHAiOjE3MDEzMzQyNTN9.60Gb5CcjzJB1zsJyCXzEXMqwXaalAp6izPeb4YuwEB4",
          },
        });

        if (response.ok) {
          dispatch(fetchFatture(searchParams));
        } else {
          console.log("Errore durante l'eliminazione della fattura");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <h2>Lista Fatture</h2>
          <Form>
            <Form.Group controlId="statoFattura">
              <Form.Label>Stato Fattura</Form.Label>
              <Form.Control
                as="select"
                value={searchParams.statoFattura}
                onChange={(e) => setSearchParams({ ...searchParams, statoFattura: e.target.value })}
              >
                <option value="">Seleziona uno stato</option>
                <option value="BOZZA">BOZZA</option>
                <option value="PAGATA">PAGATA</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="data">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                value={searchParams.data || ""}
                onChange={(e) => setSearchParams({ ...searchParams, data: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="importoMin">
              <Form.Label>Importo Minimo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Importo Minimo"
                value={searchParams.importoMin}
                onChange={(e) => setSearchParams({ ...searchParams, importoMin: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="importoMax">
              <Form.Label>Importo Massimo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Importo Massimo"
                value={searchParams.importoMax}
                onChange={(e) => setSearchParams({ ...searchParams, importoMax: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="anno">
              <Form.Label>Anno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Anno"
                value={searchParams.anno}
                onChange={(e) => setSearchParams({ ...searchParams, anno: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="clientId">
              <Form.Label>ID Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID Cliente"
                value={searchParams.clientId}
                onChange={(e) => setSearchParams({ ...searchParams, clientId: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Cerca
            </Button>
          </Form>
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
                    <ModifyFatture
                      idProp={singleFattura.id}
                      clienteId={singleFattura.cliente.id}
                      importo={singleFattura.importo}
                      numeroFattura={singleFattura.numeroFattura}
                      statoFattura={singleFattura.statoFattura.stato}
                    />
                  </ListGroup.Item>
                </ListGroup>
              ))
            ) : (
              <p style={{ display: firstSearch ? "block" : "none" }}>Nessuna fattura disponibile</p>
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
