import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getClienti, getUsers } from "../redux/actions";

const ModifyUsers = (props) => {
  const token = useSelector((state) => state.token.content);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

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
      const response = await fetch("http://localhost:3001/users/" + props.idProp, {
        method: "PUT",
        body: JSON.stringify({
          username: username,
          email: email,
          nome: nome,
          cognome: cognome,
          password: password,
        }),
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        handleClose();
        dispatch(getUsers());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeCognome = (e) => {
    setCognome(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeUsername = (e) => {
    setusername(e.target.value);
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control placeholder="Nome" onChange={handleChangeNome} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control placeholder="Cognome" onChange={handleChangeCognome} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control placeholder="Username" onChange={handleChangeUsername} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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

export default ModifyUsers;
