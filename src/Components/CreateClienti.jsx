import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";

const CreateClienti = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button onClick={handleShow}>Aggiungi</Button>

      <Modal show={show} onHide={handleClose} className="mt-3">
        <Form noValidate validated={validated}>
          <Modal.Header>
            <Modal.Title>
              <p>Crea Uno Nuovo Cliente</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Nome Contatto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Cognome Contatto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Email Contatto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>Telefono Contatto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label>Pec</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom06">
              <Form.Label>Ragione Sociale</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom07">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom08">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom09">
              <Form.Label>Partita Iva 11 caratteri</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom10">
              <Form.Label>Fatturato Anuale</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom11">
              <Form.Label>Tipo Cliente</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom12">
              <Form.Label>Via</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom13">
              <Form.Label>Civico</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom14">
              <Form.Label>Provincia</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom15">
              <Form.Label>Comune</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
};

export default CreateClienti;
