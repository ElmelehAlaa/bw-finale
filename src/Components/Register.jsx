import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form className="d-flex align-items-center flex-column">
      <h2>Benvenuto! Registrati per accedere al sito</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control placeholder="Nome" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cognome</Form.Label>
        <Form.Control placeholder="Cognome" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>UserName</Form.Label>
        <Form.Control placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrati
      </Button>
    </Form>
  );
}

export default BasicExample;
