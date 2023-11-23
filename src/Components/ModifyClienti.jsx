import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getClienti } from "../redux/actions";

const ModifyClienti = (props) => {
  const token = useSelector((state) => state.token.content);
  const [nomeContatto, setNomeContatto] = useState("");
  const [cognomeContatto, setCognomeContatto] = useState("");
  const [emailContatto, setEmailContatto] = useState("");
  const [telefonoContatto, setTelefonoContatto] = useState("");
  const [ragioneSociale, setRagioneSociale] = useState("");
  const [partitaIva, setPartitaIva] = useState("");
  const [email, setEmail] = useState("");
  const [fatturatoAnnuale, setFatturatoAnnuale] = useState("");
  const [pec, setPec] = useState("");
  const [telefono, setTelefono] = useState("");
  const [via, setVia] = useState("");
  const [civico, setCivico] = useState("");
  const [tipoCliente, setTipoCliente] = useState("");
  const [provincia, setProvincia] = useState("");
  const [comune, setComune] = useState("");
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const response = await fetch("http://localhost:3001/clienti/" + props.idProp, {
        method: "PUT",
        body: JSON.stringify({
          ragioneSociale: ragioneSociale,
          partitaIva: partitaIva,
          email: email,
          fatturatoAnnuale: fatturatoAnnuale,
          pec: pec,
          telefono: telefono,
          emailContatto: emailContatto,
          nomeContatto: nomeContatto,
          cognomeContatto: cognomeContatto,
          telefonoContatto: telefonoContatto,
          via1: via,
          civico1: civico,
          tipoCliente: tipoCliente,
          provincia1: provincia,
          comune1: comune,
        }),
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        handleClose();
        dispatch(getClienti());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCivico = (e) => {
    setCivico(e.target.value);
  };
  const handleChangeRagioneSociale = (e) => {
    setRagioneSociale(e.target.value);
  };
  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const handleChangeTelefonoContatto = (e) => {
    setTelefonoContatto(e.target.value);
  };
  const handleChangeCognome = (e) => {
    setCognomeContatto(e.target.value);
  };
  const handleChangeComune = (e) => {
    setComune(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeEmailContatto = (e) => {
    setEmailContatto(e.target.value);
  };
  const handleChangeFatturato = (e) => {
    setFatturatoAnnuale(e.target.value);
  };
  const handleChangeNome = (e) => {
    setNomeContatto(e.target.value);
  };
  const handleChangePartitaIva = (e) => {
    setPartitaIva(e.target.value);
  };
  const handleChangePec = (e) => {
    setPec(e.target.value);
  };
  const handleChangeProvincia = (e) => {
    setProvincia(e.target.value);
  };
  const handleChangeTipoCliente = (e) => {
    setTipoCliente(e.target.value);
  };
  const handleChangeVia = (e) => {
    setVia(e.target.value);
  };

  return (
    <>
      <Button onClick={handleShow}>Modifica</Button>

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
              <Form.Control type="text" onChange={handleChangeNome} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Cognome Contatto</Form.Label>
              <Form.Control type="text" onChange={handleChangeCognome} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>Email Contatto</Form.Label>
              <Form.Control type="text" onChange={handleChangeEmailContatto} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>Telefono Contatto</Form.Label>
              <Form.Control type="text" onChange={handleChangeTelefonoContatto} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label>Pec</Form.Label>
              <Form.Control type="text" onChange={handleChangePec} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom06">
              <Form.Label>Ragione Sociale</Form.Label>
              <Form.Control type="text" onChange={handleChangeRagioneSociale} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom07">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" onChange={handleChangeEmail} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom08">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" onChange={handleChangeTelefono} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom09">
              <Form.Label>Partita Iva 11 caratteri</Form.Label>
              <Form.Control type="text" onChange={handleChangePartitaIva} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom10">
              <Form.Label>Fatturato Anuale</Form.Label>
              <Form.Control type="text" onChange={handleChangeFatturato} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom11">
              <Form.Label>Tipo Cliente</Form.Label>
              <Form.Control type="text" onChange={handleChangeTipoCliente} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom12">
              <Form.Label>Via</Form.Label>
              <Form.Control type="text" onChange={handleChangeVia} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom13">
              <Form.Label>Civico</Form.Label>
              <Form.Control type="text" onChange={handleChangeCivico} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom14">
              <Form.Label>Provincia</Form.Label>
              <Form.Control type="text" onChange={handleChangeProvincia} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom15">
              <Form.Label>Comune</Form.Label>
              <Form.Control type="text" onChange={handleChangeComune} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={(event) => handleSubmit(event)}>
              Save Cliente
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModifyClienti;
