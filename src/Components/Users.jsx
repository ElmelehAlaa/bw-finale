import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../redux/actions";
import ModifyUsers from "./ModifyUsers";

const Users = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users.content);
  console.log(userState);
  return (
    <Container>
      <Row className="list-group list-group-horizontal mt-5">
        <Col xs={1} className="list-group-item">
          ID
        </Col>
        <Col xs={2} className="list-group-item">
          Nome Cognome
        </Col>
        <Col xs={2} className="list-group-item">
          Email
        </Col>
        <Col xs={2} className="list-group-item">
          Username
        </Col>
        <Col xs={2} className="list-group-item"></Col>
        <Col xs={2} className="list-group-item"></Col>
      </Row>
      {userState.lenght !== 0 ? (
        <>
          {userState.map((clienti, i) => (
            <Row key={i} className="list-group list-group-horizontal">
              <Col xs={1} className="list-group-item">
                {clienti.id}
              </Col>
              <Col xs={2} className="list-group-item">
                {clienti.nome} {clienti.cognome}
              </Col>
              <Col xs={2} className="list-group-item">
                {clienti.email}
              </Col>
              <Col xs={2} className="list-group-item">
                {clienti.username}
              </Col>
              <Col xs={2} className="list-group-item">
                <Button variant="danger" onClick={() => dispatch(deleteUsers(clienti.id))}>
                  Remove
                </Button>
              </Col>
              <Col xs={2} className="list-group-item">
                <ModifyUsers idProp={clienti.id} />
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <>NON CI SONO User</>
      )}
    </Container>
  );
};
export default Users;
