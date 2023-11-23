import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const CreateFatture = () => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const [formData, setFormData] = useState({
    clienteID: "",
    importo: "",
    numeroFattura: "",
  });

  return (
    <>
      <Button onClick={handleShow}>Aggiungi</Button>
      <Modal show={show} onHide={handleClose} className="mt-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>
              <p>Crea Una nuova fattura</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Cliente ID</Form.Label>
              <Form.Control type="text" name="clienteID" value={formData.clienteID} onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">Campo obbligatorio</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Importo</Form.Label>
              <Form.Control type="text" name="importo" value={formData.importo} onChange={handleChange} required />
              <Form.Control.Feedback type="invalid">Campo obbligatorio</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Numero Fattura</Form.Label>
              <Form.Control
                type="text"
                name="numeroFattura"
                value={formData.numeroFattura}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">Campo obbligatorio</Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
            <Button type="submit" variant="primary">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateFatture;
