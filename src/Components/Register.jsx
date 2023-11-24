import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { RegisterProfile } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    const cognome = document.querySelector("#cognome").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const username = document.querySelector("#username").value;

    const body = {
      nome: nome,
      cognome: cognome,
      username: username,
      password: password,
      email: email,
    };

    dispatch(RegisterProfile(body));
    navigation("/");
  };
  return (
    <div className="background-register">
      <div className="bg-white loginDiv p-5" style={{ width: "350px", borderRadius: "30px", border: "solid" }}>
        <Form className="d-flex align-items-center flex-column" onSubmit={handleSubmit}>
          <h2>Benvenuto! Registrati per accedere al sito</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="Nome" id="nome" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cognome</Form.Label>
            <Form.Control placeholder="Cognome" id="cognome" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>UserName</Form.Label>
            <Form.Control placeholder="Username" id="username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrati
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;
